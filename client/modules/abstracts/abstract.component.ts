import { Component, Input } from "@angular/core";

import { Abstract } from './abstract';
import { AbstractsService } from './abstracts.service';

@Component({
    selector: "my-abstract",
    templateUrl: `client/modules/abstracts/abstract.component.html`
})

export class AbstractComponent {
    @Input() abstract: Abstract;

    constructor (private _abstracts: AbstractsService) {}

    onEdit () {
        this._abstracts.editAbstract(this.abstract);
    }

    onDelete() {
        this._abstracts.deleteAbstract(this.abstract)            
           .subscribe(
                data => console.log(data),
                error => console.error (error)
            );
    }
}