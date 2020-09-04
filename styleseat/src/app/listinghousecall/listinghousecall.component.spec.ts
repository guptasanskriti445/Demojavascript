import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinghousecallComponent } from './listinghousecall.component';

describe('ListinghousecallComponent', () => {
  let component: ListinghousecallComponent;
  let fixture: ComponentFixture<ListinghousecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinghousecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinghousecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
