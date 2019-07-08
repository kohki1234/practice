import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricitySubComponent } from './electricity-sub.component';

describe('ElectricitySubComponent', () => {
  let component: ElectricitySubComponent;
  let fixture: ComponentFixture<ElectricitySubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricitySubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricitySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
