import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  fname:string = '';
  email:string = '';
  age:number = 0;
  phone:string = '';
  today:string = '';
  reg(){
    alert('I got details');
  }
}
