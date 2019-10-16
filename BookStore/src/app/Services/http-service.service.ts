import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  doRequest(method: string,url : string,reqBody : any) : Promise<any> {
    return new Promise((res,rej)=>{
      if (method === "GET") {
        this.http
        .get<any>(url,
        {
          params : reqBody
        })
        .toPromise()
        .then(result=>{
          res(result.data);
        })
        .catch( e=>{
          rej(e);
        })
      } else if (method === "POST") {
  
      }
    })
  }
}
