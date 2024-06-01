import {
  allProductsDal,
  // allCartsDal,
  allCategoriesDal,
  productByIdDal,
  // cartByIdDal,
  categoryByIDDal,
  topFiveCatDal,
  topFiveProdDal,
} from "../DAL/productsDAL";
import { Iuser } from "../models/UserModel";

interface NewUser {
  email: string;
  password: string;
}

export const allProductsSrv = async () => {
  const products = await allProductsDal();
  // console.log(products);
  return products;
};

// export const allCartsSrv = async() => {
// const carts = await allCartsDal()
// return carts
// }

export const allCategoriesSrv = async () => {
  const categories = await allCategoriesDal();
  return categories;
};

export const productByIdSrv = async (id: string) => {
  try {
    const product = await productByIdDal(id);
    if (!product) throw new Error("No Product Found");
    return product;
  } catch (err) {
    throw err;
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

export const categoryByIDSrv = async (id: string) => {
  try {
    const data = await categoryByIDDal(id);
    if (!data) {
      throw new Error("doesnt exist");
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const topFiveCatSrv = async () => {
  try {
    const data = await topFiveCatDal();
    if (!data) throw new Error("doesnt exist");
    return data;
  } catch (error) {
    throw error;
  }
};

export const topFiveProdSrv = async () => {
  try {
    const data = await topFiveProdDal();
    if (!data) throw new Error("doesnt exist");
    return data;
  } catch (error) {
    throw error;
  }
};

export const productsCompareSrv = async (productsId: string[]) => {
  try {
    let products = [];
    for (let i = 0; i < productsId.length; i++) {
      const product = await productByIdDal(productsId[i]);
      if (!product)
        throw new Error(`Product with ID ${productsId[i]} is not available`);
      products.push(product);
    }
    return products;
  } catch (error) {
    throw error;
  }
};
