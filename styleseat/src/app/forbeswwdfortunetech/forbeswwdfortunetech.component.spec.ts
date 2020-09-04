import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbeswwdfortunetechComponent } from './forbeswwdfortunetech.component';

describe('ForbeswwdfortunetechComponent', () => {
  let component: ForbeswwdfortunetechComponent;
  let fixture: ComponentFixture<ForbeswwdfortunetechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbeswwdfortunetechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbeswwdfortunetechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
