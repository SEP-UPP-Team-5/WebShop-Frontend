export class ProductDto {
    id : string;
    name : string;
    description : string;
    price : number;

    constructor(obj?:any) {
        this.id = obj && obj.id || "";
        this.name = obj && obj.name || "";
        this.description = obj && obj.description || "";
        this.price = obj && obj.price || 0;
    }
}


