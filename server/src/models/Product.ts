import mongoose from 'mongoose';

interface Iproduct {
  name: string,
  price: number,
  clicks: number,
  specifications: [
    color: string,
    size: string,
    weight: number
  ]
  category: mongoose.Schema.Types.ObjectId, 
}

const productSchema = new mongoose.Schema<Iproduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
  specifications: {
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category' 
  },
}, { versionKey: false });

const Product = mongoose.model('Product', productSchema);

export default Product;
