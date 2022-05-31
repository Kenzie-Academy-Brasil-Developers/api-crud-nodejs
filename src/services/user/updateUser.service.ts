import users from '../../database';

const updateUserService = (id: string, name: string, email: string) => {
    const userUpdated = {
        id,
        name,
        email,
      };
    
      const userIndex = users.findIndex((element) => element.id === id);
    
      if (userIndex === -1) {
        return "User not found";
      }
    
      users[userIndex] = { ...users[userIndex], ...userUpdated };
    
      return users[userIndex];
}

export default updateUserService