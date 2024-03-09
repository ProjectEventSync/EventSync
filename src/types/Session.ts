export class Session {
    userID: string | null;
    token: string | null;

    constructor(userID: string | null, token: string | null){
        this.userID = userID;
        this.token = token;
    }
}