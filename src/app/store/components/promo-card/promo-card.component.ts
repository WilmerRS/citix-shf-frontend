import { PromoModel } from './../../../core/domain/promo.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss'],
})
export class PromoCardComponent implements OnInit {
  @Input() promo!: PromoModel;
  @Output() onSelected = new EventEmitter();

  liked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  handlePromoClick() {
    this.onSelected.emit(this.promo.id);
  }

  handleLike() {
    this.liked = !this.liked;
  }
}
