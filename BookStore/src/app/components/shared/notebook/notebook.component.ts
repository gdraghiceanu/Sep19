import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  @Input() notebook: NoteBook;
  @Input() index: number;

  @ViewChild('rating', { static: false }) ratingInput: ElementRef<HTMLInputElement>;
  @ViewChild('price', { static: false }) priceInput: ElementRef<HTMLInputElement>;

  @Output() addNotebookToCart: EventEmitter<NoteBook> = new EventEmitter();

  starMessage: string;
  showEdit = false;

  constructor() {}

  ngOnInit() {}

  addToCart(){
    this.addNotebookToCart.emit(this.notebook);
  }

  onStarEvent(val: string) {
    this.starMessage = val;
  }

  updateNotebook(){
    this.notebook.price = +this.priceInput.nativeElement.value;
    this.notebook.review = +this.ratingInput.nativeElement.value;
    this.showEdit = false;
  }
}
