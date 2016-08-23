import { Component, OnInit } from "@angular/core";

import { Abstract } from './abstract';
import { AbstractsService } from './abstracts.service';

@Component({
    selector: "my-abstracts-component",
    templateUrl: `client/modules/abstracts/abstracts.component.html`
})
export class AbstractsComponent implements OnInit {
    constructor(private _AbstractsService: AbstractsService) { }

    abstracts: Abstract[];

    ngOnInit() {
        this.getAbstracts(); 
    }

    getAbstracts() {
        this._AbstractsService.getAbstracts()
            .subscribe(
            abstract => {
                console.log(abstract);
                this.abstracts = abstract;
            });
    }
}
