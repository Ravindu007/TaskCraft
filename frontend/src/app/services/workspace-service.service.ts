import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { WorkSpace } from '../interfaces/workspace';

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
}
