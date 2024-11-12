import { Component } from '@angular/core';
import { ITableHeader } from '../../interfaces/TableHeader';
import { GradeService } from '../../api/grade/grade.service';
import { IGradeModel } from '../../api/grade/IGrade';
import { IStudentModel } from '../../api/student/Istudent';
import { ListDivComponent } from "../../components/list-div/list-div.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from "../../components/titles/titles.component";
import { GridComponent } from "../../components/grid/grid.component";
import { InputsComponent } from "../../components/inputs/inputs.component";
import { TableComponent } from "../../components/table/table.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ReorganizeInputComponent } from "../../components/reorganize-input/reorganize-input.component";
import { BtnDownComponent } from "../../components/buttons/btn-down/btn-down.component";

@Component({
  selector: 'app-launch-notas',
  standalone: true,
  imports: [
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    GridComponent,
    InputsComponent,
    TableComponent,
    ImgEditComponent,
    ReorganizeInputComponent,
    BtnDownComponent
],
  templateUrl: './launch-notas.component.html',
})
export class LaunchNotasComponent {
  headers: ITableHeader<IGradeModel> = [
    { key: 'id', label: 'Registro Acadêmico' },
    { key: 'nome', label: 'Nome Completo' },
    { key: 'nota', label: 'Notas ' },
    { key: 'situacao', label: 'Situação' }
  ];
  data: IStudentModel[] = [];

  imgEdit = '<app-img-edit></app-img-edit>';

  constructor(private gradeService: GradeService) {}

  async ngOnInit() {
    await this.loadGrades();
  }

  async loadGrades() {
    try {
      const data = await this.gradeService.getGrades(1);
      this.data = data
    } catch (error) {
      console.error('Erro ao carregar faltas:', error);
    }
  }
}
