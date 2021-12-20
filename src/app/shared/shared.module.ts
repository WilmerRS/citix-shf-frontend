import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './components/brand/brand.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { BurgerButtonComponent } from './components/burger-button/burger-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { LoadingComponent } from './components/loading/loading.component';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  declarations: [
    BrandComponent,
    NavbarComponent,
    AccountCardComponent,
    BurgerButtonComponent,
    IconButtonComponent,
    LoadingComponent,
    JoinPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BrandComponent,
    NavbarComponent,
    AccountCardComponent,
    BurgerButtonComponent,
    IconButtonComponent,
    LoadingComponent,
    JoinPipe,
  ],
})
export class SharedModule {}
