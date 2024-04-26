import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(this.baseUrl)
  }
  getById(id: any){
    return this.http.get(this.baseUrl +`/${id}`)
  }
  modified(id:any, data: any){
    return this.http.put(this.baseUrl +`/${id}`, data)

  }
}
