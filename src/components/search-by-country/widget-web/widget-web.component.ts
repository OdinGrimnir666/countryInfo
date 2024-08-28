import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../../models/counrtyinfo/Countries";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatLine} from "@angular/material/core";
import {Holiday} from "../../../models/counrtyinfo/Holiday";
import {HttpClientModule} from "@angular/common/http";
import {CountryInfoRequestService} from "../../../services/county-info-request.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

class ShowWidgetHoliday {
  nameCountry : string ;
  nameHoliday: string ;
  Data: string

  constructor(nameCountry: string,nameHoliday: string,date:string) {
    this.nameCountry = nameCountry;
    this.nameHoliday = nameHoliday;
    this.Data = date;
  }

}
@Component({
  selector: 'app-widget-web',
  standalone: true,
  imports: [
    MatListItem,
    MatList,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatLine,
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './widget-web.component.html',
  styleUrl: './widget-web.component.css',
  providers: [HttpClientModule]
})
export class WidgetWebComponent implements OnInit {
  @Input() items: Country[] = [];

  Holidays: ShowWidgetHoliday[] = [];


  constructor(private serviceCountry: CountryInfoRequestService) {
  }

  ngOnInit(): void {
    console.log(this.items)
    this.InitialHolidays()
  }

  InitialHolidays() {
    const CountriesName = this.items.map(x => x.countryCode)
    console.log(CountriesName)

    const randomIndexes = this.getRandomIndexes(CountriesName.length, 3);
    const randomItems = randomIndexes.map(index => CountriesName[index]);
    for (let i = 0; i < 3; i++) {
      this.GetHolidayNear(randomItems[i])
    }

  }

  private getRandomIndexes(max: number, count: number): number[] {
    const indexes: number[] = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }

  private GetHolidayNear(codeCountry: string) {
    const today = new Date();
    const currentYear = today.getFullYear();
    this.serviceCountry.GetPublicHolidays(codeCountry, currentYear).subscribe({
      next: (x) => {
        this.AddHoliday(x)
      },
      error: (error) => {
        console.error(error.toString());

      }
    });

  }

  private AddHoliday(holidays: Holiday[]) {
    const today = new Date();
    holidays.forEach(holiday => {
      holiday.date = new Date(holiday.date); // Преобразуем строку в объект Date
    });
    const upcomingHolidays = holidays
        .filter(holiday => holiday.date >= today)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
    console.log(upcomingHolidays)
    if (upcomingHolidays.length > 0) {
      console.log(upcomingHolidays)
      const nextHoliday = upcomingHolidays[0];
      const infoCountry = this.items.filter(x => x.countryCode == nextHoliday.countryCode)[0]
      const showWidgetHoliday = new ShowWidgetHoliday(infoCountry.name, nextHoliday.name, this.formatDate(nextHoliday.date));
      console.log(showWidgetHoliday)
      this.Holidays.push(showWidgetHoliday);

    }
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // добавляем ноль спереди, если месяц < 10
    const day = ('0' + date.getDate()).slice(-2); // добавляем ноль спереди, если день < 10
    return `${year}-${month}-${day}`;

  }

}


