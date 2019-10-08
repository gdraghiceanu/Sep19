import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../interfaces/book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() book: Book[];

}
