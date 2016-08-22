import { Component } from "@angular/core";
import { HeaderComponent } from './components/shared/header.component';

@Component({
    selector: "app",
    templateUrl:'client/app.component.html'
})
export class AppComponent {
    appName: string = "Angular 2 Express"
}