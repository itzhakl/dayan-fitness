import User from '../models/User';
import Product from '../models/Product';
import Category from '../models/Category';

export const allProductsDal = async () => {
  try {
    const data = await Product.find({});
    if (!data) throw new Error('no products to show')
    return data;
  } catch (error) {
    console.error('Error in allProductsDal:', error);
    throw error;
  }
};

export const allCategoriesDal = async () => {
  try {
    const data = await Category.find({});
    if (!data) throw new Error("categories dosn't exist")
    return data;
  } catch (error) {
    console.error('Error in allCategoriesDal:', error);
    throw error;
  }
}


export const productByIdDal = async (id: any) => {
  try {
    const updateClicks = await Product.findByIdAndUpdate(id, { $inc: { clicks: 1 } })
    return updateClicks
  } catch (error) {
    console.error('Error in productByIdDal:', error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};


export const categoryByIDDal = async (id: string) => {
  try {
    console.log(id);
    const updateClicks = await Category.findByIdAndUpdate(id, { $inc: { clicks: 1 } })
    const category = await Product.find({ category: id });
    if (!category) throw new Error('Category not found')
    return category;
  } catch (error) {
    throw error; // Rethrow the error to handle it at the higher level
  }
}

export const topFiveCatDal = async () => {
  try {
    const categories = await Category.find().sort({ 'clicks': -1 }).limit(5);
    return categories;
  } catch (error) {
    throw error; // Rethrow the error to handle it at the higher level
  }
}

export const topFiveProdDal = async () => {
  try {
    const products = await Product.find().sort({ 'clicks': -1 }).limit(5);
    return products;
  } catch (error) {
    throw error; // Rethrow the error to handle it at the higher level
  }
}
