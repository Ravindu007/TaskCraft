import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-workspace-card',
  templateUrl: './workspace-card.component.html',
  styleUrls: ['./workspace-card.component.css']
})
export class WorkspaceCardComponent implements OnInit{

  public tasks : Task[] = [
    {
      id:'1',
      workspaceId: '1',
      name:'todo',
      user:'ravindu',
      status:'todo'
    },
    {
      id:'2',
      workspaceId: '1',
      name:'doing',
      user:'ravindu',
      status:'doing'
    },
    {
      id:'3',
      workspaceId: '2',
      name:'done',
      user:'ravindu',
      status:'done'
    },
    {
      id:'4',
      workspaceId: '3',
      name:'done',
      user:'ravindu',
      status:'done'
    },
    {
      id:'5',
      workspaceId: '2',
      name:'done',
      user:'ravindu',
      status:'done'
    },
    {
      id:'5',
      workspaceId: '1',
      name:'done',
      user:'ravindu',
      status:'done'
    },
    {
      id:'5',
      workspaceId: '2',
      name:'todo',
      user:'ravindu',
      status:'toto'
    },
  ]

  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  viewTack(id:string, workspaceId:string){
    this.router.navigate([ "workspace/" + workspaceId + "/" + id])
  }

}
