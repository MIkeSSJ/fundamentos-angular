import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {
  celulares: Celular [] = [
    {id:1, nome:"Celular Xl", descricao:"UM celular grande", esgotado: false},
    {id:1, nome:"Celular normal", esgotado: false},
    {id:1, nome:"Celular mini", descricao:"UM celular pequeno", esgotado: true}
  ]

}
