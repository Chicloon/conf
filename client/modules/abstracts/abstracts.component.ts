import { Component, OnInit } from "@angular/core";

import { Abstract } from './abstract';
// import { AbstractsService } from './abstracts.service';

@Component({
    selector: "my-abstracts-component",
    templateUrl: `client/modules/abstracts/abstracts.component.html`
})
export class AbstractsComponent implements OnInit {
    // constructor(private abstractsService: AbstractsService) { }

    abstracts: Abstract;

    ngOnInit() { 
        this.abstracts = {
            title: 'Titile from component',
            content: 'Content from component',
            createdBy: 'Me'
          };
    }

    // getAbstracts() {
    //     this.abstractsService.getAbstracts()
    //         .subscribe(
    //         abstract => {
    //             console.log(abstract);
    //         });
    // }

}
