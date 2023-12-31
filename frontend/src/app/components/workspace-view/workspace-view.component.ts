import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkSpace } from 'src/app/interfaces/workspace';
import { WorkspaceServiceService } from 'src/app/services/workspace-service.service';

@Component({
  selector: 'app-workspace-view',
  templateUrl: './workspace-view.component.html',
  styleUrls: ['./workspace-view.component.css']
})
export class WorkspaceViewComponent implements OnInit{

  //store variable
  workSpace: WorkSpace = {
    id:'',
    name:'',
    dateCreated:'',
    user:''
  }; 

  constructor(private workspaceService: WorkspaceServiceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.workspaceService.getSingleWorkSpaceByID(this.route.snapshot.params['id'])
      .subscribe({
        next:(data) => {
          this.workSpace = data
        }
      })
  }

}
