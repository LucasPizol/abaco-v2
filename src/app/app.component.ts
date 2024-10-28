import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from './api/services/authentication.service';
import { AsideComponent } from './common/aside/aside.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ListBgComponent } from './components/list-bg/list-bg.component';
import { ImgEditComponent } from './components/images/img-edit/img-edit.component';
import { ListDivComponent } from './components/list-div/list-div.component';
import { BtnDownComponent } from './components/buttons/btn-down/btn-down.component';
import { ReorganizeInputComponent } from './components/reorganize-input/reorganize-input.component';
import { SelectShortComponent } from './components/select-short/select-short.component';
import { TitlesComponent } from './components/titles/titles.component';
import { ReorganizesMainComponent } from './components/reorganizes-main/reorganizes-main.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterModule,
    AsideComponent,
    PesquisaComponent,
    ListBgComponent,
    ImgEditComponent,
    ListDivComponent,
    ReorganizesMainComponent,
    TitlesComponent,
    SelectShortComponent,
    ReorganizeInputComponent,
    BtnDownComponent,
    CheckboxComponent,
    DatepickerComponent,
    CommonModule,
  ],
  providers: [AuthenticationService],
})
export class AppComponent {
  title = 'front-abaco';

  constructor(private router: Router) {}

  showAside(): boolean {
    return this.router.url !== '/login';
  }
}
