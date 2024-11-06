import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { ITableHeader } from '../../interfaces/TableHeader';
import { IGradeModel } from '../../api/grade/IGrade';
import { GradeService } from '../../api/grade/grade.service';
import { response } from 'express';
import { TableComponent } from "../../components/table/table.component";
import { ImgDeleteComponent } from "../../components/images/img-delete/img-delete.component";



@Component({
  selector: 'app-launch-notas',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ImgEditComponent, ListDivComponent,
    ReorganizesMainComponent, TitlesComponent, ReorganizeInputComponent,
    BtnDownComponent, InputsComponent, TableComponent, ImgDeleteComponent],
  templateUrl: './launch-notas.component.html'
})
export class LaunchNotasComponent {
  headers: ITableHeader<IGradeModel> = [
    { key: 'id', label: 'Registro Acadêmico' },
    { key: 'notas', label: 'Nome Completo' },
    { key: 'studants.nome', label: 'Nome'},
    { key: 'studants.email', label: 'Email' },
    { key: 'studants.data_nascimento', label: 'Data de Nascimento' },
    { key: 'studants.situacao', label: 'Situação' }
  ];
  data: IGradeModel[] = [];
  page = 0;
  pageSize = 10;
  filters = {};

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private gradeService: GradeService) {}

  async ngOnInit() {
    await this.loadGrades();
  }

  async loadGrades() {
    try {
      const { data } = await this.gradeService.getGrades({
        page: this.page,
        pageSize: this.pageSize,
        filters: this.filters,
      });
      this.data = data;
    } catch (error) {
      console.error('Erro ao carregar estudantes:', error);
    }
  }
}
