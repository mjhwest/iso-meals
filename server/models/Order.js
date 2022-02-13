const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({

  // user connected to order that buys product 
  user: {

        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'User',
  },

  //order items, array which has name, quantity, price 
  orderItems: [
    {
      name: {type: String, required: true }, 
      quantity: {type: Number, required: true }, 
      image: {type: String, required: true }, 
      price: {type: Number, required: true }, 

      // product is an objectID, but linked to product model, 
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'Product'
      }
    }
  ],

  shippingAddress: {
    address: { type: String, required: true}, 
    city: { type: String, required: true}, 
    postCode: { type: String, required: true}, 
  },

  paymentResult: {
    id: {type: String},
    status: {type: String},
    update_time: {type: String},
    email_address: {type: String},
  }, 

  taxPrice: {
    type: Number, 
    required: true, 
    default: 0.0 
  }, 
  shippingPrice: {
    type: Number, 
    required: true, 
    default: 0.0 
  }, 
  totalPrice: {
    type: Number, 
    required: true, 
    default: 0.0 
  }, 

  isPaid: {
    type: Boolean, 
    required: true, 
    default: false, 
  }, 

  paidAt: {
    type: Date, 
    required: true, 
  }, 

  isDelivered: {
    type: Boolean, 
    required: true, 
    default: false, 
  },

  deliveredAt: {
    type: Date,
  },

},

{
  timestamps: true, 
}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


  
  


  // purchaseDate: {
  //   type: String,
  // },
  // products: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Product'
  //   }
  // ]