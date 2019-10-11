import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  @Input() notebook: NoteBook;
  @Input() index: number;

  @Output() addNotebookToCart: EventEmitter<NoteBook> = new EventEmitter();

  starMessage: string;

  constructor() {}

  ngOnInit() {}

  addToCart() {
    this.addNotebookToCart.emit(this.notebook);
  }
  onStarEvent(val: string) {
    this.starMessage = val;
  }
}
