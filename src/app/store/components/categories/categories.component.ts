import { GetAllCategoriesUseCase } from './../../../core/application/get-all-categories.usecase';
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/core/domain/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[] = [];

  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  ngOnInit(): void {
    this.getAllCategoriesUseCase
      .execute()
      .subscribe((categories: CategoryModel) => {
        this.categories.push(categories);
      });
  }

  categoryToggle(categoryId: number) {
    const category = this.categories.filter(
      (c: CategoryModel) => c.id === categoryId
    )[0];
    if (!category) return;
    category.selected = !category.selected;
  }
}
