import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SaveClinicDto } from 'src/app/Entities/saveClinicDto';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-delete-clinic',
  templateUrl: './delete-clinic.component.html',
  styles: []
})
export class DeleteClinicComponent implements OnInit {

  currentItem:SaveClinicDto;
  clinicForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private service: ClinicService,
    private formBuilder: FormBuilder,
    private location: Location,
    private route: ActivatedRoute
    ) { 
      this.currentItem = new SaveClinicDto();
    }

  ngOnInit() {
    this.clinicForm = this.formBuilder.group({
      id: [''],
      clinicName: ['', Validators.required]
    });
    this.service.getById(this.route.snapshot.params.id ,this.service.extUrl).subscribe(r => {
      this.clinicForm.patchValue(r)
    });
  }


  get f() {
    return this.clinicForm.controls;
  }

  submitForm(){
    if (this.loading == true) {
      return;
    }
    this.loading = true;
    this.submitted = true;
    if (this.clinicForm.invalid) {
      this.loading = false;
      return;
    }


    this.service.delete(this.clinicForm.controls['id'].value ,this.service.extUrl).subscribe(r => {
      if (r && r.id > 0) {
        //alert(this.translatePipe.transform('successAdded'));
        this.goBack();
      } else {
       // alert(this.translatePipe.transform('errorTryAgain'));
       this.loading = false;
       this.submitted = false;
      }
    });
  }

  goBack() {
    this.location.back();
  }

}
