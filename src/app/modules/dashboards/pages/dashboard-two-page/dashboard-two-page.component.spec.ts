import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTwoPageComponent } from './dashboard-two-page.component';

describe('DashboardTwoPageComponent', () => {
  let component: DashboardTwoPageComponent;
  let fixture: ComponentFixture<DashboardTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
