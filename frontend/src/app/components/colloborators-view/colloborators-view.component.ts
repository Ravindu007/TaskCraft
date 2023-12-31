import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkSpace } from 'src/app/interfaces/workspace';
import { WorkspaceServiceService } from 'src/app/services/workspace-service.service';

@Component({
  selector: 'app-colloborators-view',
  templateUrl: './colloborators-view.component.html',
  styleUrls: ['./colloborators-view.component.css']
})
export class ColloboratorsViewComponent implements OnInit {


  existingWorkSpace: WorkSpace = {
    id:'',
    name:'',
    user:'',
    dateCreated:'',
    colloborator:''
  }

  constructor(private service:WorkspaceServiceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.service.getSingleWorkSpaceByID(this.route.snapshot.params['id']) 
      .subscribe({
        next:(data) => {
          this.existingWorkSpace  = data;
          this.existingWorkSpace.colloborator = data.colloborator          
        }
      })
    
  }

  updateWorkSpace(){
    this.service.updateSingleWorkSpaceWithSingleColloborator(this.route.snapshot.params['id'], this.existingWorkSpace)
      .subscribe({
        next:(data) => {
          location.reload()
        }
      })
  }




}
