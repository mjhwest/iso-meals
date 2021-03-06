const { AuthenticationError } = require("apollo-server-express");
const { User, Category, Order, Product } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
  Query: {
    //find all users
    users: async () => {
      return await User.find();
    },

    //all products
    products: async () => {
      const products = await Product.find();
      console.log(products);
      return products;
    },

    //product by id
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },

    user: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('cart')

        return user;
      }
      throw new AuthenticationError("Not logged in");
    },

    //order by id
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "user",
        });

        return user.orders.id(_id);
      }
      throw new AuthenticationError("Not logged in");
    },

    //checkout
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products").execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "aud",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      return { session: session.id };
    },
  },

  Mutation: {
    //ADD USER
    addUser: async (parent, { username, email, password, address, phone }) => {
      const user = await User.create({
        username,
        email,
        address,
        phone,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    //LOGIN USER
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    //ADD ORDER VERSION 2
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = await (
          await Order.create({
            products,
            purchaseDate: new Date().toISOString(),
          })
        )
          .populate("products")
          .execPopulate();
        console.log(order);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });
        return order;
      }
      throw new AuthenticationError("Not logged in");
    },

    //UPDATE USER
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },

    //UPDATE PRODUCT (Quantity)
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    addToCart: async (parent, { productId }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          context.user._id,
          { $push: { cart: productId } },
          { new: true }
        );
      }
      throw new AuthenticationError("Not logged in");
    },

    removeItemFromCart: 
    async (parent, { productId }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { cart: productId } },
          { new: true }
        );
      }
      throw new AuthenticationError("Not logged in");
    },



  },



  //HOW TO GET PRODUCTS IN ORDER
  Order: {
    products: async (parent) => {
      return await Product.find({ _id: { $in: parent.products } });
    },
  },
  User: {
    cart: async (parent) => {
      return await Product.find({ _id: { $in: parent.cart } });
    },
  },
};

module.exports = resolvers;
