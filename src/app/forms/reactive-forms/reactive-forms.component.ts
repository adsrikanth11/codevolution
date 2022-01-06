import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit, OnChanges {
  myforms:any = FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  // FormGroup 
    // this.myforms = new FormGroup({
    //   'username': new FormControl('Srikanth'),
    //   'emailid': new FormControl('srikanth@gmail.com'),
    //   'password': new FormControl('mypassword')
    // });

  // FormBuilder
    this.myforms = this.fb.group({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'emailid': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });

  }

  onSubmit() {
    // Get specific element value
    console.log(this.myforms.get('username').value);
    // get all form values
    console.log(this.myforms.value);
    // Get All Forms data
    console.log(this.myforms);
  }

  setvalue() {
    const setvalues = {
      'username': 'Srikanth...',
      'emailid': 'srikanth@gmail.com...',
      'password': 'mypassword...'
    }

    this.myforms.setValue(setvalues);
  }

  patchvalue() {
    const patchvalues = {
      'username': 'Srikanth...',
      'emailid': 'srikanth@gmail.com...',
    }
    
    this.myforms.patchValue(patchvalues);
  }

  resetvalue() {
    this.myforms.reset();
  }
}
