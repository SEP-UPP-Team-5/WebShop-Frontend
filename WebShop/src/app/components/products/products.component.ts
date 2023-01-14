import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  purchases: PurchaseDto[] = [];
  myProducts: any;
  purchasedProduct: PurchaseDto = new PurchaseDto();
  id :any;

  userId: any;

  constructor(private router: Router,
              public dialog: MatDialog,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getPurchases();
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
      data: {products: this.products}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getPurchases(): void {
    const id = localStorage.getItem('id');
    this.productService.getMyPurchases(id).subscribe({
      next: (purchases: PurchaseDto[]) => { 
        this.purchases =  purchases;
        this.getMyProducts(); 
      },
      error: (err) => { console.log(err) }
    })
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
