import { Component } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent {

  
 fname: string = "mani";
 age:number = 23;
 gender:boolean = true;
 interest:null = null;
 fruits:string[] = ["kiwi", "melon", "berry"];
 obj:any = { name: "js", exp: 23, frameworks: ["react", "angular"] };
 undf:any;

 a:number = 2;
 b: number = 3;
}
