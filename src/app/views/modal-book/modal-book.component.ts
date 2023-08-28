import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/interfaces';

const body = document.querySelector('body');

@Component({
  selector: 'app-modal-book',
  templateUrl: './modal-book.component.html',
  styleUrls: ['./modal-book.component.css'],
})
export class ModalBookComponent {
  constructor() {}

  @Input() book: Book;
  @Output() changeModal = new EventEmitter();
  modalStats: boolean = true;

  closeModal() {
    this.modalStats = false;
    this.changeModal.emit(this.modalStats);
    body.style.overflow = 'scroll';
  }

  hideScroll() {
    if (this.modalStats === true) {
      body.style.overflow = 'hidden';
    }
  }

  readPrevious() {
    window.open(this.book.previewLink, '_blank');
  }
}
