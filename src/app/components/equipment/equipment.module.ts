import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    EquipmentComponent,
    UpdateEquipmentComponent,
    AddEquipmentComponent,
    DeleteEquipmentComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule
  ]
})
export class EquipmentModule { }
