import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';
import { ProductEditComponent } from './../product-edit/product-edit.component';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {

  @Input() notebook: NoteBook;
  @Input() index: number;
  @ViewChild('productEdit', { static: false }) productEdit: ProductEditComponent;

  @Output() addNotebookToCart: EventEmitter<NoteBook> = new EventEmitter();
  public noteBooks: NoteBook[];
  starMessage: string;
  showEdit: boolean;

  constructor(
    private productService: ProductsService
    ) {

    }

  ngOnInit() {}


  addToCart() {
    this.addNotebookToCart.emit(this.notebook);
  }
  onStarEvent(val: string) {
    this.starMessage = val;
  }
  updateNotebook() {
    // this.notebook.price = +this.priceInput.nativeElement.value;  // cast la int
    // this.notebook.review = +this.ratingInput.nativeElement.value;

    this.showEdit = false;

    this.productEdit.setNewInput();

    this.notebook.price = this.productEdit.newPriceInput;
    this.notebook.review = this.productEdit.newRatingInput;

    // console.log(this.notebook);
    this.productService.updateNotebook(this.notebook)
      .subscribe(
        data => {
          alert('Succesfully Added notebook' );
        },
        error => {
          alert('failed while adding notebook');
        }
      );
  }
}
