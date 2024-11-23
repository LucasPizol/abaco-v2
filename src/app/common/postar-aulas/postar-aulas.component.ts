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
@Component({
  selector: 'app-postar-aulas',
  standalone: true,
  imports: [
    TitlesComponent,
    SelectCourseComponent,
    InputsComponent,
    ListDivComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './postar-aulas.component.html',
})
export class PostarAulasComponent {
  constructor(private readonly classService: ClassService) {}

  formData = new FormGroup({
    cursos_id: new FormControl('', [Validators.required]),
    aula: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    conteudo: new FormControl('', [Validators.required]),
    'horario-hora': new FormControl('', [Validators.required]),
    'horario-minutos': new FormControl('', [Validators.required]),
  })

  async onSubmit() {
    const formValues = this.formData.value

    console.log('formValues:', formValues)

    if (this.formData.valid)
      await this.classService.createClass({
        descricao: formValues.descricao!,
        aula: formValues.aula!,
        horario: `${formValues['horario-hora']}:${formValues['horario-minutos']}`,
        conteudo: formValues.conteudo!,
        cursos_id: Number(formValues.cursos_id),
      } as any)
  }

  handleOnSelectCourse(course: ICourseModel) {
    this.formData.patchValue({
      cursos_id: String(course.id),
    })
  }
}
