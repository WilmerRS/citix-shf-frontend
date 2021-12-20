import { PromoModel } from './../domain/promo.model';
import { PromoRepository } from './../architecture/promo.repository';
import { Observable } from 'rxjs';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetAllPromosUseCase implements UseCase<void, PromoModel[]> {
  constructor(private promoRepository: PromoRepository) {}

  execute(params: void): Observable<PromoModel[]> {
    return this.promoRepository.getAll();
  }
}
