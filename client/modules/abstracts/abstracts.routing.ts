import { Routes, RouterModule } from '@angular/router';

import { AbstractsComponent } from './abstracts.component';

export const routes: Routes = [
    { path: '', component: AbstractsComponent }
];

export const routing = RouterModule.forChild(routes);