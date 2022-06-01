import { Request, Response } from 'express';
import createUserService from '../services/user/createUser.service';
import deleteUserService from '../services/user/deleteUser.service';
import listUsersService from '../services/user/listUsers.service';
import updateUserService from '../services/user/updateUser.service';

class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { name, email, password, isAdm } = req.body;

      const user = await createUserService({ name, email, password, isAdm });

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json(error.message);
      }
    }
  }

  static index(req: Request, res: Response) {
    try {
      const users = listUsersService();

      return res.status(200).json(users);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json(error.message);
      }
    }
  }

  static update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const { name, email } = req.body;

      const updateUser = updateUserService(id, { name, email });

      return res.status(200).json(updateUser);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json(error.message);
      }
    }
  }

  static delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deleteUser = deleteUserService(id);

      return res.json(deleteUser);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json(error.message);
      }
    }
  }
}

export default UserController;
