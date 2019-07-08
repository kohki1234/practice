import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSubComponent } from './shopping-sub.component';

describe('ShoppingSubComponent', () => {
  let component: ShoppingSubComponent;
  let fixture: ComponentFixture<ShoppingSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
