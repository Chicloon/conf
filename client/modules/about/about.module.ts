import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./about.routing";

import { AboutComponent } from "./about.component";


@NgModule({
    imports: [
        BrowserModule,
        routing                
    ],
    declarations: [ AboutComponent ],
    bootstrap:    [ AboutComponent ]
})
export class AboutModule { }