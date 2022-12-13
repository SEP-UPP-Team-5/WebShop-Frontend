export class LoginDto {
    username: string;
    password: string;

    constructor(obj?:any) {
        this.username = obj && obj.username || "";
        this.password = obj && obj.password || "";
    }
}