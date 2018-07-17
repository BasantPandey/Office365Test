import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';
import { AdduserComponent } from './adduser/adduser.component';
import {ToastrModule} from 'ngx-toastr'
import { UserOperationsService } from './user-operations.service'; 
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    FeatureComponent,
    PricingComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UserOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
