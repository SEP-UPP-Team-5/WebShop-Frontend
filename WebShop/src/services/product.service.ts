import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDto } from 'src/model/product-dto';
import { PurchaseDto } from 'src/model/purchase-dto';
import { AppConstants } from 'src/utils/app-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.PRODUCTS.LIST;
    return this.http.get<ProductDto[]>(apiUrl).pipe(map((data: ProductDto[]) => {
      return data && data.map((elem: ProductDto) => new ProductDto(elem)) || [];
    }))
  }

  getMyPurchases(id: any): Observable<PurchaseDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.PURCHASE.LIST + id;
    return this.http.get<PurchaseDto[]>(apiUrl).pipe(map((data: PurchaseDto[]) => {
      return data && data.map((elem: PurchaseDto) => new PurchaseDto(elem)) || [];
    }))
  }

  buy(product: PurchaseDto) {
    const apiUrl = AppConstants.API_HOST + AppConstants.PURCHASE.BUY;
    return this.http.post(apiUrl, product).pipe(map((item: any) => {
      console.log(item);
       return item;
    }))
  }

}