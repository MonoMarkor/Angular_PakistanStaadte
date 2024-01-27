import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any', 
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getweather(city: string | undefined, units: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=ef46d42fc7601f5c710656d099bdb94e&units=' + units
    );
  }
}
