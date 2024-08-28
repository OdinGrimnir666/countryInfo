import { Routes } from '@angular/router';
import {CountryDetailComponent} from "../components/country-detail/country-detail.component";
import {SearchByCountryComponent} from "../components/search-by-country/search-by-country.component";

export const routes: Routes = [
    { path: '', component: SearchByCountryComponent },
    { path: 'country/:id', component: CountryDetailComponent } ,
];
