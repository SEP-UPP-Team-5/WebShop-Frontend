import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { CartDto, CartItem } from 'src/model/cart-dto';
import { HistoryDto } from 'src/model/history-dto';
import { OrderDto } from 'src/model/order-dto';
import { ProductDto } from 'src/model/product-dto';
import { PurchaseDto } from 'src/model/purchase-dto';
import { AppConstants } from 'src/utils/app-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAuthoHeader() : any {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':  '*'
    }
    return{
      headers: headers
    };
  } 

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
    return this.http.post(apiUrl, product, this.getAuthoHeader()).pipe(map((item: any) => {
       return item;
    }))
  }

  addProductToCart(cartItem: any, id: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.CART.ADD;
    return this.http.post(apiUrl+id, cartItem, this.getAuthoHeader()).pipe(map((item: any) => {
      return item;
   }));
  }

  emptyCart(id: any, input?: any): Observable<CartDto> {
    const apiUrl = AppConstants.API_HOST + AppConstants.CART.EMPTY;
    return this.http.put(apiUrl+id, input, this.getAuthoHeader()).pipe(map((item) => new CartDto()))
  }

  getCartProducts(id: any): Observable<CartDto> {
    const apiUrl = AppConstants.API_HOST + AppConstants.CART.GET;
    return this.http.get(apiUrl+id, this.getAuthoHeader()).pipe(map((item: any) => {
      return item;
   }))
  }

  saveOrder(order: OrderDto) {
    const apiUrl = AppConstants.API_HOST + AppConstants.CART.ORDER;
    return this.http.post(apiUrl, order).pipe(map((item: any) => {
      return item;
   }));
  }
  
  getOrderById(id: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.CART.ORDER;
    return this.http.get(apiUrl+ '/' + id);
  }

  getHistoryOrders(id: any):Observable<HistoryDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.PRODUCTS.HISTORY;
    return this.http.get<HistoryDto[]>(apiUrl+id).pipe(map((data: HistoryDto[]) => {
      return data && data.map((elem: HistoryDto) => new HistoryDto(elem)) || [];
    }))
  }

}