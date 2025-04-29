import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Employee from "../model/employee.model";
import { Observable } from "rxjs";

@Injectable ({providedIn:'root'})

export default class EmployeeService {


  constructor(private http:HttpClient){}

  save(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>("http://localhost:8080/api/employee/add",employee);
  }

  update(id:number,employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`http://localhost:8080/api/employee/update-employee/${id}`, employee);
  }

  getAll():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:8080/api/employee/getAll")
  }

  delete(id:number){
    return this.http.delete("http://localhost:8080/api/employee/delete/"+id)
  }

  searchByName(name:string):Observable<Employee>{
      return this.http.get<Employee>("http://localhost:8080/api/employee/search/"+name)
  }

}