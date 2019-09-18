import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() rating:number; 
  @Input() mesajcopil:string;
  @Input() dynamicdata: string;
  @Output() ratingOut: EventEmitter<string>;
  starWidth: number;
  hello ='Salut hello copil';

  constructor() {
    this.ratingOut = new EventEmitter();
   }

  ngOnInit() {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    //alert(this.rating);
    this.ratingOut.emit(`Avem rating:`+ this.rating);
  }

}
