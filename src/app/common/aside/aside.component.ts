import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './aside.component.html',
})
export class AsideComponent {

}
