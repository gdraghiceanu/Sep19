import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductTypeEnum } from 'src/app/constants/product-type.enum';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  @Input() product: Product;
  @Input() type: ProductTypeEnum;

  @ViewChild('rating', { static: false }) ratingInput: ElementRef<HTMLInputElement>;
  @ViewChild('price', { static: false }) priceInput: ElementRef<HTMLInputElement>;

  @Output() productSave: EventEmitter<Product> = new EventEmitter();

  updatedProduct: Product;

  constructor() { }

  ngOnInit() {
    this.updatedProduct = { ...this.product };
    alert(222);
  }
  ngAfterOnInit() {
    alert(333);
  }

  saveProduct() {
    this.updatedProduct.price = +this.priceInput.nativeElement.value;
    this.updatedProduct.review = +this.ratingInput.nativeElement.value;
    
    this.productSave.emit(this.updatedProduct);
  }
}
