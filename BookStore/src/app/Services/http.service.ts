import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  serverGetRequest(url:string,reqBody:any):Promise<any> {
    return new Promise((res,rej) => {
      this.http.get<any>(`api/${url}`,{params : reqBody}).subscribe(response =>{
        res(response);
      });
    });
  }

  serverPostRequest(url:string,reqBody:any) {
    return this.http.post<any>(`api/${url}`,{params : reqBody}).subscribe(response =>{
      return response.data;
    }).unsubscribe();
  }
}
