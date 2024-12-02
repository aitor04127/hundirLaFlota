export class Barco{
    tamano: number
    tocado: number
    hundido: boolean
    private posicionbarco: Set<number>;

constructor(tamano:number,tocado:number,posicionbarco:number, hundido:boolean){
    this.tamano=tamano;
    this.tocado=0;
    this.posicionbarco = new Set<number>();
    this.hundido=false;
}
public posicionarBarco(inicio: number, direccion: 'horizontal' | 'vertical', tamanoTablero: number): boolean {
    
    for (let i = 0; i < this.tamano; i++) {
        let posicion: number;

        if (direccion === 'horizontal') {
            posicion = inicio + i; 
        } else { 
            posicion = inicio + i * tamanoTablero; 
        }

        if (posicion < 0 || posicion >= tamanoTablero * tamanoTablero) {
            return false; 
        }
        this.posicionbarco.add(posicion);
    }
    return true; 
}

public recibirImpacto(posicion: number): boolean {
    if (this.posicionbarco.has(posicion)) {
        this.tocado++;
        if (this.tocado === this.tamano) {
            this.hundido = true; 
        }
        return true; 
    }
    return false; 
}
}