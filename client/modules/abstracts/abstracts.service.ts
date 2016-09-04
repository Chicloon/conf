import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Abstract } from './abstract';

@Injectable()

export class AbstractsService {
    // private abstracts;
    private url = 'http://localhost:3000/abstracts';
    

    constructor(private _http: Http) { }

    getAbstracts(): Observable<Abstract[]> {
        return this._http.get(this.url)
            .map(res => {
                console.log (res.json());
                console.log(res.json().obj);
                return res.json().obj;

            })
            .catch(error => Observable.throw(error.json()));
    }

    editAbstract(abstract: Abstract) {
        console.log(abstract);
    }

    deleteAbstract (abstract: Abstract) {
        console.log(abstract);
    }
}
