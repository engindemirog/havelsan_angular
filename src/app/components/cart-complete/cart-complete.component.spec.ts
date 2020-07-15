import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCompleteComponent } from './cart-complete.component';

describe('CartCompleteComponent', () => {
  let component: CartCompleteComponent;
  let fixture: ComponentFixture<CartCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
