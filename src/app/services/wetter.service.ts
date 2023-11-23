import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WetterService {

  apiKey = 'ad1b7fda11ae3d548c15e3c1911937eb';
  url = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  public getWetter(latitude: number, longitude: number): Observable<any> {
    let url = `${this.url}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  public getWetterForCity(cityname : string) : Observable<any> {
    let url = this.url + '?q=' + cityname + '&appid=' + this.apiKey
    return this.http.get<any>(url)
  }
  
}