import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  GoHomelicked() {
    console.log("Going back to home");
    this.router.navigate(['oic/home'],{ queryParams: { source: this.router.url }, queryParamsHandling: "merge" });
  }


}
