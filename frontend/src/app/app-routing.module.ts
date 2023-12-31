import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '@auth0/auth0-angular'
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { HomeComponent } from './components/home/home.component';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { EditTaskComponentComponent } from './components/edit-task-component/edit-task-component.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ColloboratorsViewComponent } from './components/colloborators-view/colloborators-view.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'workspace', //all the worspaces related to user
    component:WorkspaceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'workspace/:id', //single workspace 
    component:WorkspaceCardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'workspace/:workSpaceId/:id', //get single task for update
    component: EditTaskComponentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:':id/colloborators',
    component:ColloboratorsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
