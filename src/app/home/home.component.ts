import { Component, inject } from '@angular/core';
import { Cities } from '../cities';
import { CitiesServiceService } from '../cities-service.service';
import { CommonModule } from '@angular/common';
import { CitiesLocationComponent } from '../cities-location/cities-location.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CitiesLocationComponent, HttpClientModule],
  template: `
    <section>
      <br />
      <form>
        <input
          (keyup)="filterResults(filter.value)"
          (keyup.enter)="filterResults(filter.value)"
          id="search-bar"
          type="text"
          placeholder="Suche nach Stadt oder Ort"
          #filter
        />
        <!--<button
          id="search-btn"
          class="btn btn-dark"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>-->
      </form>
    </section>

    <section class="results">
      <app-cities-location
        *ngFor="let citiesLocation of filteredLocationList"
        [citiesLocation]="citiesLocation"
      ></app-cities-location>
    </section>
    <br />
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cities1: Cities[] = [];
  citisservice: CitiesServiceService = inject(CitiesServiceService);

  filteredLocationList: Cities[] = [];

  constructor() {
    this.cities1 = this.citisservice.getAllCities();
    this.filteredLocationList = this.cities1;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.cities1;
      return;
    }

    this.filteredLocationList = this.cities1.filter(
      (citiesLocation) =>
        citiesLocation?.name.toLowerCase().includes(text.toLowerCase()) ||
        citiesLocation?.province.toLowerCase().includes(text.toLowerCase())
    );
  }
}


