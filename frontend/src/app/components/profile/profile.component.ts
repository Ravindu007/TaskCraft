import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  public profileJson : string = '';

  constructor(public auth:AuthService){}



  ngOnInit(): void {
    //getting user
    this.auth.user$
      .subscribe({
        next:(profile) => {
          this.profileJson = JSON.stringify(profile,null,2)
        }
      })
  }

}
