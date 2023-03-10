import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../services/servicio.service';
import { Personaje } from '../models/personajes.model';
import { PersonajesService } from '../services/personaje-servis.service';

@Component({
  selector: 'app-armadura-componet',
  templateUrl: './armadura-componet.component.html',
  styleUrls: ['./armadura-componet.component.css']
})
export class ArmaduraComponetComponent implements OnInit {
  personaje:Personaje[]=[];
  constructor(private router:Router, private miServicio:ServicioService, private traepersonajeService: PersonajesService){}
  
  ngOnInit(): void {}

  volverHome(){
    this.router.navigate(['']);
  }


  agregar(){
    let personajeEnviado= new Personaje(this.cuadroNombre, this.cuadroApellido,this.cuadroPoder,this.cuadroEdad);
    this.traepersonajeService.agregarPersonajeService(personajeEnviado)
    this.miServicio.mustraMensaje("Nombre de personaje: " + personajeEnviado.nombre)
    this.personaje.push(personajeEnviado);
    this.router.navigate(['']);
   }
   
  
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroPoder:string="";
  cuadroEdad:number=0;
  
}

