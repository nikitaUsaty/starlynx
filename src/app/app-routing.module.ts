import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsGroupComponent } from './cons-group/cons-group.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cons', component: ConsGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
