import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { SubmitAbstractComponent } from "./submit-abstract.component";
import { routing } from "./submit-abstract.routing";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,        
    ],
    declarations: [ SubmitAbstractComponent ],
    bootstrap:    [ SubmitAbstractComponent ]
})
export class SubmitAbstractModule { }