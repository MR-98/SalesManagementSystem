import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseCapacityComponent} from './database-capacity.component';

describe('DatabaseCapacityComponent', () => {
  let component: DatabaseCapacityComponent;
  let fixture: ComponentFixture<DatabaseCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
