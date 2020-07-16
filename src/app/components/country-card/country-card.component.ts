import { Component, Input } from '@angular/core';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent {
  @Input()
  country: Country;
}
