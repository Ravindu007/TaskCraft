import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColloboratorsViewComponent } from './colloborators-view.component';

describe('ColloboratorsViewComponent', () => {
  let component: ColloboratorsViewComponent;
  let fixture: ComponentFixture<ColloboratorsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColloboratorsViewComponent]
    });
    fixture = TestBed.createComponent(ColloboratorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
