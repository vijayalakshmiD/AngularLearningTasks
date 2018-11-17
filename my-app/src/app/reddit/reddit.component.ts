import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Pipe, PipeTransform} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {
  result;
  constructor( private redit : RedditService,
     private httpclient : HttpClient) { }
  
    ngOnInit() {
     this.redit.getJson().map( res  => res)
    .subscribe( res => {
      this.result = res;
    console.log(this.result);
    });

/*      return this.redit.getJson().pipe(
        map((response) => console.log(response)));
    }; */
      /*  
      this.result = this.redit.getJson();
      console.log('testiu',this.result); */
 
   
  }

  }


