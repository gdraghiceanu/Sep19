import { Component, OnInit } from '@angular/core';
import { noteBooks } from 'src/app/constants/notebooks.seed'

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.scss']
})
export class NotebookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  noteBooks = noteBooks;

}
