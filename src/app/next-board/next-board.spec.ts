import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBoard } from './next-board';

describe('NextBoard', () => {
  let component: NextBoard;
  let fixture: ComponentFixture<NextBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(NextBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
