import { Subject } from 'rxjs';
import { UserLocalStorageRepository } from './../architecture/user-local-storage.repository';
import { ValidateLogin } from '../architecture/validate-login';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginUseCase implements UseCase<UserModel, UserModel | null> {
  constructor(
    private userLocalStorageRepository: UserLocalStorageRepository,
    private validateLogin: ValidateLogin
  ) {}

  execute(user: UserModel): Observable<UserModel | null> {
    const userSubject = new Subject<UserModel | null>();
    this.validateLogin.execute(user).subscribe((userData: UserModel | null) => {
      console.log(userData);
      if (userData) {
        this.userLocalStorageRepository.addUser(userData);
      }
      userSubject.next(userData);
    });
    return userSubject.asObservable();
  }
}
