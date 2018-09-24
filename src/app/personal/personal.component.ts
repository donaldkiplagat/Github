import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Http} from '@angular/http';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  link = "https://api.github.com/users/";

  access_token= environment.access_token;
  user=[];
  repos= [];

  personal= "donaldkiplagat"


  constructor(private http: Http) { }

  ngOnInit() {
    let wholelink = this.link + this.personal + this.access_token;
    let wholelink2 = this.link + this.personal +"/repos"+this.access_token;
    this.http.get(wholelink).subscribe((res:Response)=>{
      this.user = res.json();
      console.log(this.user);
    })
    this.http.get(wholelink2).subscribe((res2:Response)=>{
      this.repos = res2.json();
      console.log(this.repos);
    })
  }

}
