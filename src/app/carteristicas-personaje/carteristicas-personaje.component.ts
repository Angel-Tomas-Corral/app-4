import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carteristicas-personaje',
  templateUrl: './carteristicas-personaje.component.html',
  styleUrls: ['./carteristicas-personaje.component.css']
})
export class CarteristicasPersonajeComponent {
  @Output() carateristicasPersonaje = new EventEmitter<string>();

  agregaCaracteristicas(value: string){

    //this.carateristicasPersonaje.emit(value);
  }



}
