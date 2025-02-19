import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {


  fname:string= '';
  email:string= 'temp';
  age:number= 0;
  phone:string= '';
  today:string= '';

  reg() {
    alert("i got the details")
  }
}
