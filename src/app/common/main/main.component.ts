import { Component } from '@angular/core';
import { MainDivComponent } from "../../components/main-div/main-div.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { ImgAbacoComponent } from "../../components/img-abaco/img-abaco.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from "../../components/titles/titles.component";
import { NavLinkComponent } from "../../components/nav-link/nav-link.component";
import { MainBtnComponent } from "../../components/main-btn/main-btn.component";
import { AsideComponent } from "../aside/aside.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainDivComponent, ReorganizesDivComponent, ImgAbacoComponent, ReorganizesMainComponent, TitlesComponent, NavLinkComponent, MainBtnComponent, AsideComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
