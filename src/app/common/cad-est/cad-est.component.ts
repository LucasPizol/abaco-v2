import { Component } from '@angular/core'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { SubTextComponent } from '../../components/sub-text/sub-text.component'
import { InputsComponent } from '../../components/inputs/inputs.component'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '../../components/buttons/button.component'
import { GridComponent } from '../../components/grid/grid.component'
import { FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { SelectCourseComponent } from '../../components/select-course/select-course.component'
import { ICourseModel } from '../../api/course/ICourse'
import { StudentService } from '../../api/student/student.services'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-cad-est',
  standalone: true,
  imports: [
    ListDivComponent,
    ReorganizeInputComponent,
    TitlesComponent,
    SubTextComponent,
    InputsComponent,
    CommonModule,
    ButtonComponent,
    GridComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectCourseComponent,
  ],
  templateUrl: './cad-est.component.html',
})
export class CadEstComponent {
  constructor(
    private readonly studentService: StudentService,
    private readonly router: Router,
    private readonly toastService: ToastrService
  ) {}

  state = 0
  formGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    escolaridade: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    data_nascimento: new FormControl('', [Validators.required]),
    cursos_id: new FormControl('', [Validators.required]),
  })

  address = new FormGroup({
    cep: new FormControl('', [Validators.required]),
    logradouro: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    complemento: new FormControl(''),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    zoneamento: new FormControl('', [Validators.required]),
  })

  getStateProps() {
    if (this.state === 0) {
      return 'Dados Pessoais'
    }

    return 'Endereço'
  }

  firstState() {
    return this.state === 0
  }

  secondState() {
    return this.state === 1
  }

  handleNextState() {
    this.state += 1
  }

  async onBlurCep() {
    const cep = this.address.get('cep')?.value

    if (cep) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      this.address.patchValue({
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf,
      })
    }
  }

  async submitStudentForm() {
    if (this.formGroup.valid) {
      this.handleNextState()
    }
  }

  handleOnSelectCourse(course: ICourseModel) {
    this.formGroup.patchValue({
      cursos_id: String(course.id),
    })
  }

  async onSubmit() {
    try {
      await this.studentService.registerStudent(this.formGroup.value as any, this.address.value as any)
      this.toastService.success('Estudante cadastrado com sucesso!')
      this.formGroup.reset()
      this.address.reset()
      this.formGroup.patchValue({
        genero: '',
        escolaridade: '',
      })
      this.state = 0
    } catch (error) {}
  }
}
