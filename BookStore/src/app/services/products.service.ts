import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { NoteBook } from '../interfaces/notebook';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  private books;
  private notebooks;

  constructor(private http: HttpClient) { }

  getBooks(ignoreCache = false): Observable<Book[]> {
    if (!ignoreCache && this.books) {
      return of(this.books);
    }

    return this.http.get<Book[]>('/api/books')
      .pipe(
        delay(2000),
        tap(books => {
          this.books = books;
        })
      );
  }

  getNotebooks(ignoreCache = false): Observable<NoteBook[]> {
    if (!ignoreCache && this.notebooks) {
      return of(this.notebooks);
    }

    return this.http.get<NoteBook[]>('/api/notebooks')
      .pipe(
        delay(2000),
        tap(notebooks => {
          this.notebooks = notebooks;
        })
      );
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`/api/book/${bookId}`);
  }

  getNoteBook(notebookId: number): Observable<NoteBook> {
    return this.http.get<NoteBook>(`/api/notebook/${notebookId}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.post<Book>('/api/book', book);
  }

  updateNotebook(notebook: NoteBook): Observable<NoteBook> {
    return this.http.post<NoteBook>('/api/notebook', notebook);
  }

}
