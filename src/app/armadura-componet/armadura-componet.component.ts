import { DataServisService } from './../data-servis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personaje } from '../personajes.model';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-armadura-componet',
  templateUrl: './armadura-componet.component.html',
  styleUrls: ['./armadura-componet.component.css']
})
export class ArmaduraComponetComponent implements OnInit {
  personaje:personaje[]=[];
  constructor(private router:Router, private miServicio:ServicioService, private agregarServis:DataServisService){}
  ngOnInit(): void {
    
  }

  volverHome(){
    this.router.navigate(['']);
  }


  agregar(){
    let personajeEnviado= new personaje(this.cuadroNombre, this.cuadroApellido,this.cuadroPoder,this.cuadroEdad);
    this.miServicio.mustraMensaje("Nombre de personaje: " + personajeEnviado.nombre)
    this.personaje.push(personajeEnviado);
    this.router.navigate(['']);
   }
   
  
  
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroPoder:string="";
  cuadroEdad:number=0;
  
  

}

