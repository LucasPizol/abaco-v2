import { Component } from '@angular/core';
import { TitlesComponent } from "../../components/titles/titles.component";
import { SelectCourseComponent } from "../../components/select-course/select-course.component";
import { ReorganizeInputComponent } from "../../components/reorganize-input/reorganize-input.component";
import { InputsComponent } from "../../components/inputs/inputs.component";
import { UploadComponent } from "../../components/upload/upload.component";
import { BtnDownComponent } from "../../components/buttons/btn-down/btn-down.component";
import { ListDivComponent } from "../../components/list-div/list-div.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
@Component({
  selector: 'app-postar-aulas',
  standalone: true,
  imports: [TitlesComponent, SelectCourseComponent, ReorganizeInputComponent, InputsComponent, UploadComponent, BtnDownComponent, ListDivComponent, ReorganizesDivComponent],
  templateUrl: './postar-aulas.component.html',
})
export class PostarAulasComponent {

}
