import { Component } from '@angular/core'
import { TitlesComponent } from '../../components/titles/titles.component'
import { SelectCourseComponent } from '../../components/select-course/select-course.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { InputsComponent } from '../../components/inputs/inputs.component'
import { UploadComponent } from '../../components/upload/upload.component'
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizesDivComponent } from '../../components/reorganizes-div/reorganizes-div.component'
import { FormControl, FormGroup, NgControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { ClassService } from '../../api/class/class.service'
import { ButtonComponent } from '../../components/buttons/button.component'
import { ICourseModel } from '../../api/course/ICourse'
import { ToastrService } from 'ngx-toastr'
import { CourseService } from '../../api/course/course.service'
import { DocenteService } from '../../api/docente/docente.service'
import { IDocenteModel } from '../../api/docente/IDocente'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-cadastro-curso',
  standalone: true,
  imports: [TitlesComponent, InputsComponent, ListDivComponent, ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-curso.component.html',
})
export class CadastroCursoComponent {
  constructor(
    private readonly courseService: CourseService,
    private readonly toastService: ToastrService,
    private readonly docenteService: DocenteService
  ) {}

  isLoading = false
  docentes: IDocenteModel[] = []

  formData = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    data_inicio: new FormControl('', [Validators.required]),
    data_fim: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    docente_id: new FormControl('', [Validators.required]),
  })

  async ngOnInit() {
    await this.loadDocentes()
  }

  async onSubmit() {
    const formValues = this.formData.value

    if (this.formData.valid) {
      this.isLoading = true

      try {
        await this.courseService.createCourse({
          descricao: formValues.descricao!,
          data_inicio: formValues.data_inicio!,
          data_fim: formValues.data_fim!,
          nome: formValues.nome!,
          docente_id: parseInt(formValues.docente_id!),
        } as any)
        this.toastService.success('Curso criada com sucesso')
        this.formData.reset()
        return
      } catch (error) {
      } finally {
        this.isLoading = false
      }
    }

    this.toastService.error('Preencha todos os campos')
  }

  async loadDocentes() {
    try {
      this.docentes = await this.docenteService.getAllDocentes()
    } catch (error) {
      this.toastService.error('Erro ao carregar docentes')
    }
  }
}
