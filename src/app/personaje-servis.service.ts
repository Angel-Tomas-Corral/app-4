import { ServicioService } from './servicio.service';
import { Injectable } from '@angular/core';
import { personaje } from "./personajes.model";
@Injectable()
export class  PersonajesService{

constructor(private servicoVentana: ServicioService){

}


    personaje:personaje[]=[
        new personaje("goblin slayer","no tiene","ninguno",21),
        new personaje("gordon","freman","traje de protecion",27),
        new personaje("angel","corral","desconocido",20),
        new personaje("alerbert","wesker","uroboros",30)
    ];




    agregarPersonajeService(personaje:personaje){
        this.servicoVentana.mustraMensaje("Personaje agregado: " + personaje.nombre)
        this.personaje.push(personaje);
        console.log("dasd")
    }
}