import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingallComponent } from './listingall.component';

describe('ListingallComponent', () => {
  let component: ListingallComponent;
  let fixture: ComponentFixture<ListingallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
