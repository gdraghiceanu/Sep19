import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    if (!username || !password) {
      return;
    }
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.get<{ token: string, user: User }>('/api/login', { params })
      .pipe(
        map(({ user, token }) => {
          this.currentUser = user;
          sessionStorage.setItem('token', token);
          return true;
        }),
        catchError(error => {
          return of(false);
        })
      );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.currentUser = null;
  }
}
