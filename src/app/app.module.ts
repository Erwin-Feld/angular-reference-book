import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent } from './components/parent.provide/parent.provide.component';
import { ParentProvidesComponent } from './components/communication/parent-provides/parent-provides.component';
import { ChildReceavesComponent } from './components/communication/child-receaves/child-receaves.component';
import { ParentBiComponent } from './components/communication/parent-bi/parent-bi.component';
import { ChildBiComponent } from './components/communication/child-bi/child-bi.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent.ProvideComponent,
    ParentProvidesComponent,
    ChildReceavesComponent,
    ParentBiComponent,
    ChildBiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
