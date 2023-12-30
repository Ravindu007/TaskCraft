import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { WorkSpace } from '../interfaces/workspace';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceServiceService {

  _baseUrl : string = 'backendURL'

  constructor(private http:HttpClient) { }


  //get all workspaces
  getAllWorkSpaces(): Observable<WorkSpace[]>{
    return this.http.get<WorkSpace[]>(this._baseUrl + "/api/workspace");
  }
}
