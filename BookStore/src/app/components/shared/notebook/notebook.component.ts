import { Component, OnInit, Input } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  @Input() nbkitem: NoteBook;
  @Input() nbkindex: number;

  constructor() {}

  ngOnInit() {}

  onPriceClicked() {
    this.nbkitem.price = 25;
  }
  onPagesClicked(evt: MouseEvent) {
    console.log(evt);
    this.nbkitem.pages = 134;
  }
}
