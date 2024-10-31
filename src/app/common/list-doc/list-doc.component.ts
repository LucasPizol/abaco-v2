import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component';
import { ImgDeleteComponent } from '../../components/images/img-delete/img-delete.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-list-doc',
  standalone: true,
  imports: [
    AsideComponent,
    PesquisaComponent,
    ImgEditComponent,
    ImgDeleteComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    TableComponent,

  ],
  templateUrl: './list-doc.component.html',
})
export class ListDocComponent {
  headers = ['Nome', 'Data', 'Situação'];
  data = [
    { Nome: 'Pedro', Data: '16 set. 2023', 'Situação': "Matriculado" }
  ];
}
