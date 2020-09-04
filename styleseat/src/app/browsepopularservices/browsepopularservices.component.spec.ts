import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsepopularservicesComponent } from './browsepopularservices.component';

describe('BrowsepopularservicesComponent', () => {
  let component: BrowsepopularservicesComponent;
  let fixture: ComponentFixture<BrowsepopularservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsepopularservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsepopularservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
