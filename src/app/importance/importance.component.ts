import { Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.scss']
})
export class ImportanceComponent implements OnInit {
  @Output() importanceSelected = new EventEmitter<number>();
  items = new Array<{ value: number; isSelected: boolean}>();

  constructor() { }

  ngOnInit() {
    this.items.push({ value: 0, isSelected: false });
    this.items.push({ value: 1, isSelected: true });
    this.items.push({ value: 2, isSelected: false });
  }

  importanceItemSelected(value: number) {
    for(let i = 0; i < this.items.length; i++) {
      if(i == value) {
        this.items[i].isSelected = true;
      } else {
        this.items[i].isSelected = false;
      }
    }
  }
}

//declar o proprietate de tip EventEmitter, acest event va fi procesat de app-component