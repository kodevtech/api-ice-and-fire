import { Component, OnInit } from '@angular/core';
import {IceAndFireService} from "../shared/services/api-ice-fire.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html'
})
export class HousesComponent implements OnInit {

  houses = [];
  loading: Subscription;

  constructor(private bookService: IceAndFireService) { }

  ngOnInit() {

    this.loading = this.bookService.getAllHouses().subscribe((houses: any) => {
        this.houses = houses;
      },
      (error: any) => {
        /*if (AppUtils.isBusinessLogicError(error)) {
          this.error = AppUtils.getError(error);
        }*/
      });
  }

}
