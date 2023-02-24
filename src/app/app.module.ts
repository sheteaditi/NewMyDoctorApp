import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { CancelAppointmentComponent } from './cancel-appointment/cancel-appointment.component';
import { HttpClientModule } from '@angular/common/http';

import ViewAppointmentComponent from './view-appointment/view-appointment.component';



const allLinks:Routes = [
  {path:'bookAppointment',component:AppointmentComponent},
  {path:'viewAppointment',component:ViewAppointmentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    ViewAppointmentComponent,
    AppointmentStatusComponent,
    CancelAppointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot(allLinks),CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
