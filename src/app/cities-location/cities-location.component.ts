import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cities } from '../cities';
import { CitiesServiceService } from '../cities-service.service';
import { CitiesComponent } from '../cities/cities.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cities-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section class="listing">
    <img
      class="listing-photo"
      [src]="citiesLocation.photo"
      alt="Exterior photo of {{ citiesLocation.name }}"
    />
    <h2 class="listing-heading">{{ citiesLocation.name }}</h2>
    <p class="listing-location">{{ citiesLocation.province }}</p>
    <a [routerLink]="['/details', citiesLocation.id]">Mehr Erfahren</a>
  </section> `,
  styleUrl: './cities-location.component.css',
})
export class CitiesLocationComponent {
  @Input() citiesLocation!: Cities;
}
