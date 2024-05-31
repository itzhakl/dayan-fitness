import User from '../models/User';
import Product from '../models/Product';
import Category from '../models/Category';
// import User from 'models/user';

export const allUsersDal = async () => {
  try {
    const data = await User.find({});
    return data;
  } catch (err) {
    console.log(err);
    throw err
  }
}


// export const allCartsDal = async () => {
//   try {
//     console.log('Fetching all carts...');
//     const carts = await Cart.find({});
//     console.log(`Fetched ${carts.length} carts successfully`);
//     return carts;
//   } catch (error) {
//     console.error('Error in allCartsDal:', error);

//     throw error; // Re-throw the error to be handled by the calling code
//   }
// };




export const loginDal = async (userFromClient: any) => {
  try {
    console.log(userFromClient);

    const userFromDB = await User.findOne({ email: userFromClient.email });
    console.log(userFromDB);
    return userFromDB
  } catch (error) {
    console.error('Error in loginDal:', error);
    throw error; // Re-throw the error to be handled by the calling code 
  }
}

export const signUpDal = async (newUser: any) => {
  try {
    const result = await User.find({ email: newUser.email });
    if (!result || !result[0]) {
      const newUserDb = new User(newUser);
      const data = await User.insertMany([newUser]);
      console.log(newUserDb);
      console.log('User added successfully:', data);
      return data;

    }
    else {
      console.log("Email already exists");
      return "Email already exists"
    }

  } catch (error) {
    throw error; // Rethrow the error to handle it at the higher level
  }
};



// export const cartByIdDal = async (id: string) => {
// try {
//   const cart = await Cart.findById(id);

//   if (!cart) {
//     console.log(`Cart with ID ${id} not found.`);
//     throw new Error('cart not found')
//   }

//   console.log('Cart found:', cart);
//   return cart;
// } catch (error) {
//   console.error('Error fetching cart:');
//   throw error; // Rethrow the error to handle it at the higher level
// }
// };

export const addProductDal = async (cartUpdate: UpdateCart) => {
  try {
    const price = (await Product.findById(cartUpdate.productId))?.price
    if (!price) throw new Error('product not found')
    const data = await User.findByIdAndUpdate(cartUpdate.userId, {
      cart:
      {
        $push: {
          items:
          {
            product: cartUpdate.productId
          }
        },
      }, $inc: {
        totalPrice: price
      }
    });
    if (!data) {
      console.log(`Cart with ID ${cartUpdate} not found.`);
      throw new Error('cart not found')
    }
    return data;
  } catch (error) {
    throw error; // Rethrow the error to handle it at the higher level
  }
};

interface UpdateCart {
  userId: string
  productId: string
}

export const removeProductDal = async ( updateCart: UpdateCart ) => {
  try {
    const {productId, userId} = updateCart
    let price = (await Product.findById(productId))?.price
    if (!price) throw new Error('product not legal')
    const userData = await User.findOneAndUpdate(
      { _id: userId, 'cart.items.product': productId },
      {
        $pull: { 'cart.items': { product: productId } },
        $inc: { 'cart.totalPrice': - price }
      },
      { new: true }
    );

    if (!userData) {
      throw new Error('User not found');
    }

    return userData;
  } catch (error) {
    throw error; // Rethrow the error to handle it at the higher level
  }
};


export const userCartDal = async (id: string) => {
  try {
    const data = await User.findById(id)
    if (!data) throw new Error("user not found")
    return data.cart;
  } catch (error) {
    throw error;
  }
};

export const userDal = async (id: string) => {
  try {
    const data = await User.findById(id)
    if (!data) throw new Error("User not found")
    return data;
  } catch (error) {
    throw error; // Rethrow the error to handle it at the higher level
  }
};