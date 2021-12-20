import { environment } from '../../../environments/environment';
import { UserModel } from '../domain/user.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ValidateLogin {
  private apiUrl = environment.API_URL;

  private autenticatedUserSubject = new Subject<UserModel | null>();

  constructor(private http: HttpClient) {}

  execute(user: UserModel): Observable<UserModel | null> {
    this.http
      .get<UserModel>(`${this.apiUrl}/user`)
      .subscribe((userData: UserModel) => {
        console.log(userData, userData.password !== user.password);
        if (!userData) {
          this.autenticatedUserSubject.next(null);
          return;
        }
        if (userData.password !== user.password) {
          this.autenticatedUserSubject.next(null);
          return;
        }
        this.autenticatedUserSubject.next(userData);
      });
    return this.autenticatedUserSubject.asObservable();
  }
}
