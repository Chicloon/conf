import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { routing } from "./abstracts.routing";
import { AbstractsService } from './abstracts.service';

import { AbstractsComponent } from "./abstracts.component";
import { AbstractsListComponent } from "./abstracts-list.component";
import { AbstractComponent } from "./abstract.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,                
    ],
    providers: [AbstractsService], 
    declarations: [ AbstractsComponent, AbstractsListComponent, AbstractComponent],    
    bootstrap:    [ AbstractsComponent ]
})
export class AbstractsModule { }