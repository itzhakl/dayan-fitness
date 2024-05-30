import { NextFunction, Request, Response } from "express";
import { tokenArray } from "../middleware/auth";
import { User } from "../models/User";
// import { getUserByEmail, createUser } from "../services/users";

// User registration
export const registerController = (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  console.log(req.body);

  const requestingUser = { email, password, role };

  if (!requestingUser) {
    return res.status(403).json({ error: "Permission denied" });
  }

  // Check if the user already exists
  // if (getUserByEmail(email)) {
  //   return res.status(400).json({ error: "User already exists" });
  // }

  // Create a new user
  // const newUser: User = {
  //   name,
  //   id: "",
  //   mail,
  //   password,
  // };

  // createUser(newUser);

  res.status(201).json({ message: "User registered successfully" });
};

export const generateAuthToken = () => {
  // Generate a random token (for demonstration purposes)
  const randomToken = Math.random().toString(36).substring(2, 15);
  // Save the generated token in the array
  tokenArray.push(randomToken);
  return randomToken;
};

// User login
export const loginController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  // Find the user by email
  // const user = getUserByEmail(email);

  // Check if the user exists and the password matches (in a real app, compare hashed passwords)
  // if (!user || user.password !== password) {
  //   return res.status(401).json({ error: "Invalid credentials" });
  // }

  // Generate an authentication token using the middleware function
  const authToken = generateAuthToken();
  console.log(tokenArray);

  // const responseObj = { user, token: authToken };
  // In a real application, you would store the token securely and handle token expiration

  // res.json({ message: "Login successful", responseObj });
};