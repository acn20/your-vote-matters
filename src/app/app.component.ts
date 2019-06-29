import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'yourVoteMatters';
  questionsService: QuestionsService;
  questions: Array<Question> = [];
  currentQuestion: Question;
  isLoading = true;

  constructor(questionsService: QuestionsService) {
    this.questionsService = questionsService;
  }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe(response => {
      // this is a callback that will be executed when we get the response form the server
      console.log('These are the questions: ' + response);
      this.questions = response.questions;
      this.currentQuestion = this.questions[0];
      this.isLoading = false;
    });
  }

  function1() {
    console.log("Function 1 successfully called");
  }

  function2() {
    console.log("Function 2 successfully called");
  }

  function3() {
    console.log("Function 3 successfully called");
  }

 }
