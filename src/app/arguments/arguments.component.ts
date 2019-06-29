import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-arguments',
  templateUrl: './arguments.component.html',
  styleUrls: ['./arguments.component.scss']
})
export class ArgumentsComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
