import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  public title: string = 'Hola Powers';
  public powers: string[] = ['Fly', 'X-ray vision', 'Super strength', 'Super speed'];

  addPower(event: Event): void {
    const input = event.target as HTMLInputElement; // Aseguramos el tipo
    const power = input.value;

    if (power && !this.powers.includes(power)) {
      this.powers.push(power);
      input.value = ''; // Limpia el input después de agregarlo
    }
  }

  removePower(index: number): void {
    this.powers.splice(index, 1); // Elimina el elemento en la posición indicada
  }
}
