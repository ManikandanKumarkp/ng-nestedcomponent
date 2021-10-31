import { Component, Input } from '@angular/core';

@Component({
  selector: 'Employee',
  template: `<h1>Employee {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; color:red; }`]
})
export class EmployeeComponent  {
  @Input() name: string;
}
