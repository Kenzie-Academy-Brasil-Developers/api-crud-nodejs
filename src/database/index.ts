interface User {
    name: string,
    email: string,
    password: string,
    isAdm: boolean,
    id?: string
}

const users: User[] = [];

export default users;
