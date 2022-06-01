import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import users from '../database';

const isUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization headers' });
  }

  verify(token, 'SECRET_KEY', (error, decoded: any) => {
    const userId = decoded.id;

    const { id } = req.params;

    const user = users.find((element) => element.uuid === userId);

    if (!user) {
      return res.status(401).json({ message: 'user not found' });
    }

    if (!user.isAdm && userId !== id) {
      return res.status(401).json({ message: 'Missing admin permissions' });
    }
    next();
  });
};

export default isUser;
