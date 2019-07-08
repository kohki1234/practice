import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetHikariComponent } from './internet-hikari.component';

describe('InternetHikariComponent', () => {
  let component: InternetHikariComponent;
  let fixture: ComponentFixture<InternetHikariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetHikariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetHikariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
