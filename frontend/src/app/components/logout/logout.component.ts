import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import{DOCUMENT} from '@angular/common'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(
    public auth:AuthService,
    @Inject(DOCUMENT) public document:Document
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(){
    this.auth.logout({
      logoutParams:{
        returnTo: this.document.location.origin
      }
    })
  }

}
