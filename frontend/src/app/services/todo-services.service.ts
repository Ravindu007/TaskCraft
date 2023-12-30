import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  _baseUrl : string = 'https://localhost:7065'

  constructor(private http:HttpClient) { }


  //get all todos realted to a work space 
  getAllTodosRelatedToSingleWorkSpace(workSpaceId:string):Observable<Task[]>{
    return this.http.get<Task[]>(this._baseUrl + `/api/Todo?workSpaceId=${workSpaceId}`)
  }
}
