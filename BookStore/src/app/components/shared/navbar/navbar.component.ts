import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  label: string;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.username;
    }
    return '';
  }

  constructor(
    private titleService: Title,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private authService: AuthService
  ) {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        if (event.url.indexOf('notebooks') > -1) {
          this.titleService.setTitle('Notebooks');
        } else if (event.url.indexOf('books') > -1) {
          this.titleService.setTitle('Books');
        } else {
          this.titleService.setTitle('Book Store');
        }
      });
  }

  ngOnInit() {
    this.shoppingCartService.productObs$.subscribe(value => {
      this.label = value;
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
