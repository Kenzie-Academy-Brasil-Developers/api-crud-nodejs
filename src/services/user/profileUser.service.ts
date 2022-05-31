import users from '../../database';

const profileUserService = (id: string) => {
  const user = users.find((element) => element.id === id);

  if(!user){
      throw new Error("user does not exist")
  }

  return user;
};

export default profileUserService;
