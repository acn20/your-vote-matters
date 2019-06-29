import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  @Input() count: number;
  @Output() questionSelected = new EventEmitter<number>();
  numbersRange: Array<number> = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= this.count; i++) {
      this.numbersRange.push(i);
    }
  }

  questionItemSelected() {

  }

}
