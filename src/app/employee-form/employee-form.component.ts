// src/app/employee-form/employee-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations'];
  positions = ['Manager', 'Developer', 'Designer', 'Analyst', 'Assistant'];
  submitted = false;
  
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  // Easy access to form fields
  get f() { return this.employeeForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    
    // Stop if the form is invalid
    if (this.employeeForm.invalid) {
      return;
    }
    
    // Create employee object
    const employee: Employee = this.employeeForm.value;
    
    // Add employee using service
    this.employeeService.addEmployee(employee).subscribe(
      response => {
        console.log('Employee added successfully:', response);
        // Navigate to employee list
        this.router.navigate(['/employees']);
      },
      error => {
        console.error('Error adding employee:', error);
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/employees']);
  }

  onReset(): void {
    this.submitted = false;
    this.employeeForm.reset();
  }
}