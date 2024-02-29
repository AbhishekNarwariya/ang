import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // standalone: true,
  

})
export class AppComponent {
  title = 'ang';

 
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  formData() {
    // Process form data here
    console.log(this.myForm.value);
  }

  
  }
