import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container bg-dark text-white py-5 mt-4">
      <h1 class="display-5 fw-bold">Willkommen bei der Quiz-App</h1>
      <p class="col-md-8 fs-4">
        Dieses Quiz enthält insgesamt 9 Fragen. Für jede Frage gibt es 10 Punkte
      </p>
      <h4>Regeln:</h4>
      <ol>
        <li>Für die richtige Antwort erhalten Sie 10 Punkte</li>
        <li>Für die falsche Antwort verlieren Sie 10 Punkte</li>
        <li>Für die Beantwortung jeder Frage haben Sie 60 Sekunden Zeit</li>
        <li>Durch erneutes Laden der Seite wird das Quiz zurückgesetzt</li>
      </ol>
      <h1 style="font-family: cursive;text-align:center">Viel Erfolg!!</h1>
      <div class="name col-md-4 my-3">
        <label for="">Gib deinen Namen ein:</label>
        <input #name type="text" class="form-control" />
      </div>
      <a routerLink="/questions"
        ><button class="btn btn-primary btn-lg" (click)="startQuiz()">
          Start!!
        </button></a
      >
    </div>
    <br />
  `,
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  constructor() {}
  ngOnInit(): void {}
  startQuiz() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
}
