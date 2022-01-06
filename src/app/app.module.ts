import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgIfDirectiveComponent } from './structural_directives/ng-if-directive/ng-if-directive.component';
import { NgswitchDirectiveComponent } from './structural_directives/ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './structural_directives/ngfor-directive/ngfor-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeService } from './employee.service';
import { HttpServicesComponent } from './http-services/http-services.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RoutersComponent } from './routers/routers.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { MyinterceptorInterceptor } from './myinterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefVarComponent,
    TwoWayDataBindingComponent,
    NgIfDirectiveComponent,
    NgswitchDirectiveComponent,
    NgforDirectiveComponent,
    PipesComponent,
    HttpServicesComponent,
    InterpolationComponent,
    PageNotFoundComponent,
    HeaderComponent,
    RoutersComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: MyinterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
