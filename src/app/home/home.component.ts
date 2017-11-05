import { Component, OnInit } from '@angular/core';
import {IceAndFireService} from "../shared/services/api-ice-fire.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  countries = [];

  constructor(private countryService: IceAndFireService) { }

  ngOnInit() {
    this.countryService.getAllBooks().subscribe((countries: any) => {
        this.countries = countries;
        console.log(countries);
      },
      (error: any) => {
        console.log(error);
        /*if (AppUtils.isBusinessLogicError(error)) {
          this.error = AppUtils.getError(error);
        }*/
      });
  }

}
