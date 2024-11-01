import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ImgDeleteComponent } from "../../components/images/img-delete/img-delete.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { TableComponent } from "../../components/table/table.component";
import { StudentService } from '../../api/studant/studant.services';


@Component({
  selector: 'app-list-est',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ImgEditComponent, ImgDeleteComponent, ListDivComponent,
    ReorganizesMainComponent, TitlesComponent, TableComponent],
  templateUrl: './list-est.component.html'
})
export class ListEstComponent {
  headers = [{ key: 'id', label: 'Registro Academico' }, { key: 'nome', label: 'Nome Completo' },{key:'email' ,label:'Email'}, {key:'data_nascimento' ,label:'Data Cadastro'}, {key:'situacao' ,label:'Situação'}];
  data: any[] = [];
  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private studentService: StudentService) { }

  async ngOnInit() {
    await this.loadStudents();
  }

  async loadStudents() {
    try {
      this.data = await this.studentService.getStudents();
    } catch (error) {
      console.error('Erro ao carregar estudantes:', error);
    }
  }
}
