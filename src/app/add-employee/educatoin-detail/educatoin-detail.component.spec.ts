import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatoinDetailComponent } from './educatoin-detail.component';

describe('EducatoinDetailComponent', () => {
  let component: EducatoinDetailComponent;
  let fixture: ComponentFixture<EducatoinDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatoinDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatoinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
