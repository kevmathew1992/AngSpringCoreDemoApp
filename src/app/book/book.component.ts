import { Component, OnInit } from '@angular/core';
import {Book} from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  books: Book[];
  book = new Book();
  message: String;

  getAllBooks(): void {

    this.bookService.getAllBookDetails()
    .subscribe(
      (bookData) => {
        this.books = bookData, console.log(bookData)
      }
      );
  }

  saveBookDetails(): void {

    this.bookService.saveBookDetails(this.book)
        .subscribe(
          (responseMessage) => {
            this.message = responseMessage.toString();
            this.clearBookFieldDetails();
            this.getAllBooks();
          }
          )

  }

  clearBookFieldDetails(): void {
    this.book = new Book();
  }


}
