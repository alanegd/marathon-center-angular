import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonWinnerComponent } from './marathon-winner.component';

describe('MarathonWinnerComponent', () => {
  let component: MarathonWinnerComponent;
  let fixture: ComponentFixture<MarathonWinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarathonWinnerComponent]
    });
    fixture = TestBed.createComponent(MarathonWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
