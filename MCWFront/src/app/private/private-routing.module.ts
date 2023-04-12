import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'account', component: UserAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
