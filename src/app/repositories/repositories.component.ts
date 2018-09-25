import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Http} from '@angular/http';
import {Router} from '@angular/router';
import {Search} from '../search-class/search';
import {RepoSearch} from '../search-repo/repo-search';
import {FormsModule} from '@angular/forms';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  reposArray:any;


  link = environment.link;
  link2 = environment.link2;



  access_token= environment.access_token;
  access_token2= environment.access_token2;


  search: any;
  searchArray:any;
  private submitSearch:Function;



  constructor(private http:Http) { }

searchRepos(searchrepo:HTMLInputElement){
  let wholelink2 = this.link2 + "repositories"+ this.access_token2 + searchrepo.value;
     this.http.get(wholelink2).subscribe((res3:Response) =>{
      // this.search = new Search(res3.json().items);
      this.searchArray = res3.json().items;
      console.log(res3.json());
    })

}

  ngOnInit() {
  }

}
