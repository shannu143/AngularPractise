import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionsRAccordionsComponent } from './expansions-r-accordions.component';

describe('ExpansionsRAccordionsComponent', () => {
  let component: ExpansionsRAccordionsComponent;
  let fixture: ComponentFixture<ExpansionsRAccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionsRAccordionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionsRAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
