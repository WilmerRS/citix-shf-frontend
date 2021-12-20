import { UserModel } from './../domain/user.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLocalStorageRepository {
  private localStorageService;

  private user = new Subject<UserModel | null>();

  constructor() {
    this.localStorageService = localStorage;
    this.reloadAutentication();
  }

  addUser(user: UserModel): void {
    this.localStorageService.setItem('currentUser', JSON.stringify(user));
    this.user.next(user);
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.user.next(null);
  }

  getCurrentUser(): Observable<UserModel | null> {
    return this.user.asObservable();
  }

  reloadAutentication(){
    const user = this.localStorageService.getItem('currentUser');
    if (user) {
      const userModel: UserModel = JSON.parse(user);
      this.user.next(userModel);
      return;
    }
    this.user.next(null);
  }
}
