import { personaje } from './../personajes.model';
import { Component, Input } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-list-personajes-c',
  templateUrl: './list-personajes-c.component.html',
  styleUrls: ['./list-personajes-c.component.css']
})
export class ListPersonajesCComponent {
@Input() personaje:personaje;
@Input() i:number;
ArrayCaracteristica = [''];
  
  agregaCaracteristicas(NuevaC: string){
    this.ArrayCaracteristica.push(NuevaC);
  }
}


