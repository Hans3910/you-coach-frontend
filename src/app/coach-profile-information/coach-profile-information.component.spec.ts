import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfileInformationComponent } from './coach-profile-information.component';

describe('CoachProfileInformationComponent', () => {
  let component: CoachProfileInformationComponent;
  let fixture: ComponentFixture<CoachProfileInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfileInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
