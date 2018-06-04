import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class HttpService {
  public baseURL = 'https://anapioficeandfire.com/api';

  constructor(public _http: HttpClient) {
    console.log('httpService Constructor called');
  }

  public getAllBooks(): any {
    console.log('http service ts getAllBooks()  called');
    const myresponse = this._http.get(this.baseURL + '/books');
    console.log(myresponse);
    return myresponse;
  }

  public getAllHouses(): any {
    console.log('http service ts getAllHouses()  called');
    const myresponse = this._http.get(this.baseURL + '/houses');

    console.log(myresponse);
    return myresponse;
  }

  public getAllCharacters(): any {
    console.log('http service ts getAllCharacters()  called');
    const myresponse = this._http.get(this.baseURL + '/characters');
    console.log(myresponse);
    return myresponse;
  }

  public getBookInformation(id) {
    const myresponse = this._http.get(
      `https://anapioficeandfire.com/api/books/${id}`
    );
    return myresponse;
  }

  public getHouseInformation(id) {
    const myresponse = this._http.get(
      `https://anapioficeandfire.com/api/houses/${id}`
    );
    return myresponse;
  }

  public getCharacterInformation(id) {
    const myresponse = this._http.get(
      `https://anapioficeandfire.com/api/characters/${id}`
    );
    return myresponse;
  }
}
