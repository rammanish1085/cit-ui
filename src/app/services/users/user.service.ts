import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GlobalConfiguration } from 'src/app/config/global.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  contextPath:any; 
  constructor(private http :HttpClient,private globalConfiguration:GlobalConfiguration) {
    this.contextPath=this.globalConfiguration.getBackendURLPrefix();
   }



  getProject():any{
    console.log("inside getProject Service")
     return this.http.get(this.contextPath+'/hello',{observe:'response'});
  }

  
}
