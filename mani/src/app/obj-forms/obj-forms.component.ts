import { Component } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent {

  user:any = {};

  // fname:string= '';
  // email:string= 'temp';
  // age:number= 0;
  // phone:string= '';
  // today:string= '';

  reg() {
    alert("i got the details from obj form :: " + this.user.fname+ " :: " + this.user.age);

    // fetch the form values  & send it to the API or do what ever you want
  }
}
