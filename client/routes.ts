import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'abstracts', pathMatch: 'full' },
    { path: 'about', loadChildren: 'client/modules/about/about.module#AboutModule' },
    { path: 'home', loadChildren: 'client/modules/home/home.module#HomeModule' },
    { path: 'abstracts', loadChildren: 'client/modules/abstracts/abstracts.module#AbstractsModule' },
    { path: 'contact', loadChildren: 'client/modules/contact/contact.module#ContactModule' },
    { path: 'submit-abstract', loadChildren: 'client/modules/submit-abstract/submit-abstract.module#SubmitAbstractModule' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });