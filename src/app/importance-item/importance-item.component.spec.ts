import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceItemComponent } from './importance-item.component';

describe('ImportanceItemComponent', () => {
  let component: ImportanceItemComponent;
  let fixture: ComponentFixture<ImportanceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
