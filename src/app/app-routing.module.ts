import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmaduraComponetComponent } from './armadura-componet/armadura-componet.component';
import { HomeComponetComponent } from './home-componet/home-componet.component';

const routes: Routes = [
  {path:'',component:HomeComponetComponent},
   {path:'Personajes Agregados',component:ArmaduraComponetComponent},
   {path:'home',component:HomeComponetComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
