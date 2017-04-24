import { Component, OnInit } from '@angular/core';
import { AF } from "./providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  currentRoute: string;
  title = 'StartPup';
  showSignup: boolean = false;
  showLogin: boolean = false;
  public isLoggedIn: boolean;
  public currentUser;

  constructor(public afService: AF, private router: Router) {
  }


  ngOnInit() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
  }

}
