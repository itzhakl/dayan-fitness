import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  total_price: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'products'
    },
  ],
});

const Order = mongoose.model('Order', cartSchema);

export default Order;
