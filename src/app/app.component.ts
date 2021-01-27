import { Component } from '@angular/core';
import { WorksDataService, WorksInt } from './works-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ToDo Homeworks';
  template:WorksInt = {work:"", description:"", date:""};
  works?:WorksInt[]|any;

  msg:any = {
    open: false,
    text: "Added succesfully!",
    type: "success"
  }

  textAlert = {
    version: true,
    feature: true
  }

  edit:any = {
    edit: false,
    number: 0
  }

  constructor(private workDataService:WorksDataService) {
  }

  ngOnInit(){
    this.workDataService.getWorkData().subscribe(data => this.works = data);
  }

  addWork():void{
    this.works?.push(this.template);
    this.getAlert('Added succesfully!', 'success');

    this.updateDataWorks();
  }
  clearTemplate():void{
    this.template = {work:"", description:"", date:""};
    this.edit.edit = false;
  }
  deleteWork(num:number):void{
    let response = confirm("Are you sure you want to delete this item?");

    if(response){
      this.works?.splice(num, 1);
      this.getAlert('Deleted succesfully!', 'success');

      this.updateDataWorks();
    }else{
      this.getAlert('Confirm denied', 'danger');
    }
  }
  editWork(num:number):void{
    this.template = this.works[num];
    this.edit.edit = true;
    this.edit.number = num;
  }
  updateWork(num:number):void{
    this.works[num] = this.template;
    this.getAlert('Updated succesfully!', 'success');

    this.updateDataWorks();
  }

  getAlert(text:string, type:string){
    this.edit.edit = false;
    this.msg.text = text;
    this.msg.type = type;
    this.msg.open = true;
    setTimeout(():void=>{
      this.msg.open = false;
    }, 4000);
  }
  //Update localStorage
  updateDataWorks(){
    this.workDataService.updateWorkData(this.works);
  }
}
