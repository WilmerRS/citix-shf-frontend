import { ValidateAuthenticationUseCase } from './../../../core/application/validate-authentication.usecase';
import { UserModel } from './../../../core/domain/user.model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Feather from 'feather-icons';
import { LoginUseCase } from 'src/app/core/application/login.usecase';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  isLoading = true;
  isSubmiting = false;
  errorCredentialMessage = '';

  constructor(
    private loginUseCase: LoginUseCase,
    private validateAuthenticationUseCase: ValidateAuthenticationUseCase,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Ingresa a tu tienda | Citix');
  }

  ngOnInit(): void {
    this.validateAuthenticationUseCase
      .execute()
      .subscribe((userData: UserModel | null) => {
        if (userData) {
          this.router.navigate(['/']);
          return;
        }
        this.isLoading = false;
      });
    this.validateAuthenticationUseCase.reload();
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  onSubmitLogin(): boolean {
    if (!this.loginForm.valid) {
      return false;
    }
    const user: UserModel = {
      email: this.email.value,
      password: this.password.value,
    };
    this.isSubmiting = true;
    this.loginUseCase.execute(user).subscribe((userData: any) => {
      console.log({ userData });

      if (userData) {
        this.router.navigate(['/']);
        return;
      }
      this.isSubmiting = false;
      this.errorCredentialMessage = 'Credenciales inválidas';
    });
    return true;
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
