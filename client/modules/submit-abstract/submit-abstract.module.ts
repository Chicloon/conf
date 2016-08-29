import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule }   from '@angular/forms';

import { SubmitAbstractComponent } from "./submit-abstract.component";
import { routing } from "./submit-abstract.routing";
import { AbstractsService } from '../abstracts/abstracts.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        ReactiveFormsModule        
    ],
    providers: [ AbstractsService ],
    declarations: [ SubmitAbstractComponent ],
    bootstrap:    [ SubmitAbstractComponent ]
})
export class SubmitAbstractModule { }