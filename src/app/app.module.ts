import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { PersonalDetailComponent } from './add-employee/personal-detail/personal-detail.component';
import { BankDetailComponent } from './add-employee/bank-detail/bank-detail.component';
import { ProfessionalDetailComponent } from './add-employee/professional-detail/professional-detail.component';
import { EducatoinDetailComponent } from './add-employee/educatoin-detail/educatoin-detail.component';
import { ExperianceDetailComponent } from './add-employee/experiance-detail/experiance-detail.component';
import { CurrentOrgDetailComponent } from './add-employee/current-org-detail/current-org-detail.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    PersonalDetailComponent,
    BankDetailComponent,
    ProfessionalDetailComponent,
    EducatoinDetailComponent,
    ExperianceDetailComponent,
    CurrentOrgDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
