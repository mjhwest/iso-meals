const { AuthenticationError } = require("apollo-server-express");
const { User, Category, Order, Product } = require("../models");
const { signToken } = require("../utils/auth");

//ADD STRIPE LATER

const resolvers = {
  Query: {
    //find all users
    users: async () => {
      return User.find();
    },
    //find user by username
    user: async (parent, { username }) => {
      return User.findOne({ username });
      // return User.findOne({ username }).populate('thoughts');
    },

    //find all categories
    categories: async () => {
      return await Category.find();
    },

    //products by cateogry and name
    products: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Product.find(params).populate("category");
    },

    //product by id
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },

    //order by id
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }
      throw new AuthenticationError('Not logged in');
    },

    //checkout IS NOT STARTED
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

    //ADD ORDER 
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });
        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    

    //UPDATE PRODUCT (Quantity)
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  },
};

module.exports = resolvers;
