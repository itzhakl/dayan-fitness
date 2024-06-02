import { Request, Response } from 'express';
import {
  registerUser,
  loginUser,
  createPayment,
  saveHealthDeclaration,
  grantBotAccess,
  completePurchaseService,
  saveUserDetailsService,
} from "../services/gymBotService";

export const register = async (req: Request, res: Response) => {
  try {
    await registerUser(req.body);
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await loginUser(req.body);
    res.send({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ error: error.message });
    } else {
      res.status(400).send({ error: 'An unknown error occurred' });
    }
  }
};

export const checkout = async (req: Request, res: Response) => {
  try {
    const approvalUrl = await createPayment(req.body);
    res.send({ approvalUrl });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};

export const healthDeclaration = async (req: Request, res: Response) => {
  try {
    await saveHealthDeclaration(req.body);
    res.status(201).send({ message: 'Health declaration saved successfully' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};

export const botAccess = async (req: Request, res: Response) => {
  try {
    await grantBotAccess(req.body);
    res.status(200).send({ message: 'Bot access granted' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};
export const completePurchaseController = async (req: Request, res: Response) => {
  try {
    await completePurchaseService(req.body);
    res.status(200).send({ message: 'User registration successful' });
  } catch (error) {
    if (error instanceof Error) {
      
      console.log("Error in completePurchaseController:", error.message);
      
      // Determine the status code based on the error message
      let statusCode = 500;
      if (error.message === "Missing required fields") {
        statusCode = 400; // Bad Request
      }
      
      res.status(statusCode).send({ error: error.message });
    }
  }
};


export const saveUserDetails = async (req: Request, res: Response) => {
  try {
    await saveUserDetailsService(req.body);
    res.status(200).send({ message: "User details saved" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
};