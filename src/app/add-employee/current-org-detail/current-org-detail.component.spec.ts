import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrgDetailComponent } from './current-org-detail.component';

describe('CurrentOrgDetailComponent', () => {
  let component: CurrentOrgDetailComponent;
  let fixture: ComponentFixture<CurrentOrgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOrgDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
