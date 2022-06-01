import users from '../../database';

const listUsersService = () => {
  const usersList = users.map(
    ({ uuid, name, email, isAdm, createdOn, updatedOn }) => {
      return {
        uuid,
        name,
        email,
        isAdm,
        createdOn,
        updatedOn,
      };
    }
  );

  return usersList;
};

export default listUsersService;
