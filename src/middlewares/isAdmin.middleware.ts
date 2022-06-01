import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import users from '../database';

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization headers' });
  }

  jwt.verify(token, 'SECRET_KEY', (error, decoded: any) => {
    const userId = decoded.id;

    const user = users.find((element) => element.uuid === userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!user.isAdm) {
      return res.status(401).json({ message: 'Missing admin permissions' });
    }

    if (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next();
  });
};

export default isAdmin;
