import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWinnersComponent } from './show-winners.component';

describe('ShowWinnersComponent', () => {
  let component: ShowWinnersComponent;
  let fixture: ComponentFixture<ShowWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
