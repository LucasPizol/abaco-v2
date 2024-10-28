import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ImgDeleteComponent } from "../../components/images/img-delete/img-delete.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';


@Component({
  selector: 'app-list-est',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ImgEditComponent, ImgDeleteComponent, ListDivComponent, 
    ReorganizesMainComponent, TitlesComponent],
  templateUrl: './list-est.component.html'
})
export class ListEstComponent {

}
