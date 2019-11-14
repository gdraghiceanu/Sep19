import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Form } from '@angular/forms';
import { NgForOf } from '@angular/common';
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
  constructor(private authServ: AuthService, private router: Router  ) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {

    if(loginForm && loginForm.valid) {

      const uName = loginForm.form.value.un;
      const password = loginForm.form.value.pass;

      this.authServ.login(uName, password);
      this.router.navigate(['/books']);

    } else {
      this.errorMessage = 'Please enter a user name and password!';
    }
  }

}
