import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { WorkSpace } from '../interfaces/workspace';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class WorkspaceServiceService {

  _baseUrl : string = 'https://localhost:7065'

  constructor(private http:HttpClient) { }


  //get all workspaces by email
  getAllWorkSpacesByEmail(email:string): Observable<WorkSpace[]>{
    return this.http.get<WorkSpace[]>(this._baseUrl + `/api/workspace?email=${email}`);
  }


  //getDetailsAbout Single workspace 
  getSingleWorkSpaceByID(id:string):Observable<WorkSpace>{
    return this.http.get<WorkSpace>(this._baseUrl + '/api/workspace/' + id)
  }

  //create workspace
  createWorkSpace(newWorkSpace:WorkSpace):Observable<WorkSpace>{
    newWorkSpace.id = uuidv4();
    return this.http.post<WorkSpace>(this._baseUrl + "/api/WorkSpace", newWorkSpace)
  }

  //deleting a workspace 
  deleteWorkSpace(id:string):Observable<WorkSpace>{
    return this.http.delete<WorkSpace>(this._baseUrl + '/api/WorkSpace/' + id)
  }
}
