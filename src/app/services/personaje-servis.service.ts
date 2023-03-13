import { ServicioService } from './servicio.service';
import { Injectable } from '@angular/core';
import { Personaje } from "../models/personajes.model";

@Injectable()
export class  PersonajesService{

constructor(private servicoVentana: ServicioService){}

    arrPersonajes:Personaje[]=[
        new Personaje("goblin slayer","no tiene","ninguno",21),
        new Personaje("gordon","freman","traje de protecion",27),
        new Personaje("angel","corral","desconocido",20),
        new Personaje("alerbert","wesker","uroboros",30)
    ];

    agregarPersonajeService(personaje: Personaje){
        this.arrPersonajes.push(personaje)
    }
}
       

// this.servicoVentana.mustraMensaje("Personaje agregado: ")
//         this.arrPersonajes.push(arrPersonajes);
//         return this.arrPersonajes;