import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Employee from '../../../model/employee.model';
import EmployeeService from '../../../services/employeeService';



@Component({
  selector: 'app-add-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {


  constructor(private employeeService:EmployeeService){}

  public employee : Employee= {
    id: 0,
    name: '',
    email: '',
    department: '',
    createdDate: '',
    modifiedDate: ''
  }

  add(){
    this.employeeService.save(this.employee).subscribe(res=>{
      this.resetform();
      alert("added succccsfully ! ")
    })

  }


  resetform(){
      this.employee ={
      id: 0,
      name: '',
      email: '',
      department: '',
      createdDate: '',
      modifiedDate:""
    }
  }
  }
