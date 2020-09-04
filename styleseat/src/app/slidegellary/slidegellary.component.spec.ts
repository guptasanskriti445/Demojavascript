import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidegellaryComponent } from './slidegellary.component';

describe('SlidegellaryComponent', () => {
  let component: SlidegellaryComponent;
  let fixture: ComponentFixture<SlidegellaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidegellaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidegellaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
