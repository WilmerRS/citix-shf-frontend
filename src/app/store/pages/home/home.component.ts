import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/domain/user.model';
import { ValidateAuthenticationUseCase } from 'src/app/core/application/validate-authentication.usecase';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private validateAuthenticationUseCase: ValidateAuthenticationUseCase,
    // private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Inicio | Citix');
  }

  ngOnInit(): void {
    // this.validateAuthenticationUseCase
    //   .execute()
    //   .subscribe((userData: UserModel | null) => {
    //     if (userData) {
    //       this.router.navigate(['/']);
    //       return;
    //     }
    //     this.isLoading = false;
    //   });
    // this.validateAuthenticationUseCase.reload();
  }
}
