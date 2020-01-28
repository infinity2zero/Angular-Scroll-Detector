import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgScrollDetectorComponent } from './ng-scroll-detector.component';

describe('NgScrollDetectorComponent', () => {
  let component: NgScrollDetectorComponent;
  let fixture: ComponentFixture<NgScrollDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgScrollDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgScrollDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
