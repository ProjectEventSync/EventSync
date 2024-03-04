import * as bcrypt from 'bcrypt';
async function hashString(inputString: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedString = await bcrypt.hash(inputString, salt);
        return hashedString;
    } catch (error) {
        return "ERROR [PH01]";
    }  //PH01 (Password Hash 01) = Hash issue (invalid string)
}
