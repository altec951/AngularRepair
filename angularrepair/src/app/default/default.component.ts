import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  token: any;
  hasToken: boolean = false;
  public options = {
    position: ["top", "left"],
    timeOut: 0,
    lastOnBottom: true,
  };


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public _flashMessage: FlashMessagesService,
    private _service: NotificationsService
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    if (this.token) {
      sessionStorage.setItem('token', this.token);
      this.router.navigate(['/']);
      //   if (this.token.toString() == "relogin"){
      // //     this._flashMessage.show("NTUB account only",
      // // { cssClass: 'alert-success', timeout: 3000 });
      //     this.router.navigate(['']);
      //   }
    }
    if (sessionStorage.getItem('token')) {
      this.hasToken = true;
      if (sessionStorage.getItem('token') == "relogin") {
        sessionStorage.clear();
        // this._service.success(
        //   'Some Title',
        //   'Some Content',
        //   {
        //     timeOut: 5000,
        //     showProgressBar: true,
        //     pauseOnHover: false,
        //     clickToClose: false,
        //     maxLength: 10
        //   }
        // )
      }

    } else {
      this.hasToken = false;
    }
    // this.relogin = this.route.snapshot.params['relogin'];
    // if (this.relogin){
    //   this.relogin();
    // }
  }

  login() {
    window.location.href = "http://localhost:2422/register.html"
    window.event.returnValue = false;
  }

  logout() {
    sessionStorage.clear();
    window.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:4200/";
  }

  relogin() {
    if (sessionStorage.getItem('token') == "relogin") {
      sessionStorage.clear();
      this._service.success(
        'Some Title',
        'Some Content',
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
        }
      )
    }
  }
}