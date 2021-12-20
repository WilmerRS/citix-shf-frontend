import { PromoModel } from 'src/app/core/domain/promo.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PromoRepository {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PromoModel[]> {
    return this.http.get<PromoModel[]>(`${this.apiUrl}/promos`);
  }

  getPromo(id: string): Observable<PromoModel> {
    return this.http.get<PromoModel>(`${this.apiUrl}/promos/${id}`);
  }
}
