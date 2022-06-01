import users from '../../database';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

interface UserProps {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

const createUserService = async (data: UserProps) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = {
    name: data.name,
    email: data.email,
    password: hashedPassword,
    isAdm: data.isAdm ? data.isAdm : false,
    uuid: uuidv4(),
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  users.push(newUser);

  return {
    name: newUser.name,
    email: newUser.email,
    isAdm: newUser.isAdm,
    uuid: newUser.uuid,
    createdOn: newUser.createdOn,
    updatedOn: newUser.updatedOn,
  };
};

export default createUserService;
