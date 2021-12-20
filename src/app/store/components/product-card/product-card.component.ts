import { ProductModel } from './../../../core/domain/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductModel;
  constructor() {}
  liked: boolean = false;
  ngOnInit(): void {}
  handleLike() {
    this.liked = !this.liked;
  }
}
