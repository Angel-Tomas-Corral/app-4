import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personajes.model';
import { PersonajesService } from '../services/personaje-servis.service';

@Component({
  selector: 'app-home-componet',
  templateUrl: './home-componet.component.html',
  styleUrls: ['./home-componet.component.css']
})
export class HomeComponetComponent implements OnInit {

  titulo = 'Lista de personajes';
  arrPersonajes: Personaje[] = [];

  constructor(private traepersonajeService: PersonajesService) {
   }

  ngOnInit(): void {
    this.arrPersonajes = this.traepersonajeService.arrPersonajes
  }

  agregarPersonaje() {
    let personajeEnviado = new Personaje(this.cuadroNombre, this.cuadroApellido, this.cuadroPoder, this.cuadroEdad);
    // this.traepersonajeService.agregarPersonajeService(personajeEnviado)
    this.arrPersonajes.push(personajeEnviado);
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroPoder: string = "";
  cuadroEdad: number = 0;

}


