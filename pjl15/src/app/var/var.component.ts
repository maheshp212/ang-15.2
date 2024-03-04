import { Component } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent {

  name:string = 'angular';
  age:number = 23;
  interest:null = null;
  gender:boolean = true;
  fruits: string[] =  ['kiwi','melon', 'berry'];
  user:any = {name:'js', exp:5};
  undf: any;

  a:number = 2;
  b:number = 3;
}
