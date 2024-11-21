export class Barco{
    tamano: number
    tocado: number
    hundido: boolean
    private posicionbarco: Set<number>;

constructor(tamano:number,tocado:number,posicionbarco:number, hundido:boolean){
    this.tamano=tamano;
    this.tocado=tocado;
    this.posicionbarco = new Set<number>();
    this.hundido=hundido;
}}