import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlistingComponent } from './searchlisting.component';

describe('SearchlistingComponent', () => {
  let component: SearchlistingComponent;
  let fixture: ComponentFixture<SearchlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
