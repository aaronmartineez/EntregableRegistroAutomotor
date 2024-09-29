import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";
import { RegistroAutomotor } from "./RegistroAutomotor";


//CREO LOS VEHICULOS
const auto1 = new Auto("Volkswagen", "Gol", "AHT321"); 
const auto2 = new Auto("Fiat", "Punto","KLJ745 ");
const auto3 = new Auto("Honda", "Civic", "FJK367");

const camion1 = new Camion("Iveco", "Daily", "AB-345-FR"); 
const camion2 = new Camion("Scania", "Serie-R","SD-532-HG");
const camion3 = new Camion("Renault", "Trucks", "BC-238-FY");

const moto1 = new Moto("Honda", "Xr", "FLJ345"); 
const moto2 = new Moto("Yamaha", "Fz","HJT235");
const moto3 = new Moto("Kawasaki", "Kx", "LMN842");

//CREO EL REGISTRO AUTOMOTOR
const registroAutomotor = new RegistroAutomotor("registro automotor");

//INGRESO AUTOS CON METODO agregarAuto() 
registroAutomotor.agregarAuto(auto1);
registroAutomotor.agregarAuto(auto2);
registroAutomotor.agregarAuto(auto3);

//INGRESO CAMIONES CON METODO agregarCamion()
registroAutomotor.agregarCamion(camion1);
registroAutomotor.agregarCamion(camion2);
registroAutomotor.agregarCamion(camion3);

//INGRESO MOTOS CON METODO agregarMoto()
registroAutomotor.agregarMoto(moto1);
registroAutomotor.agregarMoto(moto2);
registroAutomotor.agregarMoto(moto3);

/*AUTOS INGRESADOS CON SUS DATOS 
console.log(`AUTO: Marca: ${auto1.getMarca()} Modelo: ${auto1.getModelo()} Patente ${auto1.getPatente()} - ingresado`);
console.log(`AUTO: Marca: ${auto2.getMarca()} Modelo: ${auto1.getModelo()} Patente ${auto1.getPatente()} - ingresado`);
console.log(`AUTO: Marca: ${auto3.getMarca()} Modelo: ${auto1.getModelo()} Patente ${auto1.getPatente()} - ingresado`);


//CAMIONES INGRESADOS CON SUS DATOS
console.log(`CAMION: Marca: ${camion1.getMarca()} Modelo: ${camion1.getModelo()} Patente ${camion1.getPatente()} - ingresado`);
console.log(`CAMION: Marca: ${camion2.getMarca()} Modelo: ${camion2.getModelo()} Patente ${camion2.getPatente()} - ingresado`);
console.log(`CAMION: Marca: ${camion3.getMarca()} Modelo: ${camion3.getModelo()} Patente ${camion3.getPatente()} - ingresado`);
*/

//LISTA VEHICULOS DENTRO DE REGISTRO AUTOMOTOR
console.log(registroAutomotor.listaAutos());
console.log(registroAutomotor.listaCamiones());
console.log(registroAutomotor.listaMotos());


//VEHICULOS DADOS DE BAJA
registroAutomotor.darDeBajaAuto("AHT321");
registroAutomotor.darDeBajaCamion("SD-532-HG");
registroAutomotor.darDeBajaMoto("LMN842");

//NUEVA LISTA VEHICULOS DENTRO DE REGISTRO AUTOMOTOR
console.log(registroAutomotor.listaAutos());
console.log(registroAutomotor.listaCamiones());
console.log(registroAutomotor.listaMotos());