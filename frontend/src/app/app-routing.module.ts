import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { HomeComponent } from './components/home/home.component';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { EditTaskComponentComponent } from './components/edit-task-component/edit-task-component.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'workspace', //all the worspaces related to user
    component:WorkspaceComponent
  },
  {
    path:'workspace/:id', //single workspace 
    component:WorkspaceCardComponent
  },
  {
    path:'workspace/:workSpaceId/:id', //get single task for update
    component: EditTaskComponentComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
