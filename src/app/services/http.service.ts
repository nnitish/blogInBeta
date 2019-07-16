import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

    private BASE_URL = 'https://jsonplaceholder.typicode.com/';

    constructor(
        private _httpClient: HttpClient
    ) {}

    public getAPIcall(url: string): Observable<any> {
        return this._httpClient.get(this.BASE_URL + url);     // http GET calling
    }

    public deleteAPIcall(url: string): Observable<any> {
        return this._httpClient.delete(this.BASE_URL + url);   // http DELETE calling
    }
}
