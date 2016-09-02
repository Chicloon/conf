import { Component, OnInit } from "@angular/core";
import { Abstract } from '../abstracts/abstract';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

import { AbstractsService } from '../abstracts/abstracts.service';


@Component({
    selector: "my-submit-abstract-component",
    templateUrl: `client/modules/submit-abstract/submit-abstract.component.html`,
    styleUrls:['client/modules/submit-abstract/submit-abstract.component.css']
})
export class SubmitAbstractComponent implements OnInit {
    form: FormGroup;
    private searchfieldCharactersCounter = 0;

    private title = new FormControl('',Validators.required);
    private content = new FormControl();
    private section = new FormControl();
    constructor(private _abstracts: AbstractsService, private formBuilder: FormBuilder) { }


    ngOnInit(){
        //  this.form = this.formBuilder.group({
        //      title: '',
        //      content: ['This is a content', Validators.required]
        //  });
        this.form = this.formBuilder.group({
            title: this.title,
            content: this.content,
            section: this.section
        });
        this.content.valueChanges.subscribe (value => this.contentfieldValidation(value) );

        console.log(this.form.controls);
        console.log(this.form.invalid);
        // console.log (this.form.controls.title.value); 
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
            this.title.setValue('this is a title')
    }
    
    onSubmit() {
        console.log('Form submitted');
        console.log(this.form, this.form.value, this.form.valid);
    }
}
