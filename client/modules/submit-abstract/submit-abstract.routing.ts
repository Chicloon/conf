import { Routes, RouterModule } from '@angular/router';

import { SubmitAbstractComponent } from './submit-abstract.component';

export const routes: Routes = [
    { path: '', component: SubmitAbstractComponent }
];

export const routing = RouterModule.forChild(routes);