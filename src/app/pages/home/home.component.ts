import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/types/api';
import { ApiService } from 'src/app/services/api.service';


const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

searchFilter? : string;
regionFilter? : string;
regionOptions = REGION_OPTIONS;
source: Country[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getAllCountries().subscribe(countries => {
      this.source = countries;
    });

  }

  get countries(){

    return this.source
    ? this.source.filter((country) =>
    this.searchFilter 
    ? country.name
    .toLowerCase()
    .includes(this.searchFilter.toLowerCase())
      : country
      ).filter(country => this.regionFilter
        ? country.region.includes(this.regionFilter)
          : country )

      : this.source;
  }

}
