import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { NoteBook } from '../interfaces/notebook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>('/api/books');
    }

    getNotebooks(): Observable<NoteBook[]> {
        return this.http.get<NoteBook[]>('/api/notebooks');
    }
}