import { GetAllPromosUseCase } from './../../../core/application/get-all-promos.usecase';
import { Component, OnInit } from '@angular/core';
import { PromoModel } from 'src/app/core/domain/promo.model';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss'],
})
export class PromosComponent implements OnInit {
  promos: PromoModel[] = [];
  constructor(private getAllPromosUseCase: GetAllPromosUseCase) {}

  ngOnInit(): void {
    this.getAllPromosUseCase.execute().subscribe((promos: PromoModel[]) => {
      this.promos = promos;
    });
  }

  onPromoClick(promoId: number) {

  }
}
