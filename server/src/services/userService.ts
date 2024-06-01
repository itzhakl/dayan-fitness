import {
  signUpDal,
  allUsersDal,
  loginDal,
  addProductDal,
  userCartDal,
  userDal,
  removeProductDal,
  // cartByIdDal,
  // allCartsDal,
} from "../DAL/usersDAL";
import { productByIdDal } from "../DAL/productsDAL";
import { Iuser } from "../models/UserModel";

import bcrypt from "bcrypt";

const hashingPassword = async (password: string): Promise<string> => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) throw new Error("failed to hashing the password");
    console.log("Hashed Password:", hashedPassword);
    return hashedPassword;
  } catch (err) {
    console.log("failed to hashing the password");
    throw err;
  }
};

const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  try {
    const isMatching = await bcrypt.compare(password, hash);
    if (!isMatching) console.log("Passwords don't match");
    console.log("Passwords are matching");
    return isMatching;
  } catch (error) {
    console.log("Failed comparing passwords");
    throw error;
  }
};

interface NewUser {
  email: string;
  password: string;
}

export async function signUpSrv(newUser: NewUser) {
  try {
    const { email, password } = newUser;
    const hashedPassword = await hashingPassword(password);
    return signUpDal({ email, password: hashedPassword });
  } catch (error) {
    throw error;
  }
}

export const allUsersSrv = async () => {
  const users = await allUsersDal();
  // console.log(products);
  return users;
};

// export const allCartsSrv = async() => {
// const carts = await allCartsDal()
// return carts
// }

export const loginSrv = async (userFromClient: any) => {
  try {
    const userFromDB = await loginDal(userFromClient);
    if (!userFromDB) {
      throw new Error("mail dosn't exist");
    }
    const isValidated = await comparePassword(
      userFromClient.password,
      userFromDB.password
    );
    if (!isValidated) {
      console.log("wrong password");
      throw new Error("wrong password");
    }
    return userFromDB._id;
  } catch (error) {
    console.log(error);
    throw new Error("error in the server");
  }
};

// export const cartByIdSrv = async(userFromClient: any) => {
//   try{
//     const data = await cartByIdDal(userFromClient)
//     if(!data){
//       throw new Error("dosn't exist")
//     }
//     return data
//   } catch {
//     throw new Error('error in the server')
//   }
// }

export const addProductSrv = async (updateCart: UpdateCart) => {
  try {
    const data = await addProductDal(updateCart);
    if (!data) {
      throw new Error("dosn't exist");
    }
    return data;
  } catch {
    throw new Error("error in the server");
  }
};

interface UpdateCart {
  userId: string;
  productId: string;
}

export const removeProductSrv = async (updateCart: UpdateCart) => {
  try {
    const data = await removeProductDal(updateCart);
    if (!data) throw new Error("dosn't exist");
    return data;
  } catch (error) {
    throw error;
  }
};

export const userCartSrv = async (id: string) => {
  try {
    const data = await userCartDal(id);
    if (!data) throw new Error("dosn't exist");
    const cartProd = data.items?.map(async (e: any) => {
      await productByIdDal(e.productId);
    });
    return { data, products: cartProd };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const userSrv = async (id: string) => {
  try {
    const data = await userDal(id);
    if (!data) {
      throw new Error("doesnt exist");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
