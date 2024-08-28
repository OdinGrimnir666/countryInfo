import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CountryInfoRequestService} from "../../services/county-info-request.service";
import {CountryInfo} from "../../models/counrtyinfo/Country";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {Holiday} from "../../models/counrtyinfo/Holiday";
import {MatPaginator} from "@angular/material/paginator";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatInput} from "@angular/material/input";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WidgetWebComponent} from "../search-by-country/widget-web/widget-web.component";

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [HttpClientModule, MatCardContent, MatCardSubtitle, MatCardTitle, MatCardHeader, MatCard, MatDivider, MatList, MatListItem, MatIcon, NgForOf, MatPaginator, NgIf, MatButton, MatFormField, MatGridList, MatGridTile, MatInput, MatLabel, MatProgressSpinner, ReactiveFormsModule, RouterLink, RouterLinkActive, WidgetWebComponent, FormsModule],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css',
  providers: [CountryInfoRequestService]
})
export class CountryDetailComponent implements OnInit {
  countryId: string | null = "";
  yearNow: number = 0 ;
  country: CountryInfo|undefined;
  holidayYear: Holiday[]| undefined;

  constructor(private route: ActivatedRoute,private countryInfoRequestService: CountryInfoRequestService) { }

  ngOnInit(): void {
    const year = new Date().getFullYear();
    console.log("show")
    this.countryId = this.route.snapshot.paramMap.get('id');
    if(this.countryId !='')
    {
      this.yearNow = year;
      this.InitialCountries(this.countryId,year);
      this.InitialCountry(this.countryId);
    }

  }

  private InitialCountry(codeCountry: string | null)
  {
    this.countryInfoRequestService.GetInfoCountry(codeCountry).subscribe({
      next: (x) => {
        this.country = x;
      },
      error: (error) => {
        console.error(error.toString());
      }
    });
  }
  private InitialCountries(countryId: string | null,year:number)
  {

    this.countryInfoRequestService.GetPublicHolidays(countryId,year).subscribe({
      next: (x) => {
        this.holidayYear = x;
      },
      error: (error) => {
        console.error(error.toString());
      }
    });
  }

  NextYear() {
    if(this.yearNow < 2030)
    {
      this.yearNow++;
      this.InitialCountries(this.countryId,this.yearNow)
    }
  }

  LastYear() {
    if(this.yearNow > 2020)
    {
      this.yearNow--;
      this.InitialCountries(this.countryId,this.yearNow)
    }
  }
}
