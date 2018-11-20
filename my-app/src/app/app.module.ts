import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { RedditService } from './reddit.service';
import { NewsService } from './news/news.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs";
import { map,filter } from "rxjs/operators";
import {Component, Pipe, PipeTransform} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FilterPipe } from './filter.pipe';
import { ParentlocalComponent } from './parentlocal/parentlocal.component';
import { ChildlocalComponent } from './childlocal/childlocal.component';
import { NewsComponent } from './news/news.component';
import { TimeAgoPipe } from 'time-ago-pipe';



@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductdetailComponent,
    ParentComponent,
    ChildComponent,
    FilterPipe,
    ParentlocalComponent,
    ChildlocalComponent,
    NewsComponent,
    TimeAgoPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DeferLoadModule
  ],
  providers: [RedditService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
