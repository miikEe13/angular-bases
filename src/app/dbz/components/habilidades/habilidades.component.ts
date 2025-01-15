import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { Character, Habilidad } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  @Input() public selectedCharacter?: Character; // Recibe el personaje seleccionado

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['selectedCharacter'] && this.selectedCharacter) {
  //     console.log('Personaje Recibido en habilidades:', this.selectedCharacter);
  //   }
  // }

  public nuevaHabilidad: Habilidad = {
    name: '',
    damage: 0,
    type: '',
  };

  agregarHabilidad(): void {
    if (!this.selectedCharacter) return;

    // Asegurarnos de que el personaje tiene un array de habilidades
    if (!this.selectedCharacter.habilidades) {
      this.selectedCharacter.habilidades = [];
    }

    // Agregar la nueva habilidad al personaje
    this.selectedCharacter.habilidades.push({ ...this.nuevaHabilidad });

    // Limpiar el formulario
    this.nuevaHabilidad = {
      name: '',
      damage: 0,
      type: '',
    };
  }
  // Método para calcular el poder total
  get totalPower(): number {
    if (!this.selectedCharacter?.habilidades) {
      return 0; // Si no hay habilidades, el poder total es 0
    }

    // Sumar los poderes de todas las habilidades
    return this.selectedCharacter.habilidades.reduce((total, habilidad) => {
      return total + (habilidad.damage || 0); // Si `power` no está definido, se asume 0
    }, 0);
  }
}
