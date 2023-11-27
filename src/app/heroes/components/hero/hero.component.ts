import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  // los getters son funciones que se interpretan como propiedades de la clase
  // Se crea como una funcion, solo se coloca la palabra reservada 'get'
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Superman';
  }

  changeAge(): void{
    this.age = 235;
  }

  resetValues(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
