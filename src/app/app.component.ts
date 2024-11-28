import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Casilla } from '../models/Casilla'

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










  disparar(x: number,y: number) {
    this.tablero[x][y].url = "\\img\\tocado.png";
    console.log("X: " + x + " Y: " + y);
  }
}
