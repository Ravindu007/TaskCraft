import { Component, OnInit } from '@angular/core';
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
      user:'ravindu',
      dateCreated:new Date()
    },
    {
      id:'2',
      user:'ravindu',
      dateCreated:new Date()
    },
    {
      id:'3',
      user:'ravindu',
      dateCreated:new Date()
    },
    {
      id:'3',
      user:'ravindu',
      dateCreated:new Date()
    }
  ]

  constructor(private workspaceServie:WorkspaceServiceService){}

  ngOnInit(): void {
    this.workspaceServie.getAllWorkSpaces()
    .subscribe({
      next:(workspaces) => {
        this.workspaces = workspaces;
      }
    })
  }

}
