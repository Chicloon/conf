import { Component, OnInit } from "@angular/core";

import { Abstract } from './abstract';
import { AbstractsService } from './abstracts.service';

@Component({
    selector: "my-abstracts-list",
    templateUrl: `client/modules/abstracts/abstracts-list.html`
})

export class AbstractsListComponent implements OnInit {

 constructor(private _abstracts: AbstractsService) { }

    abstracts: Abstract[];

    ngOnInit() {
        this.getAbstracts(); 
    }

    getAbstracts() {
        this._abstracts.getAbstracts()
            .subscribe(
            abstract => {
                console.log(abstract);
                this.abstracts = abstract;
            });
    }

}