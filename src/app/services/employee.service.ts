// src/app/services/employee.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
  // If you have a real API, use this instead of the array above
  // private apiUrl = 'http://your-api-url/employees';

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<Employee[]> {
    // Return our local array for demo purposes
    return of(this.employees);
    
    // If using a real API, use this instead:
    // return this.http.get<Employee[]>(this.apiUrl);
  }

  // Add new employee
  addEmployee(employee: Employee): Observable<Employee> {
    // For demo purposes, create an ID
    const newEmployee = { ...employee, id: this.generateId() };
    this.employees.push(newEmployee);
    return of(newEmployee);
    
    // If using a real API, use this instead:
    // return this.http.post<Employee>(this.apiUrl, employee);
  }

  // Generate a simple ID for demo purposes
  private generateId(): number {
    return this.employees.length > 0 
      ? Math.max(...this.employees.map(emp => emp.id || 0)) + 1 
      : 1;
  }
}