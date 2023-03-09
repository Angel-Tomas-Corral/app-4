import { Component, Input } from '@angular/core';
import { Personaje } from '../models/personajes.model';

@Component({
  selector: 'app-list-personajes-c',
  templateUrl: './list-personajes-c.component.html',
  styleUrls: ['./list-personajes-c.component.css']
})
export class ListPersonajesCComponent {
@Input() personaje: Personaje;
@Input() i:number;
ArrayCaracteristica = [''];
  
  agregaCaracteristicas(NuevaC: string){
    this.ArrayCaracteristica.push(NuevaC);
  }
}


