import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreModel } from 'src/app/core/domain/store.model';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {
  @Input() store!: StoreModel;

  liked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleLike() {
    this.liked = !this.liked;
  }
}
