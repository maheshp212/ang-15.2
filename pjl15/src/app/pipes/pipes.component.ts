import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  fname: string = 'AnGuLaR TrAiNiNG';
  age:number =34.45232345;
  today:any = new Date();
  user:any = {name:'ang', exp:5, exp2:5, exp3:5};


}
