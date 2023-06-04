import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BiggerComponent } from './components/bigger/bigger.component';
import { SmallerComponent } from './components/smaller/smaller.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'groessere_Projekte', component: BiggerComponent },
  { path: 'kleinere_Projekte', component: SmallerComponent },
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
