import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicListComponent } from './pic-list/pic-list.component';
import { PicDispRoutingModule } from './pic-disp-routing.module';
import { PicGridComponent } from './pic-grid/pic-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PicListComponent,
    PicGridComponent
  ],
  imports: [
    BrowserModule,
    PicDispRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
