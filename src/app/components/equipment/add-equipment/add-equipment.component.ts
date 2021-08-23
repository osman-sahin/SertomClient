import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styles: []
})
export class AddEquipmentComponent implements OnInit {

  currentItem:any;
  equipmentForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private service: EquipmentService,
    private formBuilder: FormBuilder,
    private location: Location) { 
    
  }

  ngOnInit() {
    this.equipmentForm = this.formBuilder.group({
      equipmentName: ['', Validators.required],
      procurementDate: [''],
      quantity: ['', Validators.compose(
        [Validators.required, Validators.min(1)])],
      unitPrice: ['', Validators.compose(
        [Validators.required, Validators.min(.01)])],
      utilizationRatio: ['', Validators.compose(
        [Validators.required, Validators.min(0), Validators.max(100)])],
      clinicId: ['', Validators.required],
    });
  }

  get f() {
    return this.equipmentForm.controls;
  }

  submitForm(){
    if (this.loading == true) {
      return;
    }
    this.loading = true;
    this.submitted = true;
    if (this.equipmentForm.invalid) {
      this.loading = false;
      return;
    }

    this.currentItem = this.equipmentForm.value;

    this.service.add(this.currentItem ,this.service.extUrl).subscribe(r => {
      if (r && r.id > 0) {
        //alert(this.translatePipe.transform('successAdded'));
        alert("Başarılı");
        this.equipmentForm.reset();
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
