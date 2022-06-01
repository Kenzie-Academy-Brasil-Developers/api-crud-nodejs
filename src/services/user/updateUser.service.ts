import users from '../../database';
interface UserUpdate {
  name: string;
  email: string;
}

const updateUserService = (id: string, data: UserUpdate) => {
  const user = users.find((element) => element.uuid === id);

  if (!user) {
    throw new Error('user not found');
  }

  const userUpdated = {
    id,
    name: data.name ? data.name : user.name,
    email: data.email ? data.email : user.email,
  };

  const userIndex = users.findIndex((element) => element.uuid === id);

  if (userIndex === -1) {
    return 'User not found';
  }

  users[userIndex] = {
    ...users[userIndex],
    ...userUpdated,
    updatedOn: new Date(),
  };

  return {
    name: users[userIndex].name,
    email: users[userIndex].email,
    isAdm: users[userIndex].isAdm,
    uuid: users[userIndex].uuid,
    createdOn: users[userIndex].createdOn,
    updatedOn: users[userIndex].updatedOn,
  }
};

export default updateUserService;
