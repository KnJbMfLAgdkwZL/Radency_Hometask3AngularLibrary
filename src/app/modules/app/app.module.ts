import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './components/app/app.component';
import {BooksPageComponent} from './components/books-page/books-page.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookListItemComponent} from './components/book-list-item/book-list-item.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {ViewBookComponent} from './components/view-book/view-book.component';
import {FormsModule} from "@angular/forms";
import {ShowHideModalBookService} from "./services/show-hide-modal-book.service";

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookListItemComponent,
    EditBookComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShowHideModalBookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}