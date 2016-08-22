import { Component } from '@angular/core';

@Component ({
    selector: 'my-header-component',
    templateUrl: 'client/components/shared/header.component.html'
})

export class HeaderComponent {
    title: string = 'My'
}