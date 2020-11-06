import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedInUser: User;

  constructor(private authorizationService: AuthorizationService,private router: Router) { }

 

  ngOnInit() {
    console.log("Initialising Navbar");
    this.loggedInUser = this.authorizationService.getLoggedInUser();
    console.log(this.loggedInUser);
  }

  logoutClicked() {
    console.log("logout clicked from ngb-navbar");
    localStorage.clear();
    this.authorizationService.logout();
  }

  BackClicked(){
    console.log("backtohome clicked from ngb-navbar");
    this.router.navigate(['oic/home'],{ queryParams: { source: this.router.url }, queryParamsHandling: "merge" });
    //

  }


}
