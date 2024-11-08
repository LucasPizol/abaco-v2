import { Component, Inject, Injectable } from '@angular/core';
import { ReorganizesDivComponent } from '../../components/reorganizes-div/reorganizes-div.component';
import { AsideDivComponent } from '../../components/aside-div/aside-div.component';
import { ImgAbacoComponent } from '../../components/images/img-abaco/img-abaco.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { NavLinkComponent } from '../../components/nav-link/nav-link.component';
import { MainBtnComponent } from '../../components/main-btn/main-btn.component';
import { AuthenticationService } from '../../api/services/authentication.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    ReorganizesDivComponent,
    AsideDivComponent,
    ImgAbacoComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    NavLinkComponent,
    MainBtnComponent,
  ],
  templateUrl: './aside.component.html',
  providers: [AuthenticationService],
})
export class AsideComponent {
  hidden = true;

  getTranslate() {

    console.log(this.hidden)
    return this.hidden ? 'translate-x-full' : 'translate-x-0';
  }

  setHidden() {
    this.hidden = !this.hidden;
  }

  constructor(private readonly authenticationService: AuthenticationService) {}

  async logout(): Promise<void> {
    await this.authenticationService.logout();
  }
}
