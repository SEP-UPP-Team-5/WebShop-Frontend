import { Component, Inject, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartDto } from 'src/model/cart-dto';
import { OrderDto } from 'src/model/order-dto';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart: CartDto = new CartDto();
  myProducts: any[] = [];
  cartItems: any;
  totalPrice: number = 0;

  constructor(
    public injector: Injector,
    public dialogRef: MatDialogRef<CartComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getCartItems() {
    const id = localStorage.getItem('id');
    this.productService.getCartProducts(id).subscribe((res:any) => {
      this.cart = res;
      this.cartItems = res.items;
      this.filterProducts(this.cartItems);
    });
  }

  goToPayment() {
    const order = new OrderDto();
    order.cart = this.cart;
    order.totalPrice = this.totalPrice;

    this.productService.saveOrder(order).subscribe((res) =>
      this.dialogRef.close()
    )
  }

  filterProducts(items: any) {
    for(let i of items){
      for(let j of this.data.products){
        if(i.productId == j.id){
          this.totalPrice += j.price;
          this.myProducts.push(j)
        }
      }
    }
  }

  emptyCart() {
    const id = localStorage.getItem('id');
    this.productService.emptyCart(id).subscribe((res) =>
      console.log(res, "RES")
    )
    this.dialogRef.close()
  }

}
