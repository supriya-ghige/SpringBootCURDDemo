import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];
  addEmployee: Employee = new Employee();

  constructor (private employeeService: EmployeeService){
  }
  
  // from angular 16 we can use inject for dependancy injection insted of constructor
  empService = inject(EmployeeService);

  ngOnInit(): void {
    this.getEmployees();
  }

   getEmployees()
   {
    this.empService.getEmployeeList().subscribe((result:any) =>{
      this.employees = result;
      console.log(result);
    });
   }

   updateEmployee(data: Employee)
   {
       this.addEmployee = data;
   }

   onDelete(id: number)
   {
     const isDelete = confirm("Are you sure want to delete?");
    if(isDelete)
    {
      this.empService.deleteEmployee(id).subscribe((result: any) =>{
        this.getEmployees();
      })
    }
     
   }

   onSave()
   {
      this.empService.addEmployee(this.addEmployee).subscribe((result:any) =>{
        this.getEmployees();
      });
     // console.log(this.addEmployee);
   }

   onUpdate()
   {
      this.empService.updateEmployee(this.addEmployee, this.addEmployee.id).subscribe((result:any) =>{
        this.getEmployees();
      })
   }
}
