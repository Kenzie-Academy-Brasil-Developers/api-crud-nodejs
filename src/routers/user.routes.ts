import { Router } from 'express';
import userAlreadyExists from '../middlewares/verifyEmail.middleware';
import UserController from '../controllers/user.controller';
import SessionController from '../controllers/sessions.controller';
import isAdmin from '../middlewares/isAdmin.middleware';
import isUser from '../middlewares/isUser.middleware';

const userRouter = Router();

userRouter.post('', userAlreadyExists, UserController.create);
userRouter.get('', isAdmin, UserController.index);
userRouter.patch('/:id', isUser, UserController.update);
userRouter.delete('/:id', isUser, UserController.delete);
userRouter.get('/profile', SessionController.profile);

export default userRouter;
