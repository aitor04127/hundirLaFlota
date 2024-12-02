import { Coordenada } from "./Coordenada";

export class Barco{
    posiciones:Coordenada[];

    constructor(posiciones:Coordenada[]){
        this.posiciones=posiciones;
    }

    getPosiciones():Coordenada[]{
        return this.posiciones;
    }
    setPosiciones(posiciones:Coordenada[]){
        this.posiciones=posiciones;
    }
}