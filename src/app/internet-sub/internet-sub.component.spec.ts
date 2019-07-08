import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetSubComponent } from './internet-sub.component';

describe('InternetSubComponent', () => {
  let component: InternetSubComponent;
  let fixture: ComponentFixture<InternetSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
