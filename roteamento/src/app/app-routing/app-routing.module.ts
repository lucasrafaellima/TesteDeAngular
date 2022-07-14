import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "primeira-pagina", component: PrimeiraPaginaComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
  exports: [RouterModule]
})
export class AppRoutingModule { }
