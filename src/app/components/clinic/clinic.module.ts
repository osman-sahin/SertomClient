import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicComponent } from './clinic.component';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { DeleteClinicComponent } from './delete-clinic/delete-clinic.component';
import { UpdateClinicComponent } from './update-clinic/update-clinic.component';
import { ClinicRoutingModule } from './clinic-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    ClinicComponent,
    AddClinicComponent,
    DeleteClinicComponent,
    UpdateClinicComponent
  ],
  imports: [
    CommonModule,
    ClinicRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule
  ]
})
export class ClinicModule { }
