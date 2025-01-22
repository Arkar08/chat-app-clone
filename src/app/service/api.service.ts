import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const api = environment.api_Url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  postData(url:string,data:any):Observable<any>{
    const dataUrl = api + url
    return this.http.post<any>(dataUrl,data)
  }

  getData(url:string):Observable<any>{
    const dataUrl = api + url;
    return this.http.get<any>(dataUrl)
  }

  nameSelect = {
    data:{},
    get: function() {return this.data},
    set: function(secData:any){
      this.data = secData
      return this.data
    }
    
  }
}
