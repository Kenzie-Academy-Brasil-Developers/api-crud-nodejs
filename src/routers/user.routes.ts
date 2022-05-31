import { Router } from 'express';
import userAlreadyExists from '../middlewares/verifyEmail.middleware';
import UserController from '../controllers/user.controller';
import SessionController from '../controllers/sessions.controller';

const userRouter = Router();

userRouter.post('', userAlreadyExists, UserController.create);
userRouter.get('', UserController.index);
userRouter.patch('/:id', UserController.update);
userRouter.delete('/:id', UserController.delete);
userRouter.get('/profile', SessionController.profile);

export default userRouter;
