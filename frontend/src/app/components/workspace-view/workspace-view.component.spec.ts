import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceViewComponent } from './workspace-view.component';

describe('WorkspaceViewComponent', () => {
  let component: WorkspaceViewComponent;
  let fixture: ComponentFixture<WorkspaceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspaceViewComponent]
    });
    fixture = TestBed.createComponent(WorkspaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
