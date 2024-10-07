import { vehiculo } from "./vehiculo";

export class Moto extends vehiculo {
    private cilindrada: number;
    private color: string;
    

    constructor (cilindrada: number, color: string, marca:string, modelo:string, patente:string) {
        super(marca,modelo,patente);
        this.cilindrada = cilindrada;
        this.color = color;
        
    }

    public getCilindrada(): number {
        return this.cilindrada;
    }

    public setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    
}

