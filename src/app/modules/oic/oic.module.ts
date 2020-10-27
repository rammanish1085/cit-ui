import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OicRoutingModule } from './oic-routing.module';
import { OicComponent } from './oic.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewIssueComponent } from './view-issue/view-issue.component';
import { TrackIssueComponent } from './track-issue/track-issue.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pipe, PipeTransform } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';






@NgModule({
  declarations: [OicComponent,NavbarComponent,SidebarComponent, AddUserComponent,FooterComponent, AddIssueComponent, HomeComponent,DashboardComponent, ViewIssueComponent, TrackIssueComponent],
  imports: [
    CommonModule,
    OicRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ]
})
export class OicModule { }
