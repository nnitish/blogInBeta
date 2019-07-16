import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpService } from './services/http.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutesModule } from './modules/app.routingModules';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UsersListComponent,
    PostDetailsComponent,
    PageNotFoundComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule
  ],

  providers: [
    HttpService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
