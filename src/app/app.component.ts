import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    //templateUrl: './app.component.html',
    //template:'<app-home></app-home>',
    template: `
    <main>
      <app-header></app-header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <app-footer></app-footer>
    </main>
  `,
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterModule,
        RouterOutlet,
        HomeComponent,
        HeaderComponent,
        HttpClientModule,
        ChangeBgDirective,
        FooterComponent
    ]
})
export class AppComponent {
  constructor() {}
  title = 'Städte von Pakistan';
}
