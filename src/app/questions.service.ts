import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetQuestionsResponse } from './models/get-questions-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  httpClient: HttpClient; // HttpClient e o clasa facuta de Angular

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getQuestions() : Observable<GetQuestionsResponse> {
    return this.httpClient.get<GetQuestionsResponse>('https://superbackend.azurewebsites.net/api/yourvotematters/questions');
  }

  submitAnswers() {
    // TODO later
  }
}
