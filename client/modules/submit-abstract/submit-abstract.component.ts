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
    
    constructor(private _abstracts: AbstractsService, private formBuilder: FormBuilder) { }


    ngOnInit(){
        
        this.form = this.formBuilder.group({
            title: this.title,
            content: this.content,
            section: this.section,
            author: this.author
        });
        this.content.valueChanges.subscribe (value => this.contentfieldValidation(value));
        

        console.log(this.form.controls);
        console.log(this.form.invalid); 
        console.log(this.title.value);
    }

    contentfieldValidation(value) {
         console.log(value);
            console.log(this.form.valid);
            this.searchfieldCharactersCounter = value.length;
            if (value === 'test') {
                this.title.reset();
                this.form.invalid;
                this.title.setValue('test');
                
            }
            this.form.valid;
    }

    lostFocus () {
        if (this.searchfieldCharactersCounter < 10) {
            this.trigger = true;
        }               
    }

    inFocus () {
        this.trigger = false;
    }
    
    onSubmit() {
        console.log('Form submitted');
        console.log('The form ' , this.form, '\n The value', this.form.value);
    }
}
