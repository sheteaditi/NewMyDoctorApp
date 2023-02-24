import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentDTO } from '../appointment-dto';
import { AppointmentOperationsService } from '../appointment-operations.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})

export default class ViewAppointmentComponent {

  allAppointments:AppointmentDTO[]=[];

  constructor(private appointmentService:AppointmentOperationsService)
  {

  }

  getAppointments(date:string){
    this.appointmentService.getAppointmentByDate(date).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allAppointments = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getAppointments2(status:string){
    this.appointmentService.getAppointmentByStatus(status).subscribe(
      data=>{
        console.log("data :- "+data);
        this.allAppointments = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getAppointments3(doctorName:string){
    this.appointmentService.getAppointmentByDoctor(doctorName).subscribe(
      data=>{
        console.log("data :- "+data);
        this.allAppointments = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getAppointments4(patientName:string){
    this.appointmentService.getAppointmentByPatient(patientName).subscribe(
      data=>{
        console.log("data :- "+data);
        this.allAppointments = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }
}

// "patientName":"Aditi",
// "patientCity":"Pune",
// "patientAge":"25",
// "patientGender": "Female",
// "patientDisease": "Cough and cold" 