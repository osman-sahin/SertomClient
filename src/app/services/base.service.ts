import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';
import { GlobalService } from './global.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseUrl = "https://localhost:44369/api/"

  constructor(private globalService: GlobalService) { }

  getAll(controller: string): Observable<any> {

    let url = this.baseUrl + controller;

    return this.globalService.http
      .get(url, this.globalService.HttpOptions)
      .pipe(
        map((r: any) => {
          if (environment.isDev) {
            console.log(controller + "getAll", r);
          }
          return r;
        }),
        catchError((error) => {
          console.log("error :", error);
          return error;
        })
      );
  }

  getById(id: any, controller: string): Observable<any> {

    let url = this.baseUrl + controller + id;

    return this.globalService.http
      .get(url, this.globalService.HttpOptions)
      .pipe(
        map((r: any) => {
          if (environment.isDev) {
            console.log(controller + "getById", r);
          }
          return r;
        }),
        catchError((error) => {
          console.log("error :", error);
          return error;
        })
      );
  }

  add(value: any, controller: string): Observable<any> {

    let body = JSON.stringify(value);
    console.warn(body);
    let url = this.baseUrl + controller;

    return this.globalService.http
      .post(url, body, this.globalService.HttpOptions)
      .pipe(
        map((r: any) => {
          if (environment.isDev) {
            console.log(controller + "add", r);
          }
          return r;
        }),
        catchError((error) => {
          console.log("error :", error);
          return error;
        })
      );
  }

  update(value: any, controller: string): Observable<any> {

    let body = JSON.stringify(value);
    let url = this.baseUrl + controller + value.id;

    return this.globalService.http
      .put(url, body, this.globalService.HttpOptions)
      .pipe(
        map((r: any) => {
          if (environment.isDev) {
            console.log(controller + "update", r);
          }
          return r;
        }),
        catchError((error) => {
          console.log("error :", error);
          return error;
        })
      );
  }

  delete(id: any, controller: string): Observable<any> {

    let url = this.baseUrl + controller + id;

    return this.globalService.http
      .delete(url, this.globalService.HttpOptions)
      .pipe(
        map((r: any) => {
          if (environment.isDev) {
            console.log(controller + "delete", r);
          }
          return r;
        }),
        catchError((error) => {
          console.log("error :", error);
          return error;
        })
      );
  }
}
