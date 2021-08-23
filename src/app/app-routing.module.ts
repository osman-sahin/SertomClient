import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'clinic', loadChildren: () => import('./components/clinic/clinic.module').then(m => m.ClinicModule) },
  { path: 'equipment', loadChildren: () => import('./components/equipment/equipment.module').then(m => m.EquipmentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
