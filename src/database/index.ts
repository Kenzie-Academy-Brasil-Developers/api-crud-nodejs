interface User {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  uuid: string;
  createdOn: Date;
  updatedOn: Date;
}

const users: User[] = [];

export default users;
