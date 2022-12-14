import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: 'account', component: FiltersComponent },
  { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
