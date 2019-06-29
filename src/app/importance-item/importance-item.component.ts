import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-importance-item',
  templateUrl: './importance-item.component.html',
  styleUrls: ['./importance-item.component.scss']
})
export class ImportanceItemComponent implements OnInit {
  @Input() value: number;//componenta child are nevoie de o valoare pentru proprietatea value care va fi setata de componenta parinte
  @Input() isSelected: boolean;
  text = '';
  @Output() valueSelected = new EventEmitter<number>();//aceasta este o clasa al carei tip il setam noi (acel T). Asta inseamna ca aceasta clasa va emite doar un numar (sau ce setam noi)

  constructor() { }

  ngOnInit() {
    for(let i = 0; i <= this.value; i++) {
      this.text = this.text.concat("!");
    }
  }

  ballClicked() {
    this.valueSelected.emit(this.value);//this line of code emits an event which contains a number
    //.emit este o functie din clasa EventEmitter care cere un parametru de tip T (in cazul nostru number)
  }
}
