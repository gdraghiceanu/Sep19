import { Component, OnInit, ViewChild, ElementRef, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  @Input() modifyProduct: Product;
  @Input() showEdit: boolean;

  @Output()newPriceInput: number;
  @Output()newRatingInput: number;

  @ViewChild('rating', { static: false }) ratingInput: ElementRef<HTMLInputElement>;
  @ViewChild('price', { static: false }) priceInput: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit() {}

  setNewInput() {
    // lert(this.newPriceInput);
    this.newPriceInput = +this.priceInput.nativeElement.value;
    this.newRatingInput = +this.ratingInput.nativeElement.value;
  }


}
