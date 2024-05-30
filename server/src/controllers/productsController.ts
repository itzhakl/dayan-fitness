import { Request, Response } from 'express';
import {
  allProductsSrv,
  allCategoriesSrv,
  productByIdSrv,
  categoryByIDSrv,
  topFiveCatSrv,
  topFiveProdSrv,
  productsCompareSrv,
  // allCartsSrv,
} from '../services/productService';



export const allProductsCont = async (req: Request, res: Response) => {
  try {
    let data = await allProductsSrv();
    res.status(201).json(data);
  } catch (error) {
    console.log("Error in getting products");
    res.status(403).json({ error: "Couldn't fetch the products!" });
  }
};

export const allCategoriesCont = async (req: Request, res: Response) => {
  try {
    let data = await allCategoriesSrv();
    res.status(201).json(data);
  } catch (error) {
    console.log("Error in getting categories");
    res.status(403).json({ error: "Couldn't fetch the categories!" });
  }
};


export const productByIdCont = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log(id, 'tryyy');

    const result = await productByIdSrv(id);
    res.status(200).json(result);

  } catch (err) {
    console.log("Error in getting products by Id");
    res.status(500).json({ errMsg: "Product not found" });
  }
};

// export const allCartsCont = async (req: Request, res: Response) => {
//   const AllCarts = await allCartsSrv();
//   res.status(201).json(AllCarts);
// };

export const categoryByIDCont = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string

    const data = await categoryByIDSrv(id);
    res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }
};

export const topFiveCatCont = async (req: Request, res: Response) => {
  try {
    const data = await topFiveCatSrv();
    res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }
}

export const topFiveProdCont = async (req: Request, res: Response) => {
  try {
    const data = await topFiveProdSrv();
    res.status(201).json(data);
    } catch (error) {
      console.log('Error', error);
      res.status(500).json(error)
      }
}

export const productsCompareCont = async (req: Request, res: Response) => {
  try {
    const data = await productsCompareSrv(req.body);
    res.status(201).json(data);
    } catch (error) {
      console.log('Error', error);
      res.status(500).json(error)
      }
}