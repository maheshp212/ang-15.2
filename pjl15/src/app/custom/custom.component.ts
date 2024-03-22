import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  @Input() name:string = '';
  @Input() age:number = 0;

  @Output() fetchData = new EventEmitter();

  sendData(){
    let str = this.name + ' age is : ' + this.age;
    this.fetchData.emit(str);
  }

}
