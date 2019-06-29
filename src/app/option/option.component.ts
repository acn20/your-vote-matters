import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Output() optionItemSelected = new EventEmitter<number>();
  @Input() value: number;
  @Input() isSelected: boolean;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

  optionClicked() {
    this.optionItemSelected.emit(this.value);
  }

}