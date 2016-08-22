import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from "./routes";
import { HeaderComponent } from "./components/shared/header.component";
import { FooterComponent } from "./components/shared/footer.component";

@NgModule({
    imports: [
        BrowserModule,
        // routing
    ],
    declarations: [ HeaderComponent, AppComponent, FooterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }