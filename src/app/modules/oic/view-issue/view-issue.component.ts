import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { IssueMasterService } from 'src/app/services/project/issue-master.service';


@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {


  loggedInUser: User;
  username: string;
  locationCode: string;
  assignedProblemStatement: Array<any>;
  viewToggle:boolean ;
  Selectedrow:any={};

  tokenNumber:any;

  //VARIABLES FOR PAGINATION
  total_issues: number;
  page : number = 1;

  constructor(private issueMasterService: IssueMasterService, 
    private authorizationService: AuthorizationService) { 
      this.assignedProblemStatement = new Array<any>()
    }

  ngOnInit(): void {

    this.loggedInUser = this.authorizationService.getLoggedInUser();
    this.username = this.loggedInUser.getUsername();
    this.locationCode = this.loggedInUser.getLocationCode();

    this.getAllAssignedProblemStatement(this.username, this.locationCode);
  }

  getAllAssignedProblemStatement(username: any, locationCode: any) {

    this.issueMasterService.getAllAssignedProblem(username,locationCode).subscribe(success=>{
    
      console.log("Getting Assign problem");

      console.log(success.body);

      this.assignedProblemStatement = success.body;

      this.total_issues = this.assignedProblemStatement.length;

      console.log("this.total_issues"+this.total_issues);


    },error=>{

    })

  }

  onclickShowIssueDetails(selectedrow)
  {
    this.Selectedrow= selectedrow;
    console.log(selectedrow.tokenNumber);
    this.viewToggle=true;

    // window.open();


  }

  BacktovViewissueWindow()
  {
    this.viewToggle=false;

  }

  //Method to search by token number
  search()
  {
    if(this.tokenNumber=="")
    {this.ngOnInit();}
    else{
      this.assignedProblemStatement = this.assignedProblemStatement.filter(res =>{
        return res.tokenNumber.toLocaleLowerCase().match(this.tokenNumber.toLocaleLowerCase())
      })
    }

  }


  key:string ;
  reverse:boolean=false;
  sort(key:string)
  {
    this.key = this.tokenNumber;
    console.log("key for search:"+key);
    this.reverse = !this.reverse;
  }
}
