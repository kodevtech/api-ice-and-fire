import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./shared/components/header/header.component";
import {PUBLIC_ROUTES} from "./shared/components/header/public.routing";


/**
 * Application main routing defined here
 * @type {[{path: string; component: HeaderComponent; data: {title: string}; children: Routes}]}
 */
const AP_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {title: 'Ice And Fire API'},
  },

  {
    path: '',
    component: HeaderComponent,
    data: {title: 'Ice And Fire API'},
    children: PUBLIC_ROUTES
  }
];

export const AppRouting = RouterModule.forRoot(AP_ROUTES);
