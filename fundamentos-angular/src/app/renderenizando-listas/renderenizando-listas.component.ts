import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderenizando-listas',
  templateUrl: './renderenizando-listas.component.html',
  styleUrls: ['./renderenizando-listas.component.css']
})
export class RenderenizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "celulcar XL", descricao: "um celulcar grande", esgotado: false},
    {id: 2, nome: "celulcar normal", descricao: "", esgotado: false},
    {id: 3, nome: "celulcar Mini", descricao: "um celular pequeno", esgotado: true}
  ]  

}
