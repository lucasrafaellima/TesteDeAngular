import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1994-02-04";
  urlImagem = "/assets/kimetsu.png";
  mostrarDataNascimento() {
    alert(`A data de nascimento é: ${this.dataNascimento}`);
  }
}
