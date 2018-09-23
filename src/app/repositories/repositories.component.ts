import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response, Http} from '@angular/http';
import {Router} from '@angular/router';
import {Search} from '../search-class/search';
import {RepoSearch} from '../search-repo/repo-search';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  reposArray:any;


  link = "https://api.github.com/users/";
  link2 = "https://api.github.com/search/";



  access_token= "?access_token=c5394af54d25f5229f088d2b74afca2fc3b017b6";
  access_token2= "?access_token=c5394af54d25f5229f088d2b74afca2fc3b017b6&q=";

  search: Search;
  searchArray:any;
  private submitSearch:Function;
  newSearch = new RepoSearch(name);



  constructor(private http:Http) { }

searchRepos(searchrepo:HTMLInputElement){
  let wholelink2 = this.link2 + "repositories"+ this.access_token2 + searchrepo.value;
     this.http.get(wholelink2).subscribe((res3:Response) =>{
      // this.search = new Search(res3.json().items);
      this.searchArray = res3.json().items;
      console.log(res3.json().items);
    })

}

  ngOnInit() {
  }

}
