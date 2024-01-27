import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  getQuestionJson() {
    return this.http.get<any>('../assets/json/questions.json');
  }
}
