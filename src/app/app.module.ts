import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminListViewComponent } from './admin-list-view/admin-list-view.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminListViewRolesComponent } from './admin-list-view-roles/admin-list-view-roles.component';
import {PatientUserInterfaceComponent} from "./patient-user-interface/patient-user-interface.component";
import {AddressUserInterfaceComponent} from "./address-user-interface/address-user-interface.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WardListViewComponent } from './ward-list-view/ward-list-view.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule} from "ngx-toastr";
import {AppointmentComponent} from "./appointment-user-interface/appointment.component";
import {ShiftsManagementComponent} from "./shifts-management/shifts-management.component";
import {MedicationListViewComponent} from "./medication-list-view/medication-list-view.component";
import {PrescriptionListViewComponent} from "./prescription-list-view/prescription-list-view.component";



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminNavComponent,
    LoginComponent,
    AdminListViewComponent,
    AdminListViewRolesComponent,
    AppointmentComponent,
    PatientUserInterfaceComponent,
    AddressUserInterfaceComponent,
    ShiftsManagementComponent,
    WardListViewComponent,
    UserNavComponent,
    MedicationListViewComponent,
    PrescriptionListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      progressBar: true,
      progressAnimation: "increasing",
      preventDuplicates: true,
      timeOut: 3000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
