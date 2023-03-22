import { Router, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonajesCComponent } from './list-personajes-c/list-personajes-c.component';
import { CarteristicasPersonajeComponent } from './carteristicas-personaje/carteristicas-personaje.component';
import { HomeComponetComponent } from './home-componet/home-componet.component';
import { ArmaduraComponetComponent } from './armadura-componet/armadura-componet.component';
import { ServicioService } from './services/servicio.service';
import { PersonajesService } from './services/personaje-servis.service';
import { ActualizaComponetComponent } from './actualiza-componet/actualiza-componet.component';




//armadura compnet es personajes agregados//

const appRoutes:Routes=[  

  {path:'', component: HomeComponetComponent},
  {path:'12', component: ActualizaComponetComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListPersonajesCComponent,
    CarteristicasPersonajeComponent,
    HomeComponetComponent,
    ArmaduraComponetComponent,
    ActualizaComponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ServicioService, PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
