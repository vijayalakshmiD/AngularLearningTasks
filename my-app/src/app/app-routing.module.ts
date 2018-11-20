import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'redit', component : RedditComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path:  'redit/:id', component: ProductdetailComponent },
  { path : 'parent', component : ParentComponent },
  { path : 'child', component : ChildComponent },
  { path : 'news', component : NewsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
