import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSub2Component } from './mobile-sub2.component';

describe('MobileSub2Component', () => {
  let component: MobileSub2Component;
  let fixture: ComponentFixture<MobileSub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
