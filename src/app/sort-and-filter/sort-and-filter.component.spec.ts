import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAndFilterComponent } from './sort-and-filter.component';

describe('SortAndFilterComponent', () => {
  let component: SortAndFilterComponent;
  let fixture: ComponentFixture<SortAndFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortAndFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
