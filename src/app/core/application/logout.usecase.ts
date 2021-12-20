import { UserLocalStorageRepository } from '../architecture/user-local-storage.repository';
import { UseCase } from './_baseUseCase';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutUseCase implements UseCase<void, any> {
  constructor(
    private userLocalStorageRepository: UserLocalStorageRepository
  ) {}

  execute(params: void): Observable<any> {
    this.userLocalStorageRepository.removeCurrentSession();
    return new Observable();
  }
}
