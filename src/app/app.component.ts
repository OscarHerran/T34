import { Component } from '@angular/core';
import { isObservable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//DECLARAREMOS LOS ATRIBUTOS Y MÉTODOS EN EL ÁREA DE CLASS
export class AppComponent {
  title = 'Casio Calculator';
  numero2 : any = 0;
  numero1 : any = 0;
  aux : any = 0;

  result : any = "";
  opcion : any = 0;
  operadores : any = "";

  // LOS MÉTODOS DEBEN DE DECLARARSE DENTRO DEL ÁMBITO DEL APP-COMPONENT, CASO CONTRARIO NO FUNCIONAN Y TORNA ERROR

  //FUNCIONES DE LA CALCULADORA BÁSICA

  //BORRADO
  deleting() {
    this.result = " ";
  }

  //RECOGE LOS DATOS QUE LE INDIQUEMOS POR PANTALLA
  calculum(value : any) {
    this.aux = value;
    if(this.aux == '.') {
      this.result += '.';
    } else {
      this.opcion = value;
      this.result += this.opcion;
    }

    this.numero2 = this.result;
  }

  //FUNCIÓN PARA TOMAR EL OPERADOR Y REALIZAR LA MISMA

  operador(opera : any) {
    this.numero1 = this.numero2;//ALMACENAMOS EL VALOR 1
    this.deleting();
    this.operadores = opera;
  }

  opera() {
    switch(this.operadores) {
      case "divide" :
        this.result = (this.numero1 / this.numero2);
      break;
      case "multiplica" :
        this.result = this.numero1 * this.numero2;
      break;
      case "raiz" :
        this.result = Math.sqrt(this.numero1);
      break;
      case "residuo" :
        this.result = this.numero1 % this.numero2;
      break;
      case "resta" :
        this.result = (this.numero1 - this.numero2);
      break;
      case "potencia" :
        this.result = Math.pow(this.numero1, this.numero2);
      break;
      case "suma" :
        this.result = (parseFloat(this.numero1) + parseFloat(this.numero2));
      break;
      case "negativo" :
        this.result = (-(this.numero1));
      break;
      default:
        this.result = this.deleting();
      break;
    }
  }

  //LA FUNCIÓN "EQUALS ES LA QUE DESENCADENA TODOS OS EVENTOS", SIN ELLA NO SE EJECUTA NINGUUNA OPERACIÓN
  equals() {
    this.deleting();
    return this.opera();;
  }
}



