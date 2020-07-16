import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../types/api';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = "https://restcountries.eu/rest/v2";



  constructor(private http : HttpClient) { }

  getAllCountries(){
    const api = "https://restcountries.eu/rest/v2";
    return this.http.get<Country[]>(api)
   // return this.http.get<Country[]>('${this.api}/all');
  }

  getCountryByName(name: string){
  const api = "https://restcountries.eu/rest/v2";
   //return this.http.get<Country[]>(api)
 
return this.http
.get<Country[]>('${this.api}/name/${name}')
.pipe(map(([res]) => res)
);
  
  }

}
