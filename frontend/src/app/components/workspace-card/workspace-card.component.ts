import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TodoServicesService } from 'src/app/services/todo-services.service';

@Component({
  selector: 'app-workspace-card',
  templateUrl: './workspace-card.component.html',
  styleUrls: ['./workspace-card.component.css']
})
export class WorkspaceCardComponent implements OnInit{

  public tasks : Task[] = []

  constructor(private todoService:TodoServicesService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.todoService.getAllTodosRelatedToSingleWorkSpace(this.route.snapshot.params['id'])
    .subscribe({
      next:(data) => {
        this.tasks = data
      }
    })
  }

  viewTack(id:string, workSpaceId:string){
    this.router.navigate([ "workspace/" + workSpaceId + "/" + id])
  }

}
