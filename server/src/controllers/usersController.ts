import { Request, Response } from 'express';
import {
  allUsersSrv,
  signUpSrv,
  loginSrv,
  addProductSrv,
  userSrv,
  userCartSrv,
  removeProductSrv,
  // cartByIdSrv,
} from '../services/userService';


export const signUpCont = (req: Request, res: Response) => {
  try {
    return signUpSrv(req.body).then((data: any) => {
      res.status(201).json(data);
    });
  } catch (error: any) {
    console.log(error);

    if (error.code === "11000") { // it could be .status, .code etc.. not sure
      res.status(500).send({ status: "error", msg: "User already exist." });
    }
    res.status(500).json({ status: "error" });
  }
};

export const allUsersCont = async (req: Request, res: Response) => {
  try {
    let data = await allUsersSrv();
    res.status(201).json(data);
  } catch (error) {
    console.log("Error in getting users");
    res.status(403).json({ error: "Couldn't fetch the users!" });
  }
};

// export const allCartsCont = async (req: Request, res: Response) => {
//   const AllCarts = await allCartsSrv();
//   res.status(201).json(AllCarts);
// };


export const loginCont = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const id = await loginSrv(userData);

    // Set the JWT token in a cookie with HttpOnly flag
    res.cookie('jwt', id, { httpOnly: true });

    res.status(200).json({ message: 'Login Successful', id });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(403).json({ message: 'Login Failed!' });
  }
};


// export const cartByIdCont = async (req: Request, res: Response) => {
//   try {
//     const cartId = req.params.id;
//     const data = await cartByIdSrv(req.params.id);
//     res.status(201).json(data);

//   } catch (error) {
//     console.log("Error in getting carts by id");
//     res.status(403).json({ error: "Couldn't fetch the carts!" });
//   }
// };

export const addProductCont = async (req: Request, res: Response) => {
  try {
    const newCartItem = req.body;
    const result = await addProductSrv(newCartItem.id);
    if (!result) throw Error('Failed to add item');
    else res.sendStatus(201).json(result);
  } catch (error) {
    console.log('Error in adding a product to the cart');
    res.status(500).send({ message: 'Failed to add item!' });
  }
};

export const removeProductCont = async (req: Request, res: Response) => {
  try {
    const updateCart = req.body;
    const result = await removeProductSrv(updateCart);
    if (!result) throw Error('Failed to delete item from cart');
    res.sendStatus(200).json(result);
  } catch (error) {
    console.log('Error in deleting an item from the cart');
    res.status(500).send({ message: 'Failed to delete item!' });
  }
}


export const userCartCont = async (req: Request, res: Response) => {
  try {
    const data = await userCartSrv(req.body.id);
    if (!data) throw new Error("user dosn't exist")
    res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }
}

export const userCont = async (req: Request, res: Response) => {
  try {
    const data = await userSrv(req.params.id);
    res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }
};