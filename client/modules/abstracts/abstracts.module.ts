import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AbstractsComponent } from "./abstracts.component";
import { routing } from "./abstracts.routing";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,        
    ],
    declarations: [ AbstractsComponent ],
    bootstrap:    [ AbstractsComponent ]
})
export class AbstractsModule { }