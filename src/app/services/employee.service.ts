import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
  constructor(private http: HttpClient) {}

 
  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
    
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const newEmployee = { ...employee, id: this.generateId() };
    this.employees.push(newEmployee);
    return of(newEmployee);
    
   }

  
  private generateId(): number {
    return this.employees.length > 0 
      ? Math.max(...this.employees.map(emp => emp.id || 0)) + 1 
      : 1;
  }
}