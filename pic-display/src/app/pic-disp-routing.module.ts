import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicListComponent } from './pic-list/pic-list.component';
import { PicGridComponent } from './pic-grid/pic-grid.component';

const routes: Routes = [
    { path: 'list', component: PicListComponent},
    { path: 'grid', component: PicGridComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PicDispRoutingModule { }

