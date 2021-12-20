import { GetProductsByStoreUseCase } from './../../../core/application/get-products-by-store.usecase';
import { ProductModel } from './../../../core/domain/product.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GetStoreUseCase } from './../../../core/application/get-store.usecase';
import { Component, Input, OnInit } from '@angular/core';
import { StoreModel } from 'src/app/core/domain/store.model';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss'],
})
export class StoreDetailComponent implements OnInit {
  store!: StoreModel;
  products: ProductModel[] = [];

  bannerImg =
    'https://www.un.org/sites/un2.un.org/files/shutterstock_1534178345-cropped-small.jpg';

  constructor(
    private route: ActivatedRoute,
    private getStoreUseCase: GetStoreUseCase,
    private getProductsByStoreUseCase: GetProductsByStoreUseCase,
    private title: Title
  ) {
    this.title.setTitle(`Detalle | Citix`);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getStore(params['id']);
      this.getProducts(params['id']);
    });
  }

  getStore(id: number) {
    this.getStoreUseCase.execute(id).subscribe((store: StoreModel) => {
      this.store = store;
      this.title.setTitle(`${store.name} | Citix`);
    });
  }

  getProducts(id: number) {
    this.getProductsByStoreUseCase
      .execute(id)
      .subscribe((products: ProductModel[]) => {
        this.products = products;
      });
  }
}
