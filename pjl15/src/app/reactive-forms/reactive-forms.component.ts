import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  regFormGroup: FormGroup;
  submitted:boolean = false;
  constructor(private fb:FormBuilder) {
    this.regFormGroup = this.fb.group({
      fname: ['pjl', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lname : [null, [Validators.required]],
      age: [null,[Validators.min(18), Validators.max(40) ]],
      phone: [null, [Validators.pattern('[6789][0-9]{9}')]]
    })
  }
  

  reg (){
    this.submitted = true;
    if(this.regFormGroup.valid){
      alert('form is submitted');
    }
  }
}
