import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ImgAddCircleComponent } from "../../components/img-add-circle/img-add-circle.component";
import { ImgNoteAddComponent } from "../../components/img-note-add/img-note-add.component";
import { ImgPagePreviewComponent } from "../../components/img-page-preview/img-page-preview.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, ImgAddCircleComponent, ImgNoteAddComponent, ImgPagePreviewComponent, ReorganizesDivComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
