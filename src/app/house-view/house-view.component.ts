import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css'],
  providers: [ Location ]
})
export class HouseViewComponent implements OnInit {
  public currentHouse;
  public id;

  constructor(public httpServiceObject: HttpService, public _route: ActivatedRoute, public location: Location) { }

  ngOnInit() {
   this.id = this._route.snapshot.paramMap.get('id');

   this.httpServiceObject.getHouseInformation(this.id).subscribe(
     data => {
       this.currentHouse = data;
     },
     error => {
      console.log(error.errorMessage);
     }
   );
  }

    // Creating the GoBack method
  public goBackToPreviousLocation() {
    this.location.back();
  }

}
