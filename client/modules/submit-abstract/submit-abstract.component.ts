import { Component, OnInit } from "@angular/core";
import { Abstract } from '../abstracts/abstract';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import {NgClass} from '@angular/common';


import { AbstractsService } from '../abstracts/abstracts.service';


@Component({
    selector: "my-submit-abstract-component",
    templateUrl: `client/modules/submit-abstract/submit-abstract.component.html`,
    styleUrls:['client/modules/submit-abstract/submit-abstract.component.css'],
    directives: [NgClass]
})
export class SubmitAbstractComponent implements OnInit {
    
    // Form fields variables
    private form: FormGroup;
    private title = new FormControl('', Validators.compose([Validators.pattern('^[a-zA-Z0-9_ ]*$'),Validators.required]));
    private author = new FormControl('', Validators.required)
    private content = new FormControl('',Validators.compose([Validators.pattern('^[a-zA-Z0-9_ ]*$'),Validators.required, Validators.minLength(10), Validators.maxLength(500)]));
    private section = new FormControl('', Validators.required);

    private trigger:Boolean = false;
    private searchfieldCharactersCounter = 0;
    
    constructor(private _abstractsService: AbstractsService, private formBuilder: FormBuilder) { }


    ngOnInit(){
        
        this.form = this.formBuilder.group({
            title: this.title,
            section: this.section,
            author: this.author,
            content: this.content
        });
    
        

        console.log(this.form.controls);
        console.log(this.form.invalid); 
        console.log(this.title.value);
    }

    lostFocus (value) {
        if (value < 10 && value > 500) {
            this.trigger = true;
        }               
    }

    inFocus () {        
        this.trigger = false;
    }
    
    onSubmit(value: Abstract) {
        console.log (value);
        const abstract: Abstract = new Abstract (value.author, value.title, value.content, value.section);
        this._abstractsService.addAbstract(abstract)
            .subscribe(
                data => {
                    console.log(data);
                    this._abstractsService.abstracts.push(data);
                },
                error => console.log(error)
            );
    }
}
