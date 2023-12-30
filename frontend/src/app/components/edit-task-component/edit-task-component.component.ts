import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task-component',
  templateUrl: './edit-task-component.component.html',
  styleUrls: ['./edit-task-component.component.css']
})
export class EditTaskComponentComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goback(){
    this.router.navigate(['workspace/:id' ]) //id has to be replaced when fetched the data
  }
}
