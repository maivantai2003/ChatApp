import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private htpp:HttpClient) { }
  get(url:string):Observable<any>{
    return this.htpp.get(url)
  }
}
