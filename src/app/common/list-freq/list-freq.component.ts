import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component';
import { ListBgComponent } from '../../components/list-bg/list-bg.component';
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component';
import { ImgDeleteComponent } from '../../components/images/img-delete/img-delete.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { SelectShortComponent } from '../../components/select-short/select-short.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { ImgViewComponent } from '../../components/images/img-view/img-view.component';
import { TableComponent } from '../../components/table/table.component';
import { TablerowComponent } from '../../components/table/tablerow/tablerow.component';
import { TableHeaderComponent } from '../../components/table/table-header/table-header.component';
import { TableCellComponent } from '../../components/table/table-cell/table-cell.component';

@Component({
  selector: 'app-list-freq',
  standalone: true,
  imports: [
    AsideComponent,
    PesquisaComponent,
    ListBgComponent,
    ImgEditComponent,
    ImgDeleteComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    SelectShortComponent,
    ReorganizeInputComponent,
    ImgViewComponent,
    TableComponent,
    TablerowComponent,
    TableHeaderComponent,
    TableCellComponent,
  ],
  templateUrl: './list-freq.component.html',
})
export class ListFreqComponent {}
