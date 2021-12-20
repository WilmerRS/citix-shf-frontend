import { CategoryEntity } from './category.entity';
import { CategoryModel } from './../../domain/category.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoryRepositoryMapper } from './category.mapper';
@Injectable({
  providedIn: 'root',
})
export class CategotyRepository {
  private apiUrl = environment.API_URL;
  private mapper = new CategoryRepositoryMapper();
  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoryModel> {
    return this.http
      .get<CategoryEntity[]>(`${this.apiUrl}/categories`)
      .pipe(mergeMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }

  // getCategory(id: string): Observable<CategoryModel> {
  //   return this.http.get<CategoryModel>(`${this.apiUrl}/categories/${id}`)

  // }
}
