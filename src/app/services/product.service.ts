import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../models/Product';
import { Observable } from 'rxjs';

interface ProductFormResponse {response : string}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpointUrl = 'http://localhost:8080/api'

  private http = inject(HttpClient)

  sendProduct(product: Product): Observable<ProductFormResponse>{
    console.log(product)
    return this.http.post<ProductFormResponse>(this.endpointUrl + '/products', product)
  }

  getProductsByCategory(categoryId: string): Observable<Product[]>{
    const url = `${this.endpointUrl}/products/by-category?categoryId=${categoryId}`
    console.log(categoryId)
    return this.http.get<Product[]>(url)
  }
}
