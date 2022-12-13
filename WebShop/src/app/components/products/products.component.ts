import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from 'src/model/product-dto';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductDto[] = [];

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  goToPayment() {
    this.router.navigateByUrl('home/payment');
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products: ProductDto[]) => { 
        this.products =  products; 
      },
      error: (err) => { console.log(err) }
    })
  }
}
