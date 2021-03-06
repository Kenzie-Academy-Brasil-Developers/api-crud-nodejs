import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization headers' });
  }

  jwt.verify(token, 'SECRET_KEY', (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    next();
  });
};

export default isAuthenticated;
