import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicoverandbookComponent } from './dicoverandbook.component';

describe('DicoverandbookComponent', () => {
  let component: DicoverandbookComponent;
  let fixture: ComponentFixture<DicoverandbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicoverandbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicoverandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
