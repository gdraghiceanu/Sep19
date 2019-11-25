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

    if (loginForm && loginForm.valid) {

      const username = loginForm.form.value.username;
      const password = loginForm.form.value.password;

      this.authServ.login(username, password);
      this.router.navigate(['/books']);

    } else {
      this.errorMessage = 'Please enter a user name and password!';
    }
  }

}
