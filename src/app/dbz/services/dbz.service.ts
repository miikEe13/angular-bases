import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
      habilidades: [
        { name: 'Kamehameha', damage: 200, type: 'Energy' },
        { name: 'Destructo Disk', damage: 300, type: 'Energy' },
      ],
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
      habilidades: [
        { name: 'Kamehameha', damage: 500, type: 'Energy' },
        { name: 'Spirit Bomb', damage: 800, type: 'Energy' },
        { name: 'Instant Transmission', damage: 100, type: 'Speed' },
      ],
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
      habilidades: [
        { name: 'Big Bang Attack', damage: 600, type: 'Energy' },
        { name: 'Final Flash', damage: 700, type: 'Energy' },
        { name: 'Galick Gun', damage: 500, type: 'Energy' },
      ],
    },
  ];

  addCharacter( character: Character ):void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index:number ) {
  // this.characters.splice(index,1);
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  // Nueva función para obtener un personaje por ID
  getCharacterById(id: string): Character | undefined {
    const character = this.characters.find(character => character.id === id);
    console.log('Personaje Encontrado:', character);
    return character;
  }
}
