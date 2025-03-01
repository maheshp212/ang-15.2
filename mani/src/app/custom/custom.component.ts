import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  @Input() data:any;
  @Output() courseSelected = new EventEmitter();
  expore(id:any){
    this.courseSelected.emit(id);
  }
}
