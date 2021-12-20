import { Observable } from 'rxjs';
import { StoreRepository } from '../architecture/store.repository';
import { StoreModel } from 'src/app/core/domain/store.model';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetStoreUseCase implements UseCase<number, StoreModel> {
  constructor(private storeRepository: StoreRepository) {}

  execute(id: number): Observable<StoreModel> {
    return this.storeRepository.getStore(id);
  }
}
