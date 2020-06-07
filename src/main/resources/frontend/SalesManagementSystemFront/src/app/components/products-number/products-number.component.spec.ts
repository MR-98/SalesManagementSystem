import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNumberComponent } from './products-number.component';

describe('ProductsNumberComponent', () => {
  let component: ProductsNumberComponent;
  let fixture: ComponentFixture<ProductsNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
