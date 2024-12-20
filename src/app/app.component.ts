import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Casilla } from '../models/Casilla'
import { Barco } from '../models/Barco';
import { Coordenada } from '../models/Coordenada';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tablero: Casilla[][] = [[new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla],
                          [new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla,new Casilla, new Casilla]];
  title = 'Hundir_La_Flota';
  flota:Barco[]=[];
  numeroDeCoordenadasDeFlota:number=0;
  numeroDeDisparosAcertados:number=0;

  constructor(){
    this.posicionarBarco(3, 1, 2, 'H');
    this.posicionarBarco(2, 2, 2, 'V');
    this.posicionarBarco(1, 5, 8, 'V');
  }

  disparar(x: number,y: number) {
    if(!this.tablero[x][y].disparado&&this.numeroDeCoordenadasDeFlota!==this.numeroDeDisparosAcertados){
      if(this.comprobarDisparo(x,y)){
        this.tablero[x][y].url = "\\img\\tocado.png";
        this.tablero[x][y].disparado = true;
        this.tablero[x][y].tocado = true;
        this.numeroDeDisparosAcertados++;
      }else{
        //agua
        this.tablero[x][y].disparado = true;
        this.tablero[x][y].tocado = false;
        this.tablero[x][y].url = "\\img\\agua.png";
      }
    }

    if(this.numeroDeCoordenadasDeFlota===this.numeroDeDisparosAcertados){
      alert("HAS GANADO");
    }
    
  }

  comprobarDisparo(x:number, y:number):boolean{
    console.log("XY: " + x + "," + y)
    var tocado:boolean = false;
    for(var i:number=0; i<this.flota.length;i++){
      for(var j:number=0; j<this.flota[i].posiciones.length&&!tocado;j++){
        console.log("asdfasdf")
        console.log(this.flota[i].posiciones[j])
        if(this.flota[i].posiciones[j].x === x && this.flota[i].posiciones[j].y === y){
          tocado=true;
        }
      }
    }
    return tocado;
  }

  posicionarBarco(tamano:number, x:number, y:number, orientacion:string) {
    var sheep:Barco;
    var coordenadas:Coordenada[]=[];
    for(var i:number=0; i<tamano; i++){
      if(orientacion='V'){
        coordenadas.push(new Coordenada(x,y+i));
      }else{
        coordenadas.push(new Coordenada(x+i,y));
      }
    }

    sheep = new Barco(coordenadas);

    this.flota.push(sheep);
    this.numeroDeCoordenadasDeFlota = this.numeroDeCoordenadasDeFlota + tamano;

    console.log(this.flota)
  }
}
