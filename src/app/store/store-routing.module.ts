import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stores/:id',
    component: StoreDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
