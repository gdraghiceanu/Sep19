import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
//cu @input voi importa date din parinte in copil 
//acea valoare o sa fie setata si apoi afisata in template -ul copil
@Input()  childProprietate: string;
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
    console.log(this.rating);
  }

  onClick() {
    //alert(this.rating);
    this.ratingOut.emit(`Avem rating:`+ this.rating);
  }

}
