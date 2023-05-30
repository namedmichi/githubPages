import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BiggerComponent } from './components/bigger/bigger.component';
import { SmallerComponent } from './components/smaller/smaller.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'groessere_Projekte', component: BiggerComponent },
  { path: 'kleinere_Projekte', component: SmallerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
