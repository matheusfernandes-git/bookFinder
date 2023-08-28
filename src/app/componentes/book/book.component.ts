import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book;
  openModal: boolean;

  onModalChange(event: boolean) {
    this.openModal = event;
  }
}
