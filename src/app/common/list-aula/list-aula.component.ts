import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ListBgComponent } from "../../components/list-bg/list-bg.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ImgDeleteComponent } from "../../components/images/img-delete/img-delete.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeDivCardComponent } from '../../components/reorganize-div-card/reorganize-div-card.component';


@Component({
  selector: 'app-list-aula',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ListBgComponent, ImgEditComponent, ImgDeleteComponent, ListDivComponent, 
    ReorganizesMainComponent, TitlesComponent, ReorganizeDivCardComponent],
  templateUrl: './list-aula.component.html'
})
export class ListAulaComponent {

}
