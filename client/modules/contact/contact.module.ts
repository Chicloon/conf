import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from "./contact.routing";
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [ ContactComponent ],
    bootstrap:    [ ContactComponent ]
})
export class ContactModule { }
