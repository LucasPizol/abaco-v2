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
import { GradeService } from '../../api/grade/grade.service';
import { TableComponent } from "../../components/table/table.component";
import { ImgDeleteComponent } from "../../components/images/img-delete/img-delete.component";
import { IGradeModel } from '../../api/grade/IGrade';
import { IStudentModel } from '../../api/student/Istudent';



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
    { key: 'nome', label: 'Nome Completo' },
    { key: 'id', label: 'Registro Acadêmico'},
    { key: 'email', label: 'Email' },
    { key: 'data_nascimento', label: 'Data de Nascimento' },
    { key: 'situacao', label: 'Situação' },
    { key: 'nota', label: 'Notas '}
  ];
  data: IStudentModel[] = [];

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private gradeService: GradeService) {}

  async ngOnInit() {
    await this.loadGrades();
  }

  async loadGrades() {
    try {
      const data  = await this.gradeService.getGrades(2);
      this.data = data.map(({ data_nascimento, ...data }) => ({
        ...data,
        data_nascimento: new Date(data_nascimento).toLocaleDateString('pt-br'),
      }));
    } catch (error) {
      console.error('Erro ao carregar estudantes:', error);
    }
  }
}
