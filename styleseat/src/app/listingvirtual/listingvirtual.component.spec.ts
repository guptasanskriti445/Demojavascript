import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingvirtualComponent } from './listingvirtual.component';

describe('ListingvirtualComponent', () => {
  let component: ListingvirtualComponent;
  let fixture: ComponentFixture<ListingvirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingvirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingvirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
