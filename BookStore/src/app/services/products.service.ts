import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { NoteBook } from '../interfaces/notebook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ProductsService {
    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>('/api/books').pipe(
            delay(2000)
        );
    }

    getNotebooks(): Observable<NoteBook[]> {
        return this.http.get<NoteBook[]>('/api/notebooks');
    }

    updateBook(book: Book): Observable<Book> {
        return this.http.post<Book>('/api/book', book);
    }

    updateNotebook(notebook: NoteBook): Observable<NoteBook> {
        return this.http.post<NoteBook>('/api/notebook', notebook);
    }
}
