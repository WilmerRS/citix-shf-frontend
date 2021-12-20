import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../domain/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getByStore(storeId: number): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/products?storeId=${storeId}`);
  }
}
