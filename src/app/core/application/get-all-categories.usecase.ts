import { CategotyRepository } from './../architecture/category/category.repository';
import { CategoryModel } from 'src/app/core/domain/category.model';
import { PromoModel } from '../domain/promo.model';
import { PromoRepository } from '../architecture/promo.repository';
import { Observable } from 'rxjs';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesUseCase implements UseCase<void, CategoryModel> {
  constructor(private categoryRepository: CategotyRepository) {}

  execute(params: void): Observable<CategoryModel> {
    return this.categoryRepository.getAll();
  }
}
