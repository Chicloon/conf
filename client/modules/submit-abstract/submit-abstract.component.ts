import { Component, OnInit } from "@angular/core";
import { Abstract } from '../abstracts/abstract';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

import { AbstractsService } from '../abstracts/abstracts.service';


@Component({
    selector: "my-submit-abstract-component",
    templateUrl: `client/modules/submit-abstract/submit-abstract.component.html`
})
export class SubmitAbstractComponent implements OnInit {
    form: FormGroup;
    searchControl = new FormControl();
    // form = new FormGroup({
    //     title: new FormControl(),
    //     content: new FormControl()
    // });

    constructor(private _abstracts: AbstractsService, private formBuilder: FormBuilder) { }


    ngOnInit(){
         this.form = this.formBuilder.group({
             title: '',
             content: ['This is a content', Validators.required]
         });
        this.searchControl.valueChanges.subscribe (value => {
            console.log(value);
            console.log(this.form.valid);
            if (value === 'test') {
                this.searchControl.reset();
                // this.form.valid = false;
                this.form.controls.title.setValue('test');
                
            }
        });

        console.log(this.form.controls);
        console.log (this.form.controls.title.value); 
    }

    

    onSubmit() {
        console.log('Form submitted');
        console.log(this.form, this.form.value, this.form.valid);
    }
}
