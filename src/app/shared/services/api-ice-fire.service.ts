import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {constants} from "../../app.constants";


@Injectable()
export class IceAndFireService {

  constructor(private http: Http) { }

  getAllBooks(): Observable<any> {
    let url = constants.iceAndFireApi.baseUrl + constants.iceAndFireApi.books;

    return this.http.get(url)
      .map((response: Response) => {
        return response.json() && response.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json());
      })
  }


  getAllHouses(): Observable<any> {
    let url = constants.iceAndFireApi.baseUrl + constants.iceAndFireApi.houses;

    return this.http.get(url)
      .map((response: Response) => {
        return response.json() && response.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json());
      })
  }

}
