import {Routes} from "@angular/router";
import {HomeComponent} from "../../../home/home.component";
import {BookComponent} from "../../../book/book.component";
import {HousesComponent} from "../../../houses/houses.component";


/**
 * All the public routes defined here
 * @type {[{path: string; component: HomeComponent; pathMatch: string; data: {title: string}} , {path: string; component: BookComponent; pathMatch: string; data: {title: string}} , {path: string; component: HousesComponent; pathMatch: string; data: {title: string}}]}
 */
export const PUBLIC_ROUTES: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    data: {title: 'Ice And Fire API | Home'}
  },

  {
    path: 'books',
    component: BookComponent,
    pathMatch: 'full',
    data: {title: 'Ice And Fire API | Books'},
  },

  {
    path: 'houses',
    component: HousesComponent,
    pathMatch: 'full',
    data: {title: 'Ice And Fire API | Houses'},
  }

];
