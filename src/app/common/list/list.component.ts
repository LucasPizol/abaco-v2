import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ListBgComponent } from "../../components/list-bg/list-bg.component";
import { ImgEditComponent } from "../../components/img-edit/img-edit.component";
import { ImgDeleteComponent } from "../../components/img-delete/img-delete.component";
import { MainDivComponent } from "../../components/main-div/main-div.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ListBgComponent, ImgEditComponent, ImgDeleteComponent, MainDivComponent, ReorganizesMainComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
