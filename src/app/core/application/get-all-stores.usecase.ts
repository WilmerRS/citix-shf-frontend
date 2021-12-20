import { Observable } from 'rxjs';
import { StoreRepository } from './../architecture/store.repository';
import { StoreModel } from 'src/app/core/domain/store.model';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetAllStoresUseCase implements UseCase<void, StoreModel[]> {
  constructor(private storeRepository: StoreRepository) {}

  execute(params: void): Observable<StoreModel[]> {
    return this.storeRepository.getAll();
  }
}
