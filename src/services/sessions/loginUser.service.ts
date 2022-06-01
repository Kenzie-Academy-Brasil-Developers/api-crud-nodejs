import users from '../../database';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const loginUserService = (email: string, password: string) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    throw new Error('Wrong email/password');
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error('Wrong email/password');
  }

  const token = jwt.sign({ id: user.uuid }, 'SECRET_KEY', { expiresIn: '24h' });

  return { token };
};

export default loginUserService;
