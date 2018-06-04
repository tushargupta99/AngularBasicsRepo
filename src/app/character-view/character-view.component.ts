import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css'],
  providers: [ Location ]
})
export class CharacterViewComponent implements OnInit {
  public currentCharacter;
  public id;

  constructor(
    public httpServiceObject: HttpService,
    public _route: ActivatedRoute,
    public location: Location
  ) {}

  ngOnInit() {
    // Getting the ID
    this.id = this._route.snapshot.paramMap.get('id');
    console.log('This is the generated id : ' + this.id);

    this.httpServiceObject.getCharacterInformation(this.id).subscribe(
      data => {
        this.currentCharacter = data;
      },
      error => {
        console.log('Some error occured' + error.errorMessage);
      }
    );
  }

  // Creating the GoBack method
  public goBackToPreviousLocation() {
    this.location.back();
  }
}

