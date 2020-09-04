import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepintoyourswaggerComponent } from './stepintoyourswagger.component';

describe('StepintoyourswaggerComponent', () => {
  let component: StepintoyourswaggerComponent;
  let fixture: ComponentFixture<StepintoyourswaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepintoyourswaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepintoyourswaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
