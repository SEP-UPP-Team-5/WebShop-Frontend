import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from 'src/model/product-dto';
import { PurchaseDto } from 'src/model/purchase-dto';
import { ProductService } from 'src/services/product.service';

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

  constructor(private router: Router,
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

  goToPayment() {
    this.router.navigateByUrl('home/payment');
  }

  seePurchased() {
    this.isMy = true;
    console.log("jwdhuewygdw");
  }

  seeAll() {
    this.isMy = false;
  }

}
