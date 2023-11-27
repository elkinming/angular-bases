import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  // Es necesario exportar los componentes del modulo que se quiere que sean visibles en el modulo padre
  exports:[
    CounterComponent
  ]
})
export class CounterModule {

}
