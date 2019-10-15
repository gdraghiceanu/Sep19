import { Component, OnInit, Input } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook'

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  noteBook:  NoteBook;

}
