import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      return;
    }   

    this.currentUser = {
      id: 1,
      userName: userName,
      isAdmin: false
    };
  }

  logout(): void {
    this.currentUser = null;
  }
}
