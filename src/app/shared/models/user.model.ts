import { UserGetResult } from "./user-get-result.model";

export class User {
    email: string;
    firstname: string;
    lastname: string;

    static fromUserGetResult(result: UserGetResult): User {
        return {
            email: result.email,
            firstname: result.name.firstname,
            lastname: result.name.lastname,
        };
    }
}