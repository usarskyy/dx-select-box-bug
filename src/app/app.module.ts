import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxLookupModule, DxSelectBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWindowWithSelectBoxComponent } from './modal-window-with-select-box/modal-window-with-select-box.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalWindowWithSelectBoxComponent,
    PopupWindowComponent,
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              DxSelectBoxModule,
              CommonModule,
              OverlayModule,
              PortalModule,
              DxLookupModule,
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
