import users from '../../database';

const deleteUserService = (id: string) => {
  const userIndex = users.findIndex((element) => element.uuid === id);

  if (userIndex === -1) {
    throw new Error('user not found');
  }

  users.splice(userIndex, 1);

  return {message: 'User deleted with success'};
};

export default deleteUserService;
