/*Ejercicio 5
• Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja
• incorporando los conceptos nuevos:
• Encapsulamiento y composicion.

• Mandar el link al repositorio de GitHub
Aclaración: no hay una sola forma de tener bien
los ejercicios → lo que importa es saber
justificar bien las decisiones que se tomen*/ 

import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";

export class RegistroAutomotor{
    private nombre : string;
    private autos: Auto[];
    private camiones: Camion[]; 
    private motos: Moto[];    

    constructor(nombre : string, listaAuto?:Auto[], listaCamion?:Camion[], listaMoto?:Moto[]) {
        this.nombre = nombre;

        if (listaAuto != undefined){
            this.autos = listaAuto;
        }else {
            this.autos = [];
        }
        if (listaCamion != undefined){
            this.camiones = listaCamion;
        }else {
            this.camiones = [];
        }
        if (listaMoto != undefined){
            this.motos = listaMoto;
        }else{
            this.motos = [];
        }
    }

//METODOS     

getNombre() : string {
    return this.nombre;
} 

agregarAuto(auto: Auto):void{
    this.autos.push(auto);
 }  

agregarCamion(camion: Camion):void{
    this.camiones.push(camion);
}

agregarMoto(moto: Moto):void{
    this.motos.push(moto); 
}

listaAutos(): Auto[] {
    return this.autos;  
}

listaCamiones(): Camion[] {
    return this.camiones;  
}

listaMotos(): Moto[] {
    return this.motos;  
}


matricularAuto(auto: Auto){
    this.autos.push;
}

matricularCamion(camion: Camion){
    this.camiones.push(camion);
}

matricularMoto(moto: Moto){
    this.motos.push(moto);
}


darDeBajaAuto(patente: string): void{
    this.autos = this.autos.filter(auto => auto.getPatente() !== patente); 
    return console.log(patente, "se ha dado de baja");
}

darDeBajaCamion(patente: string): void{
    this.camiones = this.camiones.filter(camion => camion.getPatente() !== patente); 
    return console.log(patente, "se ha dado de baja");
}

darDeBajaMoto(patente: string): void{
    this.motos = this.motos.filter(moto => moto.getPatente() !== patente); 
    return console.log(patente, "se ha dado de baja");
}

modificarPatente(patente: string, nuevaPatente: string): void{
    const patenteMoto = this.motos.find(buscarPatente => buscarPatente.getPatente() === patente);
    if (patenteMoto) {
        patenteMoto.setPatente(nuevaPatente);
    } 

}

}
    
    
