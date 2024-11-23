import { Component } from '@angular/core'
import { PesquisaComponent } from '../../components/pesquisa/pesquisa.component'
import { ImgEditComponent } from '../../components/images/img-edit/img-edit.component'
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizeDivCardComponent } from '../../components/reorganize-div-card/reorganize-div-card.component'
import { TableComponent } from '../../components/table/table.component'
import { ITableHeader } from '../../interfaces/TableHeader'
import { IClassModel } from '../../api/class/IClass'
import { ClassService } from '../../api/class/class.service'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { InputsComponent } from '../../components/inputs/inputs.component'
import { ToastrService } from 'ngx-toastr'
import { ButtonComponent } from '../../components/buttons/button.component'
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component'

@Component({
  selector: 'app-list-aula',
  standalone: true,
  imports: [
    ListDivComponent,
    TitlesComponent,
    PesquisaComponent,
    TableComponent,
    ImgEditComponent,
    NzModalModule,
    NzButtonModule,
    ReactiveFormsModule,
    InputsComponent,
    BtnDownComponent,
  ],
  templateUrl: './list-aula.component.html',
})
export class ListAulaComponent {
  constructor(private classService: ClassService, private toastService: ToastrService) {}

  selectedClass: IClassModel | null = null
  isModalVisible = false

  headers: ITableHeader<IClassModel> = [
    {
      key: 'descricao',
      label: 'Nome da Aula',
      className: 'w-1/2',
    },
    { key: 'aula', label: 'Data', className: 'w-1/2' },
    {
      key: 'Ações',
      label: 'Ações',
      actions: [
        {
          onClick: (value) => {
            const [dia, mes, ano] = value.aula.split('/')

            const content = value.horario?.split(':')

            this.selectedClass = value
            this.isModalVisible = true
            this.modalForm.setValue({
              descricao: value.descricao,
              aula: `${ano}-${mes}-${dia}`,
              conteudo: value.conteudo,
              'horario-hora': content?.[0] ?? '',
              'horario-minutos': content?.[1] ?? '',
            })
          },
          icon: 'edit',
        },
      ],
    },
  ]
  data: IClassModel[] = []

  modalForm = new FormGroup({
    descricao: new FormControl(''),
    aula: new FormControl(''),
    conteudo: new FormControl(''),
    'horario-hora': new FormControl(''),
    'horario-minutos': new FormControl(''),
  })

  async ngOnInit() {
    await this.loadClass()
  }

  async loadClass() {
    const data = await this.classService.getClass(1)
    this.data = data.map(({ aula, ...datas }) => {
      const [ano, mes, dia] = aula.split('-')
      return {
        ...datas,
        aula: `${dia}/${mes}/${ano}`,
      }
    })
  }

  handleCancel() {
    this.selectedClass = null
    this.isModalVisible = false
  }

  async handleOk() {
    if (!this.selectedClass) return

    await this.classService.updateClass(this.selectedClass.id, {
      aula: this.modalForm.get('aula')?.value ?? this.selectedClass.aula,
      descricao: this.modalForm.get('descricao')?.value ?? this.selectedClass.descricao,
      conteudo: this.modalForm.get('conteudo')?.value ?? this.selectedClass.conteudo,
      horario: `${this.modalForm.get('horario-hora')?.value ?? '00'}:${
        this.modalForm.get('horario-minutos')?.value ?? '00'
      }`,
    })
    this.toastService.success('Aula atualizada com sucesso')

    this.selectedClass = null
    this.isModalVisible = false
    await this.loadClass()
  }

  handleIsShown() {
    return !!this.selectedClass
  }
}
