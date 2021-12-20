import { Router } from '@angular/router';
import { LogoutUseCase } from './../../../core/application/logout.usecase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent implements OnInit {
  constructor(private logoutUseCase: LogoutUseCase, private router: Router) {}

  ngOnInit(): void {}

  onLogoutMenuClick() {
    const logoutMenu = document.querySelector('.logout-menu');
    if (logoutMenu) logoutMenu.classList.toggle('hidden');
  }

  onLogout() {
    this.logoutUseCase.execute();
    this.router.navigate(['/login']);
  }
}
