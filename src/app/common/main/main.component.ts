import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ImgAddCircleComponent } from "../../components/img-add-circle/img-add-circle.component";
import { ImgNoteAddComponent } from "../../components/img-note-add/img-note-add.component";
import { ImgPagePreviewComponent } from "../../components/img-page-preview/img-page-preview.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from "../../components/titles/titles.component";
import { NavLinkComponent } from "../../components/nav-link/nav-link.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, ImgAddCircleComponent, ImgNoteAddComponent, ImgPagePreviewComponent, ReorganizesMainComponent, TitlesComponent, NavLinkComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
