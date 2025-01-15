import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0
  }];
  @Input()
  public selectedCharacter?: Character;  // Recibe el personaje seleccionado

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  @Output()
  public onSelect: EventEmitter<string> = new EventEmitter(); // Emite personaje seleccionado

  onDeleteCharacter( id?: string ):void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }

  // Método para emitir el personaje seleccionado
  selectCharacter(id?: string): void {
    console.log('Id Personaje Seleccionado:', id);
    if (!id) return;
    this.onSelect.emit(id);
  }
}
