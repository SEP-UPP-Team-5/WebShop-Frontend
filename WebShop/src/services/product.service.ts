import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDto } from 'src/model/product-dto';
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

}