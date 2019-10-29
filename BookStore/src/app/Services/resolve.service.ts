import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PreFetchService } from "src/app/Services/pre-fetch-service";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Observable<any>> {


  constructor(
    private preFetch: PreFetchService
  ) { }

  resolve() {
    return this.preFetch.preFetchData()
    
  }
}
