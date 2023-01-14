export class CartDto {
    id: string;
    userId: string;
    items: CartItem[];

    constructor(obj?:any) {
        this.id = obj && obj.id || "";
        this.userId = obj && obj.userId || "";
        this.items = obj && obj.items && 
        obj.items.map((elem: any) => new CartItem(elem)) || [];
    }
}

export class CartItem {
    productId: string;

    constructor(obj?:any) {
        this.productId = obj && obj.productId || "";
    }
}