import { ProductModel } from './../domain/product.model';
import { Observable } from 'rxjs';
import { StoreRepository } from '../architecture/store.repository';
import { StoreModel } from 'src/app/core/domain/store.model';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';
import { ProductRepository } from '../architecture/product.repository';

@Injectable({
  providedIn: 'root',
})
export class GetProductsByStoreUseCase implements UseCase<number, ProductModel[]> {
  constructor(private productRepository: ProductRepository) {}

  execute(storeId: number): Observable<ProductModel[]> {
    return this.productRepository.getByStore(storeId);
  }
}
