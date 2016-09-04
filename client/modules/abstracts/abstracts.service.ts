import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Abstract } from './abstract';

@Injectable()

export class AbstractsService {
    private url = 'http://localhost:3000/abstracts/';
    abstracts: Abstract[] = [];


    constructor(private _http: Http) { }


    addAbstract(abstract: Abstract) {
        const body = JSON.stringify(abstract);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url, body, { headers: headers })
            .map(response => {
                const data= response.json().obj;
                console.log('responce data',data);
                let abstract = new Abstract(data.author, data.title, data.content, data.section, data._id); 
                return abstract;
            })
            .catch(error => Observable.throw(error.json()));
    }
    getAbstracts(): Observable<Abstract[]> {
        return this._http.get(this.url)
            .map(res => {                
                const data = res.json().obj; 
                let abstracts: any = [];                
                for (let i=0; i < data.length; i++){
                    let abstract = new Abstract(data[i].author, data[i].title, data[i].content, data[i].section, data[i]._id, '', data[i].creacedAt);                    
                    abstracts.push(abstract);
                }                
                console.log(abstracts);
                return abstracts; 
            })
            .catch(error => Observable.throw(error.json()));
    }

    editAbstract(abstract: Abstract) {
        console.log(abstract);
    }

    deleteAbstract(abstract: Abstract):Observable<Abstract>  {
        console.log(this.abstracts);
        this.abstracts.splice(this.abstracts.indexOf(abstract), 1);
        
        console.log('Deleting abstract', abstract);
        return this._http.delete(this.url + abstract.abstractId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}
