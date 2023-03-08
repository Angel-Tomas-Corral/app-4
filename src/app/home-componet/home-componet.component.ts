import { Component, OnInit } from '@angular/core';
import { personaje } from '../personajes.model';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home-componet',
  templateUrl: './home-componet.component.html',
  styleUrls: ['./home-componet.component.css']
})
export class HomeComponetComponent implements OnInit {
  titulo = 'Lista de personajes';

constructor(private miServicio:ServicioService){

}
  ngOnInit(): void {
    
  }

personaje:personaje[]=[
  new personaje("goblin slayer","no tiene","ninguno",21),
  new personaje("gordon","freman","traje de protecion",27),
  new personaje("angel","corral","desconocido",20),
  new personaje("alerbert","wesker","uroboros",30)
];

 agregar(){
  let personajeEnviado= new personaje(this.cuadroNombre, this.cuadroApellido,this.cuadroPoder,this.cuadroEdad);
  this.miServicio.mustraMensaje("Nombre de personaje: " + personajeEnviado.nombre)
  this.personaje.push(personajeEnviado);
 }
 


cuadroNombre:string="";
cuadroApellido:string="";
cuadroPoder:string="";
cuadroEdad:number=0;


}


