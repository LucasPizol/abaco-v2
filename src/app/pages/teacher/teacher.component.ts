import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { MainComponent } from "../../common/main/main.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { ReorganizeDivCardComponent } from '../../components/reorganize-div-card/reorganize-div-card.component';
import { AuthenticationService } from '../../api/services/authentication.service';
import { CardComponent } from '../../components/card/card.component';
import { ImgAddCircleComponent } from '../../components/images/img-add-circle/img-add-circle.component';
import { ImgNoteAddComponent } from '../../components/images/img-note-add/img-note-add.component';
import { ImgPagePreviewComponent } from '../../components/images/img-page-preview/img-page-preview.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { SubTextComponent } from '../../components/sub-text/sub-text.component';
import { MainDivComponent } from '../../components/main-div/main-div.component';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [
    CardComponent,
    ImgAddCircleComponent,
    ImgNoteAddComponent,
    ImgPagePreviewComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    SubTextComponent,
    MainDivComponent,
    ReorganizeDivCardComponent,
  ],
  providers: [AuthenticationService],
  templateUrl: './teacher.component.html',

})
export class TeacherComponent {}
