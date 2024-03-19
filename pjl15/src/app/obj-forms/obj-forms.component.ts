import { Component } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent {

  user:any = {}
  // fname:string = '';
  // email:string = '';
  // age:number = 0;
  // phone:string = '';
  // today:string = '';
  reg(){
    console.log(this.user);
    alert('I got details');
    // we will call API here
    
  }
}