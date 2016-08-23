import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Abstract } from './abstract';

@Injectable()

export class AbstractsService {
    private abstracts;
    private url = 'https://jsonplaceholder.typicode.com/posts';
    

    constructor(private _http: Http) { }

    getAbstracts(): Observable<Abstract[]> {
        return this._http.get(this.url)
            .map(res => res.json());
    }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
