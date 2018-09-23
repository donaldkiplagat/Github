import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Http} from '@angular/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  link = "https://api.github.com/users/";

  access_token= "?access_token=c5394af54d25f5229f088d2b74afca2fc3b017b6";
  user=[];
  repos= [];


  constructor(private http:Http) { }
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

  ngOnInit() {
  }

}
