import { CartDto } from "./cart-dto";

export class OrderDto {
    id: string;
    cart: CartDto;
    totalPrice: number;

    constructor(obj?:any) {
        this.id = obj && obj.id || "";
        this.cart = obj && obj.cart || {};
        this.totalPrice = obj && obj.totalPrice || 0;
    }
}