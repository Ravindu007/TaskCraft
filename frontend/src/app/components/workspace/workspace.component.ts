import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkSpace } from 'src/app/interfaces/workspace';
import { WorkspaceServiceService } from 'src/app/services/workspace-service.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  //store variable 
  public workspaces: WorkSpace[] = [
    {
      id:'1',
      name:'urgent',
      user:'ravindu',
      dateCreated:new Date()
    },
    {
      id:'2',
      name:'urgent',
      user:'ravindu',
      dateCreated:new Date()
    },
    {
      id:'3',
      name:'urgent',
      user:'ravindu',
      dateCreated:new Date()
    },
    {
      id:'3',
      name:'urgent',
      user:'ravindu',
      dateCreated:new Date()
    }
  ]

  constructor(private workspaceServie:WorkspaceServiceService, private router:Router){}

  ngOnInit(): void {
    this.workspaceServie.getAllWorkSpaces()
    .subscribe({
      next:(workspaces) => {
        this.workspaces = workspaces;
      }
    })
  }

  showWorkSpace(id:string){
    this.router.navigate(['workspace/' + id])
  }

}
