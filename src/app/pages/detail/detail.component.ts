import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { Country, Currency } from 'src/app/types/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  country$: Observable<Country>;
  

  constructor(private api : ApiService, private route: ActivatedRoute) { }

 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country$ = this.api.getCountryByName(params.country);
    });
  }

  displayCurrencies(currencies: Currency[]){

    return currencies.map(currency => currency.name).join(',  ');
  }

}
