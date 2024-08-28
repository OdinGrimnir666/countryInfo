import {Component, OnInit} from '@angular/core';
import {CountryInfoRequestService} from "../../services/county-info-request.service";
import {HttpClientModule} from "@angular/common/http";
import {MatLine} from "@angular/material/core";
import {Country} from "../../models/counrtyinfo/Countries";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {WidgetWebComponent} from "./widget-web/widget-web.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatChipRow} from "@angular/material/chips";

@Component({
  selector: 'app-search-by-country',
  standalone: true,
  imports: [HttpClientModule, MatLabel, MatFormField, MatGridTile, MatGridList, MatInput, MatButton, MatListItem, MatList, MatIcon, MatIconButton, MatLine, NgForOf, MatAnchor, FormsModule, NgIf, MatProgressSpinner, WidgetWebComponent, RouterLink, RouterLinkActive, MatChipRow],
  templateUrl: './search-by-country.component.html',
  styleUrl: './search-by-country.component.css',
  providers: [CountryInfoRequestService]
})
export class SearchByCountryComponent implements OnInit {

  Countries: Country[] | undefined;
  ShowCountries: Country[] | undefined;
  inputText: string = "";


  constructor ( private CountryInfoRequestService: CountryInfoRequestService)
  {
  }

  private initialCountries()
  {
    this.CountryInfoRequestService.GetAvailableCountries().subscribe({
      next: (x) => {
        console.log(x);
        this.Countries = x
        this.ShowCountries = x
      },
      error: (error) => {
        console.error(error.toString());
      }
    });
  }

   ngOnInit(){
    this.initialCountries();
  }

  onInputChange() {
    console.log(this.inputText)
    this.ShowCountries = this.Countries?.filter(x=>x.name.toLowerCase().includes(this.inputText.toLowerCase()))
    console.log(this.ShowCountries)
  }
}
