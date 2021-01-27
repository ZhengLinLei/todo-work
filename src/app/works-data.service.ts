import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface WorksInt {
  work:string,
  description:string,
  date:string
}

@Injectable({
  providedIn: 'root'
})
export class WorksDataService {

  work_data?:WorksInt[]|any;

  constructor() { }

  getWorkData():Observable <WorksInt[]>{
    if(localStorage.getItem('works')){
      let data:string|any = localStorage.getItem('works');
      this.work_data = JSON.parse(data);
    }else{
      var template:WorksInt[] = [{work: "Welcome", description: "Let's use it", date: "0001-01-01"}];

      localStorage.setItem('works', JSON.stringify(template));
      this.work_data = template;
    }

    return of(this.work_data);
  }
  updateWorkData(data:WorksInt[]|any):void{
    localStorage.setItem('works', JSON.stringify(data));
  }
}
