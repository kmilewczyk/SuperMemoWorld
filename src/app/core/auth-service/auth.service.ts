import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorType, LoginError } from '@app/shared/models/login-error.model';
import { LoginResult } from '@app/shared/models/login-result.model';
import { User } from '@app/shared/models/user.model';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  Subject,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.baseUrl + 'users/';
  private userSubject = new BehaviorSubject<User | undefined>(undefined);

  public get user$() {
    return this.userSubject.asObservable();
  }

  public get loggedIn(): boolean {
    return this.userSubject.value !== undefined;
  }

  constructor(private http: HttpClient) {
    this.loadUser();
  }

  public logIn(
    email: string,
    password: string,
    stayLoggedIn: boolean
  ): Observable<User> {
    return this.http.get<any>(this.baseUrl + '1').pipe(
      catchError((error) => {
        throw new LoginError(ErrorType.HttpError, 'Coś poszło nie tak.');
      }),
      map(loginResponse => {
        if (
          !loginResponse ||
          !loginResponse.email ||
          !loginResponse.password ||
          !loginResponse.name ||
          !loginResponse.name.firstname ||
          !loginResponse.name.lastname
        ) {
          throw new LoginError(ErrorType.HttpError, 'Coś poszło nie tak.');
        }

        if (
          loginResponse.email !== email ||
          loginResponse.password !== password
        ) {
          throw new LoginError(
            ErrorType.InvalidCredentials,
            'Podane dane logowania są niepoprawne.'
          );
        }

        let user = {
          email: loginResponse.email,
          firstname: loginResponse.name.firstname,
          lastname: loginResponse.name.lastname,
        };

        this.userSubject.next(user);

        if (stayLoggedIn) {
          this.saveUser(user);
        }

        return user;
      }),
    );
  }

  public logOut() {
    this.userSubject.next(undefined);
    this.clearUser();
  }

  private saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private loadUser(): boolean {
    debugger;
    let localStorageUser = localStorage.getItem('user');
    if (!localStorageUser) {
      return false;
    }

    let parsedUser = JSON.parse(localStorageUser);

    this.userSubject.next(parsedUser);
    return true;
  }

  private clearUser() {
    localStorage.removeItem('user');
  }
}
