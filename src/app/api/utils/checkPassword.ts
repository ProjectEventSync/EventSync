import * as bcrypt from 'bcrypt';

export default async function checkPassword(password: string, hashedPassword: string): Promise<boolean> { //pass check func
    return await bcrypt.compare(password, hashedPassword);
}