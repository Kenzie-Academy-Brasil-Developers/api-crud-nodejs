import { Router } from 'express';
import SessionController from '../controllers/sessions.controller';

const loginRouter = Router();

loginRouter.post('', SessionController.login);

export default loginRouter;
