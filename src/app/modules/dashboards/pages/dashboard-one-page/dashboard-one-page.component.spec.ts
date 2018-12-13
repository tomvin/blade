import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOnePageComponent } from './dashboard-one-page.component';

describe('DashboardOnePageComponent', () => {
  let component: DashboardOnePageComponent;
  let fixture: ComponentFixture<DashboardOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
