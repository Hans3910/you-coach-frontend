import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachRequestProfileChangeComponent } from './coach-request-profile-change.component';

describe('CoachRequestProfileChangeComponent', () => {
  let component: CoachRequestProfileChangeComponent;
  let fixture: ComponentFixture<CoachRequestProfileChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachRequestProfileChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachRequestProfileChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
