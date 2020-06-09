import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePriceGraphComponent } from './average-price-graph.component';

describe('AveragePriceGraphComponent', () => {
  let component: AveragePriceGraphComponent;
  let fixture: ComponentFixture<AveragePriceGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveragePriceGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragePriceGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
