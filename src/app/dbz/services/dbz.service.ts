import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 8500
  }, {
    id: uuid(),
    name: 'Trunks',
    power: 12000
  }]

  addCharacter(newCharacter: Character){
    let character: Character = {...newCharacter, id: uuid()};
    this.characters.push(character);
  }

  // onDeleteCharacter(index: number){
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(uuid: string): void {
    this.characters = this.characters.filter((character) => {
      return character.id !== uuid;
    })
  }

}
