import { Component, OnInit } from '@angular/core';
import { PurchaseDto } from 'src/model/purchase-dto';
import { ProductService } from 'src/services/product.service';
import { PurchaseService } from 'src/services/purchase.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  purchaseDto: PurchaseDto = new PurchaseDto();

  constructor(private productService: ProductService,
    private purchaseService: PurchaseService) { }

  ngOnInit(): void {
  }

  goToPayPal(): void {
    this.purchaseDto.productId = localStorage.getItem('productId') as string;
    this.purchaseDto.currentPrice= Number(localStorage.getItem('amount'));
    this.purchaseDto.userId = localStorage.getItem('id') as string;
    this.purchaseDto.id = "";

    this.productService.buy(this.purchaseDto).subscribe((res: any) => {
      console.log(res);
    })
   
  }

}
