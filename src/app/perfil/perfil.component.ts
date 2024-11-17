import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  nombres: string[] = ['Juan', 'alberto'];

  constructor() { }

  cambiarNombre() {
    this.nombres[0] = 'Carlos';
    console.log(this.nombres);
  }
}
