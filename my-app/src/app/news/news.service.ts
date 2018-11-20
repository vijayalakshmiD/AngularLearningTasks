import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private https: HttpClient) {  }
   getNewsData () {
    return this.https.get("https://newsapi.org/v2/top-headlines?sources=TechCrunch&apiKey=c4bd81519a8f420683297c40ba880a76");
  } 
  getNews () {
    return this.https.get("https://newsapi.org/v2/sources?language=en&apiKey=c4bd81519a8f420683297c40ba880a76");
  }
}
