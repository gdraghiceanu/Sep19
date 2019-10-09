import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { books } from '../constants/books.seed';
import { NoteBook } from '../interfaces/notebook';
import { noteBooks } from '../constants/notebooks.seed';

@Injectable()
export class ProductsService {
    constructor() { }

    getBooks(): Book[] {
        return books;
    }

    getNotebooks(): NoteBook[] {
        return noteBooks;
    }
}