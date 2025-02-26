import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

    fname: string = 'AnGuLaR TrAiNing';
    age:number = 34.234234;
    today:any = new Date();
    user:any = {name: 'ang', exp:5};
}
