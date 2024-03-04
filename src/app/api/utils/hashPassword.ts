import * as bcrypt from 'bcrypt';

export default async function hashPassword(inputPassword: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(inputPassword, salt);
    } catch (error) {
        return "ERROR [PH01]";
    }  //PH01 (Password Hash 01) = Hash issue (invalid string)
}
