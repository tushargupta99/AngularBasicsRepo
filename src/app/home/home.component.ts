import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public allBooks;
public allHouses;
public allCharacters;

  constructor(public httpServiceObject: HttpService) {
    console.log('Home Component Constructor called');
   }

  ngOnInit() {
    console.log('Home Component OnInit() called');
    // Get all Books
    this.httpServiceObject.getAllBooks().subscribe(
      data => {
          console.log(data);
          this.allBooks = data;
        },
      error => {
        console.log('Error Occured');
        console.log(error.errorMessage);
     }
    );
    // Get All Houses
    this.httpServiceObject.getAllHouses().subscribe(
      data => {
          console.log(data);
          this.allHouses = data;
        },
      error => {
        console.log('Error Occured');
        console.log(error.errorMessage);
     }
    );
    // Get All Characters
   this.httpServiceObject.getAllCharacters().subscribe(
      data => {
          console.log(data);
          this.allCharacters = data;
        },
      error => {
        console.log('Error Occured');
        console.log(error.errorMessage);
     }
    );
  }

    // This will fetch particular id from the URL.
    getItemId(item) {
      const id = item.url.match(/\d+/)[0];
      return id;
    }
}
