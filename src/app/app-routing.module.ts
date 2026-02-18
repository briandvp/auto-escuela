import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClasesAutoComponent } from './pages/clases-auto/clases-auto.component';
import { ClasesMotoComponent } from './pages/clases-moto/clases-moto.component';
import { TeoricoComponent } from './pages/teorico/teorico.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clases-auto', component: ClasesAutoComponent },
  { path: 'clases-moto', component: ClasesMotoComponent },
  { path: 'teorico', component: TeoricoComponent },
  // { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
