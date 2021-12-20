import { StoreModel } from 'src/app/core/domain/store.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreRepository {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<StoreModel[]> {
    return this.http.get<StoreModel[]>(`${this.apiUrl}/stores`);
  }

  getStore(id: number): Observable<StoreModel> {
    return this.http.get<StoreModel>(`${this.apiUrl}/stores/${id}`);
  }
}
