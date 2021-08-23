import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styles: []
})
export class AddClinicComponent implements OnInit {

  currentItem:any;
  clinicForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private service: ClinicService,
    private formBuilder: FormBuilder,
    private location: Location
    ) { 
      this.currentItem = {};
    }

  ngOnInit() {
    this.clinicForm = this.formBuilder.group({
      clinicName: ['', Validators.required]
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

    this.currentItem = this.clinicForm.value;

    this.service.add(this.currentItem ,this.service.extUrl).subscribe(r => {
      if (r && r.id > 0) {
        //alert(this.translatePipe.transform('successAdded'));
        alert("Başarılı")
        this.clinicForm.reset();
        this.loading = false;
        this.submitted = false;
      } else {
       // alert(this.translatePipe.transform('errorTryAgain'));
       alert("Hata Oluştu! Lütfen tekrar deneyiniz")
       this.loading = false;
       this.submitted = false;
      }
    });
  }

  goBack() {
    this.location.back();
  }
}