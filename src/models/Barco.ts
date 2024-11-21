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
}
  
  posicionarbarco(inicio: number, direccion: 'horizontal' | 'vertical', tamañoTablero: number): boolean {
   
    for (let i = 0; i < this.tamano; i++) {
        let posicion;
        if (direccion === 'horizontal') {
            posicion = inicio + i; 
        } else {
            posicion = inicio + i * tamañoTablero; 
        }

        
        if (posicion < 0 || posicion >= tamañoTablero * tamañoTablero) {
            return false; 
        }
        this.posicionbarco.add(posicion);
    }
    return true; 
}
}