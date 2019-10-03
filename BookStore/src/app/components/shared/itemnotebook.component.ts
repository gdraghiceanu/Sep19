import { Component, OnInit,Input } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';

@Component({
  selector: 'app-itemnotebook',
  templateUrl: './itemnotebook.component.html',
  styleUrls: ['./itemnotebook.component.scss']
})
export class ItemnotebookComponent implements OnInit {
  @Input() nbkitem:NoteBook;
  @Input() nbkindex:number;
  
  constructor() { }

  ngOnInit() {
  }

  onPriceClicked(){
    this.nbkitem.price = 25;
  }
  onPagesClicked(evt: MouseEvent) {
    console.log(evt);
    this.nbkitem.pages = 134;
}

}
