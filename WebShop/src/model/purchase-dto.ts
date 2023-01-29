export class PurchaseDto {
    id : string;
    userId : string;
    productId : string;
    currentPrice : number;

    constructor(obj?:any) {
        this.id = obj && obj.id || "";
        this.userId = obj && obj.userId || "";
        this.productId = obj && obj.productId || "";
        this.currentPrice = obj && obj.price || 0;
    }
}