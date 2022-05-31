import users from "../../database"
import {v4 as uuidv4} from "uuid"
import * as bcrypt from "bcryptjs";

const createUserService = async (name: string, email: string, password: string, isAdm: boolean) => {

    const hashedPassword = await bcrypt.hash(password, 10)
  
    const newUser = {
        name,
        email,
        password: hashedPassword,
        isAdm,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
    }

    users.push(newUser)

    return newUser
}

export default createUserService