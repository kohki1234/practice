import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAmazonComponent } from './shopping-amazon.component';

describe('ShoppingAmazonComponent', () => {
  let component: ShoppingAmazonComponent;
  let fixture: ComponentFixture<ShoppingAmazonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingAmazonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
