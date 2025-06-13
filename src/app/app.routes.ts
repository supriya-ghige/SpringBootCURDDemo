import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CRUDMasterComponent } from './crud-master/crud-master.component';

export const routes: Routes = [
    {
        path:"employee-list",
        component: EmployeeListComponent
    },

    {
        path:"crud-master",
        component: CRUDMasterComponent
    }
];
