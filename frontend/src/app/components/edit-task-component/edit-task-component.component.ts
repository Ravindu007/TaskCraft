import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TodoServicesService } from 'src/app/services/todo-services.service';

@Component({
  selector: 'app-edit-task-component',
  templateUrl: './edit-task-component.component.html',
  styleUrls: ['./edit-task-component.component.css']
})
export class EditTaskComponentComponent implements OnInit{

  exitingTask : Task =  {
    id:'',
    workSpaceId: '',
    name:'',
    user:'',
    status:'',
    description:'',
    date:''
  }

  constructor(private router:Router, private taskService:TodoServicesService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.taskService.getSingleTodoById(this.route.snapshot.params['id'])
    .subscribe({
      next:(data) => {
        this.exitingTask = data        
        this.exitingTask.date = this.exitingTask.date.slice(0,10);  
      }
    })
  }


  updateTask(){
    this.taskService.updateSingleTodo(this.exitingTask.id, this.exitingTask)
    .subscribe({
      next:(data) => {
        this.router.navigate(['workspace/' , this.exitingTask.workSpaceId ])
      }
    })
  }

  goback(){
    this.router.navigate(['workspace/' + this.exitingTask.workSpaceId ])
  }
}
