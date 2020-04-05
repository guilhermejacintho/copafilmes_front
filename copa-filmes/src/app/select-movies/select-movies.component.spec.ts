import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMoviesComponent } from './select-movies.component';

describe('SelectMoviesComponent', () => {
  let component: SelectMoviesComponent;
  let fixture: ComponentFixture<SelectMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
