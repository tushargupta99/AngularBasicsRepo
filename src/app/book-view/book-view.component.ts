import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers: [ Location ]
})
export class BookViewComponent implements OnInit {
  public currentBook;
  public id;

  constructor( public httpServiceObject: HttpService, public _route: ActivatedRoute, public location: Location) { }

  ngOnInit() {
    console.log('Book view Component onInit is called');

    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    // Handling Observables response.
    this.httpServiceObject.getBookInformation(this.id).subscribe(
      data => {
        this.currentBook = data; // saving the single book infi in current book
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }
  goBackToPreviousLocation() {
    this.location.back();
  }

}
