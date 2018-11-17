import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RedditService {
  products : any;
  jsons = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }
  getJson(){
    return  this.httpClient.get(this.jsons);
  }
}
