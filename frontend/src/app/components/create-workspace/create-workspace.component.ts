import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    dateCreated:new Date()
  }

  constructor(private workSpaceService:WorkspaceServiceService, private router:Router){}

  ngOnInit(): void {
    this.newWorkSpace.user = 'ravindu@gmail.com'
    this.newWorkSpace.dateCreated = new Date();
  }

  addWorkSpace(){
    this.workSpaceService.createWorkSpace(this.newWorkSpace)
      .subscribe({
        next:(data) => {
          location.reload()
        }
      })
  }

}
