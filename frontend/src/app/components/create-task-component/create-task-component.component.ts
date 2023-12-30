import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TodoServicesService } from 'src/app/services/todo-services.service';

@Component({
  selector: 'app-create-task-component',
  templateUrl: './create-task-component.component.html',
  styleUrls: ['./create-task-component.component.css']
})
export class CreateTaskComponentComponent implements OnInit {

  newTask: Task = {
    id:'',
    workSpaceId: '',
    name:'',
    user:'',
    status:''
  }

  constructor(private taskService:TodoServicesService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.newTask.user ='ravindu@gmail.com'
    this.newTask.workSpaceId = this.route.snapshot.params['id']
  }

  addTask(){
    this.taskService.createSingleTodo(this.newTask)
      .subscribe({
        next:(data) => {
          location.reload();
        }
      })
  }

}
