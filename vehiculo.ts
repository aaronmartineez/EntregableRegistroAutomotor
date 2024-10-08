export class vehiculo {
    protected marca: string;
    protected modelo: string;
    protected patente: string;

    constructor (marca:string, modelo: string, patente: string ) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }    
     
}