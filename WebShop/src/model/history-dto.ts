import { ProductDto } from "./product-dto"

export class HistoryDto {
    orderId: string;
    products: ProductDto[];
    totalPrice: any;
    isPaid: boolean;
    paymentTime: any;

    constructor(obj?:any) {
        this.orderId = obj && obj.orderId || "";
        this.totalPrice = obj && obj.totalPrice || 0;
        this.isPaid = obj && obj.isPaid || false;
        this.paymentTime = obj && obj.paymentTime || '';
        this.products = obj && obj.products && 
        obj.products.map((elem: any) => new ProductDto(elem)) || [];
    }
}