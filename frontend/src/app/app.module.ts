import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { HomeComponent } from './components/home/home.component';

//modules
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { CreateWorkspaceComponent } from './components/create-workspace/create-workspace.component';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { EditTaskComponentComponent } from './components/edit-task-component/edit-task-component.component';
import { CreateTaskComponentComponent } from './components/create-task-component/create-task-component.component';
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkspaceComponent,
    HomeComponent,
    CreateWorkspaceComponent,
    WorkspaceCardComponent,
    EditTaskComponentComponent,
    CreateTaskComponentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
