import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSubComponent } from './mobile-sub.component';

describe('MobileSubComponent', () => {
  let component: MobileSubComponent;
  let fixture: ComponentFixture<MobileSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
