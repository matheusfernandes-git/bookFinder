import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksResult } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly urlApi = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) {}

  search(typedValue: string): Observable<BooksResult> {
    const params = new HttpParams().append('q', typedValue);
    return this.http.get<BooksResult>(this.urlApi, { params });
  }
}
