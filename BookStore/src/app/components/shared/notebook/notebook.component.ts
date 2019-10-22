import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';
import { ProductsService } from 'src/app/services/products.service';

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
  @Output() notebookUpdated: EventEmitter<void> = new EventEmitter();

  starMessage: string;
  showEdit = false;

  constructor(private productService: ProductsService) { }

  ngOnInit() { }

  addToCart() {
    this.addNotebookToCart.emit(this.notebook);
  }

  onStarEvent(val: string) {
    this.starMessage = val;
  }

  saveNotebook(notebook: NoteBook) {
    this.productService.updateNotebook(notebook).subscribe(
      () => {
        this.showEdit = false;
        this.notebookUpdated.emit();
      }
    );
  }
}
