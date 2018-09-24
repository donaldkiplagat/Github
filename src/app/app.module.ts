import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TimeAgoPipe } from './time-ago.pipe';
import {CollapseDirective} from './collapse.directive';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalComponent } from './personal/personal.component';

export {CollapseDirective} from './collapse.directive';

//Deifining Routes
const routes: Routes=[
  {path:"home",component:AppComponent},
  {path:"user",component:UserComponent},
  {path:"repositories",component:RepositoriesComponent},
  {path:"",redirectTo:"user",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
  // {path:"user",component:UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe,
    RepositoriesComponent,
    UserComponent,
    NotFoundComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
