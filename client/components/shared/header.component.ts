import { Component } from '@angular/core';

@Component ({
    selector: 'my-header-element',
    template:`
        <h1> This a header component </h1>
        <p> Wellcome to {{title}} page </p>
    ` 
})

export class HeaderComponent {
    title: string = 'My'
}