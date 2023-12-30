import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskComponentComponent } from './edit-task-component.component';

describe('EditTaskComponentComponent', () => {
  let component: EditTaskComponentComponent;
  let fixture: ComponentFixture<EditTaskComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskComponentComponent]
    });
    fixture = TestBed.createComponent(EditTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
