import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', status: 'Ativo' },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: 'Inativo' },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: 'Ativo' },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', status: 'Ativo' },
    { nome: 'Vilmar de Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Inativo' },
    { nome: 'Rafael Bonamigo', cidade: 'Porto Alegre', estado: 'RS', status: 'Ativo' },
    { nome: 'Juarez Bonamigo', cidade: 'Casca', estado: 'RS', status: 'Ativo' },
    { nome: 'Ana Maria Frutas', cidade: 'Goiânia', estado: 'GO', status: 'Ativo' }
  ];

}
