import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersList: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllUsersList();
  }

  private getAllUsersList(): void {
    const callingAPI = 'users';

    this._httpService.getAPIcall(callingAPI).subscribe( res => {
      this.usersList = res;
    });
  }


  public showPost(userId: number): void {
    this._router.navigate([userId], {relativeTo: this._activatedRoute});    // Relative path
  }

}
