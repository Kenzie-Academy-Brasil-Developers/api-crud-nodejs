import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import loginUserService from '../services/sessions/loginUser.service';
import profileUserService from '../services/user/profileUser.service';
class SessionController {
  static login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const userLogin = loginUserService(email, password);

      return res.status(200).json(userLogin);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json(error.message);
      }
    }
  }

  static profile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res
          .status(401)
          .json({ message: 'missing authorization headers' });
      }

      verify(token, 'SECRET_KEY', (error, decoded: any) => {
        const id = decoded.id;

        const user = profileUserService(id);

        return res.status(200).json(user);
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json(error.message);
      }
    }
  }
}

export default SessionController;
