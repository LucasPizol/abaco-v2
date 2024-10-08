import { Component } from '@angular/core';
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { MainDivComponent } from "../../components/main-div/main-div.component";
import { ImgAbacoComponent } from "../../components/img-abaco/img-abaco.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from "../../components/titles/titles.component";
import { NavLinkComponent } from "../../components/nav-link/nav-link.component";
import { MainBtnComponent } from "../../components/main-btn/main-btn.component";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ReorganizesDivComponent, MainDivComponent, ImgAbacoComponent, ReorganizesMainComponent, TitlesComponent, NavLinkComponent, MainBtnComponent],
  templateUrl: './aside.component.html',
})
export class AsideComponent {

}
