import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent},
  { path: 'editor', component: EditorComponent},
  { path: '', redirectTo: "main", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
