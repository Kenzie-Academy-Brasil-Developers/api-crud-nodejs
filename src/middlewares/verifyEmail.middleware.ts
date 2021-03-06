import { NextFunction, Request, Response } from 'express';
import users from '../database';

const userAlreadyExists = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const emailExists = users.find((user) => user.email === email);

  if (emailExists) {
    return res.status(400).json({ message: 'E-mail already registered' });
  }

  next();
};

export default userAlreadyExists;
