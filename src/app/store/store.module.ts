import { SharedModule } from './../shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StoresComponent } from './components/stores/stores.component';
import { StoreCardComponent } from './components/store-card/store-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { PromoCardComponent } from './components/promo-card/promo-card.component';
import { PromosComponent } from './components/promos/promos.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CategoriesComponent,
    StoresComponent,
    StoreCardComponent,
    CategoryCardComponent,
    PromoCardComponent,
    PromosComponent,
    StoreDetailComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, StoreRoutingModule, SharedModule],
})
export class StoreModule {}
