import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsdatas: any;
  results: any;
  newsnames: string;
  name: string;
  datas : any;
  responses : any;
  article  :  any;
  title :any;
  mydate : any;
  constructor(private _newsservice: NewsService, private https:HttpClient) { }

  ngOnInit() {
    /*     this._newsservice.getNews().subscribe( news_data => {
          this.newsdatas = news_data;
           this.newsdatas.forEach(element => {
            console.log(element);
          });
          this.newsnames = this.newsdatas.articles;
          console.log(this.newsnames);
        }
          ); */
          
    this._newsservice.getNewsData().subscribe(data => {
      this.datas = data;
      this.responses = this.datas.articles;
    });
    this._newsservice.getNews().subscribe(news_data => {
      this.newsdatas = news_data;
      this.newsnames = this.newsdatas.sources;
    });
    
}
getids (name) {
  this.https.get("https://newsapi.org/v2/top-headlines?sources="+name.id+"&apiKey=c4bd81519a8f420683297c40ba880a76").subscribe(element => {
    this.datas = element;
    this.responses = this.datas.articles;

  })

}
}
