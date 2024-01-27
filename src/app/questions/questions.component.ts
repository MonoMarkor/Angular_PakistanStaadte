import { Component} from '@angular/core';
import { NgFor,CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { ChangeBgDirective } from '../change-bg.directive';
import { HttpClientModule} from '@angular/common/http';
import { QuestionsService } from '../questions.service';
 

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, NgFor, ChangeBgDirective, HttpClientModule],
  template: `
    <div class="container mt-4">
      <div class="card text-white border-warning bg-dark">
        <div class="d-flex justify-content-between p-3">
          <div class="image">
            <img src="../../assets/h-icons/quiz0.png" width="90" alt="logo" />
          </div>
          <div class="quiz-header">
            <h4 style="font-family: cursive;">Pakistan Quiz!</h4>
            <span style="font-style: italic;">Wilkommen{{ name }} </span>
          </div>
        </div>

        <ng-container *ngIf="!isQuizCompleted">
          <div class="d-flex justify-content-around py-3">
            <div class="score">
              <h5>{{ points }} Punkte</h5>
            </div>
            <div class="question-remain">
              <span style="font-style: italic;"
                >Frage {{ currentQuestion + 1 }} von
                {{ questionList.length }}</span
              >
            </div>
            <div class="timer">
              <h5>{{ counter }} sek ⏱</h5>
            </div>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              [ngStyle]="{ width: progress + '%' }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="question">
            <div class="card text-white border-dark bg-dark">
              <h3>{{ questionList[currentQuestion]?.questionText }}</h3>
            </div>
          </div>
          <div class="options">
            <ol *ngFor="let option of questionList[currentQuestion]?.options">
              <li (click)="answer(currentQuestion + 1, option)">
                <div
                  appChangeBg
                  [isCorrect]="option.correct"
                  class="card text-black border-light"
                >
                  {{ option.text }}
                </div>
              </li>
            </ol>
          </div>
          <div class="d-flex justify-content-between">
            <button
              [disabled]="currentQuestion === 0"
              class="btn"
              (click)="previousQuestion()"
            >
              <i
                class="fa text-primary fa-chevron-left fa-3x"
                aria-hidden="true"
              ></i>
            </button>
            <button class="btn" (click)="resetQuiz()">
              <i
                class="fa fa-refresh text-primary fa-3x"
                aria-hidden="true"
              ></i>
            </button>
            <button
              [disabled]="currentQuestion === questionList.length - 1"
              class="btn"
              (click)="nextQuestion()"
            >
              <i
                class="fa text-primary fa-chevron-right fa-3x"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </ng-container>

        <ng-container *ngIf="isQuizCompleted">
          <div class="row d-flex justify-content-between">
            <img
              style="width: 50%;"
              class="img-fluid col-sm-12 mx-auto"
              src="https://icon-library.com/images/celebration-icon-png/celebration-icon-png-7.jpg"
              alt=""
            />
            <div class="result text-center col-md-6 col-sm-12">
              <h3>
                Glückwunsch!! <br />Sie haben das Quiz abgeschlossen.
                <br />Nachfolgend finden Sie Ihr Ergebnis:
              </h3>
              <p>
                Gesamtzahl der versuchten Fragen : {{ questionList.length }}
              </p>
              <p>Insgesamt richtig beantwortet : {{ correctAnswer }}</p>
              <p>Total falsch beantwortet : {{ inCorrectAnswer }}</p>
              <p>Ihr Ergebnis : {{ points }} Punkte</p>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
    <br />
  `,
  styleUrl: './questions.component.css',
})
export class QuestionsComponent {
  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  constructor(private questionService: QuestionsService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe(res => {
      this.questionList = res.questions;
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
  }
  getProgressPercent() {
    this.progress = (
      (this.currentQuestion / this.questionList.length) *
      100
    ).toString();
    return this.progress;
  }
}

