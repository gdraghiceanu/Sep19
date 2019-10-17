import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges {
  @ViewChild('childStar', { static: false }) childStar: StarComponent;

  @Input() book: Book;
  @Input() showImage: boolean;

  sizeWidth = 50;
  marginSize = 5;
  starMessage: string;
  edit:boolean = false;
  showEditForm: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit() {
    console.log(this.childStar.rating.toString());
  }

  onStarEvent(val: string) {
    this.starMessage = val;
  }

  editt(){
    this.edit = !this.edit;
    this.showEditForm = !this.showEditForm;
  }
}
