import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylelistsandbarbersComponent } from './stylelistsandbarbers.component';

describe('StylelistsandbarbersComponent', () => {
  let component: StylelistsandbarbersComponent;
  let fixture: ComponentFixture<StylelistsandbarbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylelistsandbarbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylelistsandbarbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
