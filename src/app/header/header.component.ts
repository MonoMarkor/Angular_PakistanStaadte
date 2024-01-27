import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar" style="background-color: #deb887;">
      <div class="container-fluid">
        <a class="navbar-brand text-bold" [routerLink]="['/']">
          <img src="../../assets/h-icons/pakicon.png" width="50" alt="logo" />
          <span class="text-uppercase" style="color: black;"> Städte von Pakistan</span>
        </a>
        <a class="navbar-brand text-bold" routerLink="/welcome">
          <span class="text-uppercase" style="color: black;">Quiz Spielen </span>
          <img src="../../assets/h-icons/quiz1.png" width="50" alt="logo" />
        </a>
      </div>
    </nav>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
