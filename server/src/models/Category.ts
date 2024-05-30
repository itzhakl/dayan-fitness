import mongoose, { ObjectId } from 'mongoose'

interface Icategory {
  title: string,
  clicks: number,
  items: mongoose.Schema.Types.ObjectId []
}

const categorySchema = new mongoose.Schema<Icategory>({

  title: {
    type: String,
    required: true
  },

  clicks: {
    type: Number,
  },

  items: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product' 
  }],

}, { versionKey: false });

const Category = mongoose.model('Category', categorySchema);

export default Category