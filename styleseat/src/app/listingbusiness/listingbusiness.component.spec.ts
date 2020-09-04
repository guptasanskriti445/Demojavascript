import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingbusinessComponent } from './listingbusiness.component';

describe('ListingbusinessComponent', () => {
  let component: ListingbusinessComponent;
  let fixture: ComponentFixture<ListingbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
