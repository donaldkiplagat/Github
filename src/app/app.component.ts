import { Component, } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Http} from '@angular/http';
import {Router} from '@angular/router';
import {Search} from './search-class/search';
import {RepoSearch} from './search-repo/repo-search';
import {FormsModule} from '@angular/forms';
import { environment } from './../environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  reposArray:any;


  link =environment.link;


  access_token= environment.access_token;
  user=[];
  repos= [];

  public isCollapsed = false;

  constructor(private http:Http){}
  searchGithub(search: HTMLInputElement){
    let wholelink = this.link + search.value + this.access_token;
    let wholelink2 = this.link + search.value +"/repos"+this.access_token;
    this.http.get(wholelink).subscribe((res:Response)=>{
      this.user = res.json();
      console.log(this.user);
    })
    this.http.get(wholelink2).subscribe((res2:Response)=>{
      this.repos = res2.json();
      console.log(this.repos);
    })

  }


  ngOninit(){

  }
}
