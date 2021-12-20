import { Subject } from 'rxjs';
import { UserLocalStorageRepository } from '../architecture/user-local-storage.repository';
import { ValidateLogin } from '../architecture/validate-login';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';

@Injectable({
  providedIn: 'root',
})
export class ValidateAuthenticationUseCase implements UseCase<void, UserModel | null> {
  constructor(
    private userLocalStorageRepository: UserLocalStorageRepository
  ) {}

  execute(params: void): Observable<UserModel | null> {
    return this.userLocalStorageRepository.getCurrentUser();
  }

  reload() {
    this.userLocalStorageRepository.reloadAutentication();
  }
}
