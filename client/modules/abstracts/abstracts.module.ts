import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { routing } from "./abstracts.routing";
// import { AbstractsService } from './abstracts.service';

import { AbstractsComponent } from "./abstracts.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        // AbstractsService        
    ],
    declarations: [ AbstractsComponent ],
    bootstrap:    [ AbstractsComponent ]
})
export class AbstractsModule { }