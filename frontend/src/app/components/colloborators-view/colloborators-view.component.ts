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
    colloborator1:'',
    colloborator2:'',
    colloborator3:''
  }

  constructor(private service:WorkspaceServiceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.service.getSingleWorkSpaceByID(this.route.snapshot.params['id']) 
      .subscribe({
        next:(data) => {
          this.existingWorkSpace  = data;
          this.existingWorkSpace.colloborator1 = data.colloborator1          
          this.existingWorkSpace.colloborator2 = data.colloborator2          
          this.existingWorkSpace.colloborator3 = data.colloborator3          
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
