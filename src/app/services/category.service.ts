import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../../models/Category';
import { Observable } from 'rxjs';

interface CategoryFormResponse {response : string}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private endpointUrl = 'http://localhost:8080/api/';

  private http = inject(HttpClient)

  sendCategory(category: Category): Observable<CategoryFormResponse>{
    console.log(category)
    return this.http.post<CategoryFormResponse>(this.endpointUrl + 'categories', category)
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.endpointUrl+ 'categories');
  }

  updateCategory(){}

  deleteCategory(){}



}
