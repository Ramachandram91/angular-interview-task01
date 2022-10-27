import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './component/all-data/document.component';
import { FinancailComponent } from './component/financail/financail.component';
import { HRComponent } from './component/hr/hr.component';
import { MarkrtingComponent } from './component/markrting/markrting.component';
import { TechnicalComponent } from './component/technical/technical.component';

const routes: Routes = [
  { path: '', component: DocumentComponent },
  { path: 'financail', component: FinancailComponent },
  { path: 'marketing', component: MarkrtingComponent },
  { path: 'human-resource', component: HRComponent },
  { path: 'technical', component: TechnicalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
