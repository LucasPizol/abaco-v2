import { Component } from '@angular/core';
import { AuthenticationService } from '../../api/services/authentication.service';
import { TitlesComponent } from "../../components/titles/titles.component";
import { SubTextComponent } from "../../components/sub-text/sub-text.component";
import { ReorganizeDivCardComponent } from "../../components/reorganize-div-card/reorganize-div-card.component";
import { CardComponent } from "../../components/card/card.component";
import { ImgPagePreviewComponent } from "../../components/images/img-page-preview/img-page-preview.component";
import { ImgAddCircleComponent } from "../../components/images/img-add-circle/img-add-circle.component";
import { ImgNoteAddComponent } from "../../components/images/img-note-add/img-note-add.component";


@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [
    TitlesComponent,
    SubTextComponent,
    ReorganizeDivCardComponent,
    CardComponent,
    ImgPagePreviewComponent,
    ImgAddCircleComponent,
    ImgNoteAddComponent
],
  providers: [AuthenticationService],
  templateUrl: './teacher.component.html',

})
export class TeacherComponent {}
