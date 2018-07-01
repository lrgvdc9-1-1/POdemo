import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PoOrdersComponent } from './po-orders/po-orders.component';
import { PdescriptionComponent } from './po-orders/pdescription/pdescription.component';
import { Under1000Component } from './po-orders/under1000/under1000.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { AppService } from './app.service';
import { Greater1000Component } from './po-orders/greater1000/greater1000.component';
import { VendorInfoComponent } from './po-orders/vendor-info/vendor-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavigationComponent,
    PdescriptionComponent,
    PoOrdersComponent,
    Under1000Component,
    AttachmentsComponent,
    Greater1000Component,
    VendorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
