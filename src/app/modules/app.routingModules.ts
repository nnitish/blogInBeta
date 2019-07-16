import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { PostListComponent } from '../components/post-list/post-list.component';
import { PostDetailsComponent } from '../components/post-details/post-details.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', children: [
        { path: '', component: UsersListComponent },
        { path: ':userId', children: [
            { path: '', component: PostListComponent },
            { path: ':postId', component: PostDetailsComponent },
        ] },
    ] },
    { path: '**', component: PageNotFoundComponent }          // Wild card path
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
  })
export class AppRoutesModule {}
