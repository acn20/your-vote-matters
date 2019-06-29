import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-index',
  templateUrl: './question-index.component.html',
  styleUrls: ['./question-index.component.scss']
})
export class QuestionIndexComponent implements OnInit {
  @Input() index: number;
  @Input() isSelected: boolean;
  @Output() questionItemSelected = new EventEmitter<number>();

  
  constructor() { }

  ngOnInit() {
  }

  questionClicked() {
    this.questionItemSelected.emit();
  }

}
