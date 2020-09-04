import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleseatproComponent } from './styleseatpro.component';

describe('StyleseatproComponent', () => {
  let component: StyleseatproComponent;
  let fixture: ComponentFixture<StyleseatproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleseatproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleseatproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
