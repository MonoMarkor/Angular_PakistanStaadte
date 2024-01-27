import { Component, inject ,CUSTOM_ELEMENTS_SCHEMA,input, OnInit} from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CitiesServiceService } from '../cities-service.service';
import { Cities } from '../cities';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { WeatherComponent } from '../weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import { NgIf } from '@angular/common';

import { register } from 'swiper/element/bundle';
//import Swiper from 'swiper';
register();


@Component({
  selector: 'app-details',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeatherComponent,
    HttpClientModule,
    NgIf,
  ],
  templateUrl: `./details.component.html`,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  citiesservice = inject(CitiesServiceService);
  citiesLocation: Cities | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  cities1: Cities[] = [];
  citisservice: CitiesServiceService = inject(CitiesServiceService);
  gal: string[] = [];
  weatherCity: string | undefined = '';

  constructor(private weatherService: WeatherService) {
    const citiesLocationId = Number(this.route.snapshot.params['id']);
    this.citiesLocation = this.citiesservice.getCitiesById(citiesLocationId);
    this.cities1 = this.citisservice.getAllCities();
    this.gal = this.citisservice.getGallery(citiesLocationId);
    this.weatherCity = this.citiesLocation?.name;
  }

  submitApplication() {
    this.citiesservice.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    document.getElementById('from-rec')!.innerHTML =
      'Vielen Dank! Überprüfen Sie Ihre E-Mail.';
  }

  updateResponse() {
    if (
      this.applyForm.value.firstName == '' ||
      this.applyForm.value.lastName == '' ||
      this.applyForm.value.email == ''
    ) {
      console.log('form invalid');
    }
  }
}
