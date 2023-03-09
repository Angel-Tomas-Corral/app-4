import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonajesCComponent } from './list-personajes-c/list-personajes-c.component';
import { CarteristicasPersonajeComponent } from './carteristicas-personaje/carteristicas-personaje.component';
import { HomeComponetComponent } from './home-componet/home-componet.component';
import { ArmaduraComponetComponent } from './armadura-componet/armadura-componet.component';
import { ServicioService } from './services/servicio.service';




//armadura compnet es personajes agregados//

@NgModule({
  declarations: [
    AppComponent,
    ListPersonajesCComponent,
    CarteristicasPersonajeComponent,
    HomeComponetComponent,
    ArmaduraComponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
