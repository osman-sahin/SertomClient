import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
})
export class EquipmentComponent implements OnInit {

  dataSource: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private service: EquipmentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.service.getAll(this.service.extUrl).subscribe(r => {
      this.dataSource = r;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  goBack() {
    this.location.back();
  }


}