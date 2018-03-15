import { Component } from '@angular/core';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
    books: any[];
    constructor(bookList: BookListService){
        this.books = bookList.getBooksList();
    }
}
