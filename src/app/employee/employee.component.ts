import { from } from "rxjs"

import { Component } from '@angular/core';

@component ({
  selector:'employee',
templateUrl:'app/employee/employee.component.html'
});

export class Employeecomponent{
firstname:String='manikandan';
lastname:string='k';
gender:string='male';
age:number=25;
}