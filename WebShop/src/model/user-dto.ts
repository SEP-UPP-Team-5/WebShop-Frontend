export class UserDto {
    id : number;
    username : string;
    password : string;
    name : string;
    email : string;
    telephoneNo : string;
    gender : string;
    dateOfBirth : Date;
    street : string;
    streetNumber : string;
    city : string;
    postalCode : string;
    role : string;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.username = obj && obj.username || "";
        this.password = obj && obj.password || "";
        this.name = obj && obj.name || "";
        this.email = obj && obj.email || "";
        this.telephoneNo = obj && obj.telephoneNo || "";
        this.gender = obj && obj.gender || "";
        this.dateOfBirth = obj && obj.dateOfBirth;
        this.street = obj && obj.street || "";
        this.streetNumber = obj && obj.streetNumber || "";
        this.city = obj && obj.city || "";
        this.postalCode = obj && obj.postalCode || "";
        this.role = obj && obj.role || "";
    }
}


export class UserResultDto {
    items: UserDto[] = [];
}
