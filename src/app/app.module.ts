import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentProvidesComponent } from './components/communication/parent-provides/parent-provides.component';
import { ChildReceavesComponent } from './components/communication/child-receaves/child-receaves.component';
import { ParentBiComponent } from './components/communication/parent-bi/parent-bi.component';
import { ChildBiComponent } from './components/communication/child-bi/child-bi.component';
import { MakeTextRedDirective } from './make-text-red.directive';
import { DisplayRequestsComponent } from './components/displayRequests/display-requests/display-requests.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentProvidesComponent,
    ChildReceavesComponent,
    ParentBiComponent,
    ChildBiComponent,
    MakeTextRedDirective,
    DisplayRequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
