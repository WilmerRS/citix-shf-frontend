import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/core/domain/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: CategoryModel;
  @Output() onSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleSelected(){
    this.onSelected.emit(this.category.id);
  }

}
