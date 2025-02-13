import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  fname: string  = 'angular js';
  fruits:string[] = ["kiwi", "melon", "berry"];

  counter:number = 0;
  callMe() {
    console.log('call me invoked :: ' + this.counter);
    this.counter++
  }
}
