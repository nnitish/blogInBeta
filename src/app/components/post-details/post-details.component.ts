import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  private userId: number;
  private postId: number;

  public postDetails: any = {};
  public isShowComment: boolean = false;
  public commentsList: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,

  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(param => {
      this.userId = +param['params'].userId;    // Typecasting
      this.postId = +param['params'].postId;    // Typecasting

      this.getPostDetails(this.postId);
    });
  }

  private getPostDetails(postId: number): void {
    const callingAPI = `posts/${postId}`;

    this._httpService.getAPIcall(callingAPI).subscribe( res => {
      this.postDetails = res;
    });
  }


  public showComments(): void {
    const callingAPI = `posts/${this.postId}/comments`;

    this._httpService.getAPIcall(callingAPI).subscribe( res => {
      this.commentsList = res;
      this.isShowComment = true;
    });
  }

  public deletePost(): void {
    const callingAPI = `posts/${this.postId}`;

    this._httpService.deleteAPIcall(callingAPI).subscribe( res => {
      this._router.navigate(['users', this.userId]);
    });
  }

}
