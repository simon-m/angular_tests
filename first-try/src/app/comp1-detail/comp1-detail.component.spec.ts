import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1DetailComponent } from './comp1-detail.component';

describe('Comp1DetailComponent', () => {
  let component: Comp1DetailComponent;
  let fixture: ComponentFixture<Comp1DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
