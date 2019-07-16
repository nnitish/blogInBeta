import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  private userId: number;
  public postsList: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,

  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(param => {
      this.userId = +param['params'].userId;    // Typecasting

      this.getPosts(this.userId);
    });
  }

  private getPosts(userId: number): void {
    const callingAPI = `posts?userId=${userId}&skip=0&limit=10`;

    this._httpService.getAPIcall(callingAPI).subscribe( res => {
      this.postsList = res;
    });
  }


  public showDetailPost(postId: number): void {
    this._router.navigate([postId], {relativeTo: this._activatedRoute});    // Relative path
  }

}
