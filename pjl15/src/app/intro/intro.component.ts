import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  name2 ="ram lala";
  age2 = 5;
  usersList = [
    {name:'ramesh', age:45},
    {name:'lokesh', age:15},
    {name:'rajesh', age:35},
    {name:'umesh', age:49},
    {name:'mahesh', age:25},
    {name:'rakesh', age:15},
    {name:'naresh', age:34},
  ]

  getData(data:any) {
    alert(data);
  }
}
