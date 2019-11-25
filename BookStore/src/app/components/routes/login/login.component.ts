import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log in';
  errorMessage: string;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    const username = loginForm.form.value.username;
    const password = loginForm.form.value.password;

    this.authServ.login(username, password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/books']);
      } else {
        alert('User/Password invalid');
      }
    });
  }
}
