import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  { path: "Users", component: UsersComponent },
  { path: "Feature", component: FeatureComponent },
  { path: "Home", component: HomeComponent },
  { path: "AddUser", component: AdduserComponent },
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "**", redirectTo: "Home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
