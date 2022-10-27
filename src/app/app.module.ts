import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidemenuComponent } from './common/sidemenu/sidemenu.component';
import { FormsModule } from '@angular/forms';
import { DocumentComponent } from './component/all-data/document.component';
import { FinancailComponent } from './component/financail/financail.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { TechnicalComponent } from './component/technical/technical.component';
import { MarkrtingComponent } from './component/markrting/markrting.component';
import { HRComponent } from './component/hr/hr.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    SidemenuComponent,
    FilterPipe,
    FinancailComponent,
    TechnicalComponent,
    MarkrtingComponent,
    HRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
