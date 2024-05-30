import mongoose from 'mongoose';


export interface Iuser {
  name: string,
  email: string,
  password: string,
  cart: {
    items?: Array<{ productId: any; quantity: number }>,
    totalPrice: number
  }
}
// Define the User schema
const userSchema = new mongoose.Schema<Iuser>({
  name: String,
  email: String,
  password: String,
  cart: {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'Product' 
        },
        quantity: Number,
        price: Number  
      }
    ],
    totalPrice: Number
  }
}, { versionKey: false });

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other files
export default User;
