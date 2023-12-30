import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { HomeComponent } from './components/home/home.component';
import { CreateWorkspaceComponent } from './components/create-workspace/create-workspace.component';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { EditTaskComponentComponent } from './components/edit-task-component/edit-task-component.component';
import { CreateTaskComponentComponent } from './components/create-task-component/create-task-component.component';
import { ProfileComponent } from './components/profile/profile.component'

//modules
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {AuthModule} from '@auth0/auth0-angular'


//services
import { WorkspaceServiceService } from './services/workspace-service.service';
import { TodoServicesService } from './services/todo-services.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

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
    ProfileComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain:'dev-w6a5r3d3bzt1m8yl.us.auth0.com',
      clientId:'8633hKwJQ2PWzv6wZSinefUoDK83ilHD',
      authorizationParams:{
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [WorkspaceServiceService, TodoServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
