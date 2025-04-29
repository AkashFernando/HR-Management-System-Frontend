import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './page/dashboard/add-employee/add-employee.component';
import { ManageComponent } from './page/dashboard/manage/manage.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component:DashboardComponent,
        children:[
          {
            path:"",
            component:AddEmployeeComponent
          }
          ,
          {
            path:"add",
            component:AddEmployeeComponent
          },{
            path:"manage",
            component:ManageComponent
          }
        ]
    },{
      path:"",
      component:DashboardComponent
    }


];
