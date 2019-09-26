import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingOut: EventEmitter<string>;

  starWidth: number;
  messageStar = 'Hola Mundo!';

  constructor() { 
    this.ratingOut = new EventEmitter();
  }

  ngOnInit() {
    //alert(this.rating);
    this.starWidth = this.rating * 75 /5;
  
  }
  onClick() {
    this.ratingOut.emit(`Avem rating: ${this.rating}`);
  }

}
