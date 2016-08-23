import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forChild(routes);