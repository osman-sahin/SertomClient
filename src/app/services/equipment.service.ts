import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends BaseService {

  extUrl = "equipment/";

  super() { }

}