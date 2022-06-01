import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import users from '../database';

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Missing authorization headers' });
    }

    jwt.verify(token, 'SECRET_KEY', (error, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const userId = decoded.id;

      const user = users.find((element) => element.uuid === userId);

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      if (!user.isAdm) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      next();
    });
  } catch (error) {
    console.log(error);
  }
};

export default isAdmin;
