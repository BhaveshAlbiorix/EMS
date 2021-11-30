import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperianceDetailComponent } from './experiance-detail.component';

describe('ExperianceDetailComponent', () => {
  let component: ExperianceDetailComponent;
  let fixture: ComponentFixture<ExperianceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperianceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperianceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
