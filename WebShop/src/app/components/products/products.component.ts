import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartDto, CartItem } from 'src/model/cart-dto';
import { ProductDto } from 'src/model/product-dto';
import { PurchaseDto } from 'src/model/purchase-dto';
import { ProductService } from 'src/services/product.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isMy: boolean = false;
  products: ProductDto[] = [];
  cartItem: CartItem = new CartItem()
  purchases: PurchaseDto[] = [];
  myProducts: any;
  purchasedProduct: PurchaseDto = new PurchaseDto();
  id :any;
  cartItems: any;

  userId: any;

  constructor(private router: Router,
              public dialog: MatDialog,
              private productService: ProductService,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products: ProductDto[]) => { 
        this.products =  products; 
      },
      error: (err) => { console.log(err) }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '500px',
      autoFocus: false,
      data: {userId: localStorage.getItem('id'), products: this.products}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getCartItems(productId: string) {
    const id = localStorage.getItem('id');
    this.productService.getCartProducts(id).subscribe((res:any) => {
      this.cartItems = res.items;
      const found = this.cartItems.find((element: any) => element.productId == productId);
      if(found){
        this.snackbar.open('You already added this item to the cart', 'OK');
        return
      } else {
        const id = localStorage.getItem('id');
        this.cartItem.productId = productId;
        this.productService.addProductToCart(this.cartItem, id).subscribe((res) =>
         console.log(res)
        )
        this.snackbar.open('Successfully added item to cart', 'OK')
      }
    });
  }

  addProductToCart(productId: string) {
    //this.getCartItems(id);
    const id = localStorage.getItem('id');
    this.cartItem.productId = productId;
    this.productService.addProductToCart(this.cartItem, id).subscribe((res) =>
     console.log(res)
    )
  }

  getMyProducts() {
    for(let purchase of this.purchases){
      this.myProducts = this.products.filter(a => a.id == purchase.productId);
    }
  }

  goToPayment(id : any, totalAmount : any) {
    localStorage.setItem("productId", id);
    localStorage.setItem("amount", totalAmount);
    this.router.navigateByUrl('home/payment');
  }

  seePurchased() {
    this.isMy = true;
  }

  seeAll() {
    this.isMy = false;
  }

}
