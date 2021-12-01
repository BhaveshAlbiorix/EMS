import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-detail', pathMatch: "full" },
  {
    path: 'employee-detail', component: EmployeeDetailComponent
  },
  {
    path: 'add-employee', component: AddEmployeeComponent
  },
  {
    path: 'add-employee/:id', component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
