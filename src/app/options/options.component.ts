import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  // TODO add @Output() that notifies the AppComponent of what we selected
  @Output() optionSelected = new EventEmitter<number>();
  // TODO make this an @Input() and populate it in the parent component
  items = new Array<{ value: number; isSelected: boolean; label: string}>();

  constructor() { }

  ngOnInit() {
    // TODO remove this
    this.items.push({ value: 0, isSelected: false, label: 'In Favour' });
    this.items.push({ value: 1, isSelected: false, label: 'Abstain' });
    this.items.push({ value: 2, isSelected: false, label: 'Against' });
  }

  optionItemSelected(value: number) {
    for(let i = 0; i < this.items.length; i++) {
      if(i == value) {
        this.items[i].isSelected = true;
      } else {
        this.items[i].isSelected = false;
      }
    }
  }
}
