import { Request, Response, NextFunction } from 'express';

// Initialize an array to store generated tokens
export const tokenArray: string[] = ['test-token'];

// Middleware to generate and check the random token
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers['authorization'];

  // Check if the provided token matches any token in the array
  if (!authToken) return res.status(401).json({ error: 'Unauthorized' });
  if (!tokenArray.includes(authToken)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

  