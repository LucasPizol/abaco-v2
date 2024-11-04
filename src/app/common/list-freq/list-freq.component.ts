import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { ImgViewComponent } from '../../components/images/img-view/img-view.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-list-freq',
  standalone: true,
  imports: [
    AsideComponent,
    PesquisaComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    ReorganizeInputComponent,
    ImgViewComponent,
    TableComponent,
  ],
  templateUrl: './list-freq.component.html',
})
export class ListFreqComponent {
  headers = [];
  data = [
    {"Registro Academico": 23000102, "Nome Completo": 'WEverton1', "Faltas Totais": 0, Situação: 'Matriculado'},
    {"Registro Academico": 23000102, "Nome Completo": 'WEverton2', "Faltas Totais": 9, Situação: 'Matriculado'},
    {"Registro Academico": 23000102, "Nome Completo": 'WEverton3', "Faltas Totais": 2, Situação: 'Pendente'},
    {"Registro Academico": 23000102, "Nome Completo": 'WEverton4', "Faltas Totais": 0, Situação: 'Desistência'},
    {"Registro Academico": 23000102, "Nome Completo": 'WEverton5', "Faltas Totais": 0, Situação: 'Matriculado'},
    {"Registro Academico": 23000102, "Nome Completo": 'WEverton', "Faltas Totais": 1, Situação: 'Matriculado'},
  ];
}
