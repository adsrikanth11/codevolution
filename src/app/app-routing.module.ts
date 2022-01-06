import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
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
import { HttpServicesComponent } from './http-services/http-services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutersComponent } from './routers/routers.component';
import { AuthGuard } from './auth.guard';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'interpolation', component: InterpolationComponent, canActivate: [AuthGuard] },
  { path: 'property-binding', component: PropertyBindingComponent },
  // { 
  //   path: 'structural-binding',
  //   canActivateChild: [AuthGuard], 
  //   children: [
  //     { path: 'class-binding', component: ClassBindingComponent },
  //     { path: 'style-binding', component: StyleBindingComponent }
  //   ]
  // },
  { path: 'class-binding', component: ClassBindingComponent },
  { path: 'style-binding', component: StyleBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'template-ref-var', component: TemplateRefVarComponent },
  { path: 'twoway-data-binding', component: TwoWayDataBindingComponent },
  { path: 'ngif', component: NgIfDirectiveComponent },
  { path: 'ngswitch', component: NgswitchDirectiveComponent },
  { path: 'ngfor', component: NgforDirectiveComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: HttpServicesComponent },
  { path: 'routers/:id', component: RoutersComponent },
  { path: 'routers/:productid/photos/:photoid', component: RoutersComponent },
  { path: 'forms/templatedriven', component: TemplateDrivenComponent },
  { path: 'forms/reactiveforms', component: ReactiveFormsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
