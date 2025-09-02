import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStandalonComponent } from './home-standalon.component';

describe('HomeStandalonComponent', () => {
  let component: HomeStandalonComponent;
  let fixture: ComponentFixture<HomeStandalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeStandalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStandalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
