import { Component, OnInit, ViewChild, AfterViewInit,ChangeDetectorRef  } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { books } from 'src/app/constants/books.seed';
import { StarComponent } from '../shared/star.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  public books = books;
  //definim un array ce se va popula cu rezultatul filtrarii
  filteredBooks: Book[];
  private _filter: string;
  get filter(): string {
    return this._filter;
  }
  set filter(val: string) {
    this._filter = val;
    this.filteredBooks = val ? this.produceFilterList(val) : this.books;
  }
  //end
  //pentru rating metoada 2
  @ViewChild('childStar', {static: false}) childStar: StarComponent;

  message: string;
  starLabel: string;

  starMessage: string;

  constructor(private cd: ChangeDetectorRef) {
    this.filteredBooks = this.books;

   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = this.childStar.messageStar;
    this.starLabel = `View Child data: ${this.childStar.rating.toString()}`;
    console.log(this.childStar.rating.toString());
    this.cd.detectChanges();
    
  }

  onChangeFilter(val: string) {
    this.filter = val;
  }
  produceFilterList(keyValue: string): Book[] {
    keyValue = keyValue.toLocaleLowerCase();
    return this.books.filter(book => book.title.toLocaleLowerCase().indexOf(keyValue) !== -1);
  }

  onStarEvent(val: string) {
    this.starMessage = val;
  }

}
