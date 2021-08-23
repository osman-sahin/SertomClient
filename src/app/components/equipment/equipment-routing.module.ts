import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentComponent } from './equipment.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';

const routes: Routes = [
  { path: '', component: EquipmentComponent },
  {
    path: '',
    children: [
      { path: 'add', component: AddEquipmentComponent },
      { path: 'update/:id', component: UpdateEquipmentComponent },
      { path: 'delete/:id', component: DeleteEquipmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }