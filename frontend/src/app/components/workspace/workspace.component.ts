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
  public workspaces: WorkSpace[] = []

  constructor(private workspaceServie:WorkspaceServiceService, private router:Router){}

  ngOnInit(): void {
    this.workspaceServie.getAllWorkSpacesByEmail('ravindu@gmail.com')
    .subscribe({
      next:(workspaces) => {
        this.workspaces = workspaces;
      }
    })
  }

  deleteWorkSpace(id:string){
    this.workspaceServie.deleteWorkSpace(id)
      .subscribe({
        next:(data) => {
          location.reload()
        }
      })
  }

  showWorkSpace(id:string){
    this.router.navigate(['workspace/' + id])
  }

}
