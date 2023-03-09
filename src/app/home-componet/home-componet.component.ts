import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personajes.model';
import { PersonajesService } from '../services/personaje-servis.service';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-home-componet',
  templateUrl: './home-componet.component.html',
  styleUrls: ['./home-componet.component.css']
})
export class HomeComponetComponent implements OnInit {
  titulo = 'Lista de personajes';

constructor(private miServicio: ServicioService, private traepersonajeService: PersonajesService ){}

  ngOnInit(): void {}

personaje: Personaje[]=[
  new Personaje("goblin slayer","no tiene","ninguno",21),
  new Personaje("gordon","freman","traje de protecion",27),
  new Personaje("angel","corral","desconocido",20),
  new Personaje("alerbert","wesker","uroboros",30)
];

 agregar(){
  let personajeEnviado= new Personaje(this.cuadroNombre, this.cuadroApellido,this.cuadroPoder,this.cuadroEdad);
 // this.miServicio.mustraMensaje("Nombre de personaje: " + personajeEnviado.nombre)
 //this.traepersonajeService.agregarPersonajeService(personaje:personaje)
  this.personaje.push(personajeEnviado);
 
 }
 


cuadroNombre:string="";
cuadroApellido:string="";
cuadroPoder:string="";
cuadroEdad:number=0;


}


