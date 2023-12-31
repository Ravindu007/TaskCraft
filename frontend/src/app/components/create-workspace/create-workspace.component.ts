import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { WorkSpace } from 'src/app/interfaces/workspace';
import { WorkspaceServiceService } from 'src/app/services/workspace-service.service';

@Component({
  selector: 'app-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrls: ['./create-workspace.component.css']
})
export class CreateWorkspaceComponent implements OnInit{

  //form data
  newWorkSpace: WorkSpace = {
    id:'',
    name:'',
    user:'',
    dateCreated: '',
  }

  user:any = {}

  constructor(private workSpaceService:WorkspaceServiceService, private router:Router, private auth:AuthService){}

  ngOnInit(): void {
    this.auth.user$
    .subscribe({
      next:(profile) => {
        this.user = profile
        this.newWorkSpace.user = this.user.email
      }
    })   
  }

  addWorkSpace(){    
    console.log(this.newWorkSpace);
    
    this.workSpaceService.createWorkSpace(this.newWorkSpace)
      .subscribe({
        next:(data) => {          
          location.reload()
        }
      })
  }

}
