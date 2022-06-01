import users from '../../database';

const profileUserService = (id: string) => {
  const user = users.find((element) => element.uuid === id);

  if (!user) {
    throw new Error('user does not exist');
  }

  return {
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
    uuid: user.uuid,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
  };
};

export default profileUserService;
