import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private router: Router
  ) {

    this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        if (event.url.indexOf('notebooks') > -1) {
          this.titleService.setTitle('Notebooks');
        } else if (event.url.indexOf('books') > -1) {
          this.titleService.setTitle('Books');
        } else {
          this.titleService.setTitle('Book Store');
        }
        // //console.log(event);
      });

    // this.route.data.subscribe(d => {
    //   this.titleService.setTitle(d.title)
    //   console.log('Activated route: ', d);
    // });
    // console.log("Snapshot" , this.route.snapshot.data);
  }

  ngOnInit() { }
}
