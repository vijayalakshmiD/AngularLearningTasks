import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  ids;
  idsview : any;
  constructor(private _Activatedroute:ActivatedRoute, private http : HttpClient, private _router: Router) { }

  ngOnInit() {
    // snapshot
    this.ids = this._Activatedroute.snapshot.params['id'];
    console.log(this.ids); 
    //observable
/*     this._Activatedroute.params.subscribe( param => {
      this.ids =  param['id'];
    }) */
/*     this.http.get("https://jsonplaceholder.typicode.com/posts/"+this.ids).map( response => response).subscribe( results => {
      this.idsview= results;
      console.log("here",this.idsview);
    })
 */
this.http.get("https://jsonplaceholder.typicode.com/posts/"+this.ids).map( response => response).subscribe( results => {
      this.idsview= results;
      console.log("here",this.idsview);
    })
  }
  onBack() {
    this._router.navigate(['redit'])
  }
}
