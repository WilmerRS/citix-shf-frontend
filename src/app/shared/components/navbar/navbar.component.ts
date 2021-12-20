import { Component, OnInit } from '@angular/core';
import { ValidateAuthenticationUseCase } from 'src/app/core/application/validate-authentication.usecase';
import { UserModel } from 'src/app/core/domain/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser: UserModel | null = null;
  userObervable!: any;
  constructor(
    private validateAuthenticationUseCase: ValidateAuthenticationUseCase
  ) {}

  ngOnInit(): void {
    this.userObervable =  this.validateAuthenticationUseCase
      .execute()
      .subscribe((userData: UserModel | null) => {
        this.currentUser = userData;
      });
    this.validateAuthenticationUseCase.reload();
  }

  onBurgerClick(value: string) {
    console.log('Burger clicked');
    const menu = document.querySelector('.mobile-menu');
    if (menu) menu.classList.toggle('hidden');
  }
}
