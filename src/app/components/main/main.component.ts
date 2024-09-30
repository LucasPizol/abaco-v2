import { Component } from '@angular/core';
import { ImgAbacoComponent } from "../img-abaco/img-abaco.component";
import { MainDivComponent } from "../main-div/main-div.component";
import { AsideComponent } from "../aside/aside.component";
import { ReorganizesDivComponent } from "../reorganizes-div/reorganizes-div.component";
import { TitlesComponent } from "../titles/titles.component";
import { ReorganizesMainComponent } from "../reorganizes-main/reorganizes-main.component";
import { MainBtnComponent } from "../main-btn/main-btn.component";
import { NavLinkComponent } from "../nav-link/nav-link.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ImgAbacoComponent, MainDivComponent, AsideComponent, ReorganizesDivComponent, TitlesComponent, ReorganizesMainComponent, MainBtnComponent, NavLinkComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
