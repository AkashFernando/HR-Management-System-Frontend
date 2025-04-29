import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeComponent {
  employeeForm: FormGroup;
  departments = ['IT', 'HR', 'Finance', 'Marketing'];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      department: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('New Employee:', this.employeeForm.value);
      alert('Employee added successfully!');
      this.employeeForm.reset();
    } else {
      this.employeeForm.markAllAsTouched();
      alert('Please fill out all required fields correctly.');
    }
  }
}
