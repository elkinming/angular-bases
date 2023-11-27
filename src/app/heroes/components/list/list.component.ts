import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listHeroes = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'She Hulk'];
  deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.listHeroes.pop();
  }
}
