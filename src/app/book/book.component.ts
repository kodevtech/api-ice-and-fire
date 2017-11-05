import { Component, OnInit } from '@angular/core';
import {IceAndFireService} from "../shared/services/api-ice-fire.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-list',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  books = [];
  loading: Subscription;

  constructor(private bookService: IceAndFireService) { }

  ngOnInit() {

    this.loading = this.bookService.getAllBooks().subscribe((books: any) => {
        this.books = books;
      },
      (error: any) => {
        /*if (AppUtils.isBusinessLogicError(error)) {
          this.error = AppUtils.getError(error);
        }*/
      });
  }

}
