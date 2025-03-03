import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {


  @Input() appAttr(){};

  @Input() msg:string = '';
  @Input() fname:string = '';
  @Input() user:any = '';

  @Output() sendFname = new EventEmitter()
  @Output() sendUser = new EventEmitter()

  constructor(){
    console.log('this is a attr direcvie constructor')
  }

  @HostListener('click')
  callMe(){
    console.log('directive loaded');
      this.sendFname.emit(this.fname);
      this.sendFname.emit(this.user);
      
      this.appAttr()
  }

}
