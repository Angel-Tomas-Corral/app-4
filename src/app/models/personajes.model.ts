export class Personaje {
    constructor(nombre:string, apellido:string, poder:string, edad:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.poder=poder;
        this.edad=edad;
    }
    nombre: string="";
    apellido:string="";
    poder:string="";
    edad:number=0;
}