import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
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
  


  user : any = {}

  constructor(private workspaceServie:WorkspaceServiceService, private router:Router, public auth:AuthService){}

  ngOnInit(): void {

    this.auth.user$
    .subscribe({
      next:(profile) => {
        this.user = profile

        // fetch data if a user
        this.workspaceServie.getAllWorkSpacesByEmail(this.user.email)
        .subscribe({
          next:(workspaces) => {            
            this.workspaces = workspaces;
          }
        })

        //fectch data if a colloborator
        this.workspaceServie.getAllWorkSpacesByColloboratorEmail(this.user.email)
        .subscribe({
          next:(workspaces) => {            
            this.workspaces = [...this.workspaces, ...workspaces];
          }
        })


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
