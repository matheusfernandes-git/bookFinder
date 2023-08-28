import { FormControl } from '@angular/forms';
import { BooksResult, Item } from './../../models/interfaces';
import { Component } from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { InfoBookVolume } from 'src/app/models/infoBookVolume';
import { BookService } from 'src/app/service/book.service';

const stop = 300;

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BookslistComponent {
  searchField = new FormControl();
  errorMsg = '';
  BooksResult: BooksResult;

  constructor(private service: BookService) {}

  booksResult(items: Item[]): InfoBookVolume[] {
    return items.map((item) => new InfoBookVolume(item));
  }

  findBooks$ = this.searchField.valueChanges.pipe(
    debounceTime(stop), //determina um tempo para a requisição
    filter((typedValue) => typedValue.length >= 3),
    distinctUntilChanged(),
    switchMap((typedValue) => this.service.search(typedValue)),
    map((items) => (this.BooksResult = items)),
    tap((apiReturn) => console.log(apiReturn)),
    map((response) => response.items ?? []),
    map((item) => this.booksResult(item)),
    catchError((error) => {
      console.log(error);
      return throwError(
        () =>
          new Error(
            (this.errorMsg = 'Ops, ocorreu um erro. Recarrege a aplicação')
          )
      );
    })
  );
}
