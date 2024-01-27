import { Component, OnInit , Input} from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, DetailsComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
@Input() message: string | undefined;

  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  //city: string | undefined = this.message;
  units: string = 'metric';
  //units: string = 'imperial';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getweather(this.message, this.units).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;

        /*this.iconURL =
          ' https://openweathermap.org/img/wn/' +
          this.myWeather.weather[0].icon +
          '@2x.png';*/
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed'),
    });
  }

  onRadioButtonChange() {
    if (this.units == 'imperial') {
      this.units = 'metric';
    } else {
      this.units = 'imperial';
    }

    this.getWeather();
  }
}
