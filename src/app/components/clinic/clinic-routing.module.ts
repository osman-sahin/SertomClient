import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { ClinicComponent } from './clinic.component';
import { DeleteClinicComponent } from './delete-clinic/delete-clinic.component';
import { UpdateClinicComponent } from './update-clinic/update-clinic.component';

const routes: Routes = [
    { path: '', component: ClinicComponent },
    {
        path: '',
        children: [
            { path: 'add', component: AddClinicComponent },
            { path: 'update/:id', component: UpdateClinicComponent },
            { path: 'delete/:id', component: DeleteClinicComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClinicRoutingModule { }