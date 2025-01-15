import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  public selectedCharacter?: Character; // Personaje seleccionado
  constructor( private dbzService: DbzService ) {}


  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.addCharacter( character );
  }

  // Método para manejar la selección de un personaje por ID
  onSelectCharacter(id: string): void {
    const character = this.dbzService.getCharacterById(id);
    if (character) {
      this.selectedCharacter = character;
    } else {
      console.warn(`No se encontró el personaje con ID: ${id}`);
    }
  }
}
