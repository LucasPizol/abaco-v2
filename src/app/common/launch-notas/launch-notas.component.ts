import { Component } from '@angular/core';
import { ITableHeader } from '../../interfaces/TableHeader';
import { GradeService } from '../../api/grade/grade.service';
import { IGradeModel } from '../../api/grade/IGrade';
import { IStudentModel } from '../../api/student/Istudent';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { GridComponent } from '../../components/grid/grid.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { TableComponent } from '../../components/table/table.component';
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { BreakpointService } from '../../services/breakpoint.service';

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
    BtnDownComponent,
  ],
  templateUrl: './launch-notas.component.html',
  providers: [BreakpointService],
})
export class LaunchNotasComponent {
  constructor(
    private gradeService: GradeService,
    private readonly breakpointService: BreakpointService
  ) {}

  data: IStudentModel[] = [];

  imgEdit = '<app-img-edit></app-img-edit>';

  async ngOnInit() {
    await this.loadGrades();
  }

  fetchHeaderByBreakpoint(): ITableHeader<IStudentModel> {
    const { xs, sm, md } = this.breakpointService.breakpoint();

    if (xs) {
      return [
        { key: 'id', label: 'RA', className: 'w-4' },
        { key: 'nome', label: 'Nome', className: 'w-1/3' },
        { key: 'nota', label: 'Nota', className: 'w-1/3' },
        { key: 'situacao', label: 'Situação', className: 'w-1/3' },
      ];
    }

    return [
      { key: 'id', label: 'Registro Acadêmico', className: 'w-1/4' },
      { key: 'nome', label: 'Nome Completo', className: 'w-1/4 text-center' },
      { key: 'nota', label: 'Nota', className: 'w-1/4 text-center' },
      { key: 'situacao', label: 'Situação', className: 'w-1/4 text-center' },
    ];
  }

  async loadGrades() {
    try {
      const data = await this.gradeService.getGrades(1);
      this.data = data;
    } catch (error) {
      console.error('Erro ao carregar faltas:', error);
    }
  }
}
