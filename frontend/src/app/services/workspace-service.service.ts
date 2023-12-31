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


  //get all workspaces by email (user)
  getAllWorkSpacesByEmail(email:string): Observable<WorkSpace[]>{
    return this.http.get<WorkSpace[]>(this._baseUrl + `/api/workspace/GetByEmail?email=${email}`);
  }

  //get all workspaces by colloboratorEmail 
  getAllWorkSpacesByColloboratorEmail(email:string): Observable<WorkSpace[]>{
    return this.http.get<WorkSpace[]>(this._baseUrl + `/api/workspace/GetByCollaboratorEmail?CollaboratorEmail=${email}`);
  }

  //add a single coloborator by updating workspace
  updateSingleWorkSpaceWithSingleColloborator(id:string, updatedWorkSpace:WorkSpace) : Observable<WorkSpace>{
    return this.http.put<WorkSpace>(this._baseUrl + '/api/WorkSpace/' + id, updatedWorkSpace)
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
