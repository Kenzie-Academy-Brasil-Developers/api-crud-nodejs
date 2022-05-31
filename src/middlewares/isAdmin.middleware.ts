import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import users from '../database';

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing authorization headers' });
  }
  jwt.verify(token, 'SECRET_KEY', (error, decoded: any) => {
    const userId = decoded.id;

    const user = users.find((element) => element.id === userId);

    if (!user) {
      return res.status(400).json({ message: 'user not found' });
    }

    if (!user.isAdm) {
      return res.status(404).json({ message: 'unauthorazed' });
    }

    if (error) {
      return res.status(401).json({ message: 'invalid token' });
    }
    next();
  });
};

export default isAdmin;
