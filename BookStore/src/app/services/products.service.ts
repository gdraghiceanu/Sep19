import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { NoteBook } from '../interfaces/notebook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
    constructor(private http: HttpClient) { }

    // getBooks(): Book[] {
    //     return books;
    // }
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>('/api/books');
    }

    getNotebooks(): Observable<NoteBook[]> {
        return this.http.get<NoteBook[]>('/api/notebooks');
    }

    updateNotebook(data: NoteBook): Observable<NoteBook[]> {
        return this.http.post<NoteBook[]>('/api/notebook', data);
    }

    updateBook(data: Book): Observable<Book[]> {
        return this.http.post<Book[]>('/api/book', data);
    }
}
