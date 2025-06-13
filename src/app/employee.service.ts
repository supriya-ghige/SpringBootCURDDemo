import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:9090/api/v1/employee";

//   "/api-rewrite/*":{
//     "target":"http://localhost:9090/api/v1/employees",
//     "secure" : false,
//     "pathRewrite" : {"^/api-rewrite" : ""}
// }

  constructor(private httpClient: HttpClient) { }

  // getEmployeeList(): Observable<Employee[]>{
  //   return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  // }

  getEmployeeList() {
   return this.httpClient.get("http://localhost:9090/api/v1/employees");
  }

  addEmployee(emp: Employee){
   return this.httpClient.post("http://localhost:9090/api/v1/employee",emp);
  }

  updateEmployee(emp: Employee, id: number){
   return this.httpClient.put("http://localhost:9090/api/v1/employee/"+id,emp);
  }

  deleteEmployee(id: number)
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
