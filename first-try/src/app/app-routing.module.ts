import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Comp1Component } from './comp1/comp1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Comp1DetailComponent } from './comp1-detail/comp1-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dash', pathMatch: 'full' },
    { path: 'comp1', component: Comp1Component },
    { path: 'dash', component: DashboardComponent },
    { path: 'detail/:id', component: Comp1DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
