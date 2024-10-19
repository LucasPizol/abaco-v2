import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ImgAddCircleComponent } from "../../components/images/img-add-circle/img-add-circle.component";
import { ImgNoteAddComponent } from "../../components/images/img-note-add/img-note-add.component";
import { ImgPagePreviewComponent } from "../../components/images/img-page-preview/img-page-preview.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from "../../components/titles/titles.component";
import { SubTextComponent } from "../../components/sub-text/sub-text.component";
import { MainDivComponent } from "../../components/main-div/main-div.component";
import { ReorganizeDivCardComponent } from '../../components/reorganize-div-card/reorganize-div-card.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, ImgAddCircleComponent, ImgNoteAddComponent, ImgPagePreviewComponent, ReorganizesMainComponent,
    TitlesComponent, SubTextComponent, MainDivComponent, ReorganizeDivCardComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
