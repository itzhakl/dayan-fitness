import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose'

const uri = "mongodb+srv://itzhak444:cgDuWAvnHGD2vEED@itzhak.uhsisgn.mongodb.net/testing?retryWrites=true&w=majority&tls=true";

export const connect = async () => {
  await mongoose.connect(uri)
  console.log('Connected to db!');
}

// const userSchema = new Schema({
//   email: String,
//   password: String,
// });

// export const users = model('users', userSchema)


export const client = new MongoClient(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dataBase = client.db('store');
export const categoriesCollection = dataBase.collection('categories');
export const productsCollection = dataBase.collection('products');
export const usersCollection = dataBase.collection('users');
export const cartsCollection = dataBase.collection('carts');