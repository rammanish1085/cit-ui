import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { SettingComponent } from './setting/setting.component'
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HomeComponent } from '../oic/home/home.component';

const routes: Routes = [
  {
    path: '', component: SettingComponent, canActivate: [AuthGuard],
    children: [


      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'change-password',
        component: ChangepasswordComponent
      },
      {
        path: 'update-profile',
        component: ChangepasswordComponent
      },
      { path: 'home', 
      component: HomeComponent
   }



    ]
  }

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
