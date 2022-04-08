import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasedateComponent } from './releasedate.component';

describe('ReleasedateComponent', () => {
  let component: ReleasedateComponent;
  let fixture: ComponentFixture<ReleasedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasedateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
