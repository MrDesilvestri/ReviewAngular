import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-nombres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-nombres.component.html',
  styleUrl: './lista-nombres.component.css'
})
export class ListaNombresComponent {

  nombres: string[] = ['Juan', 'alberto'];
  nombre2: string | null = null;
  constructor() { }

  filtrarNombre(nombre:string) {
    const resultado = this.nombres.find((n) => n.toLowerCase() === nombre.toLowerCase());
    this.nombre2 = resultado ? resultado : 'No encontrado';
  }
}
