import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  pageTitle = 'My Book Store';
  searchNav: string;
  @Output() searchOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searchOut.emit(this.searchNav);
  }
}
