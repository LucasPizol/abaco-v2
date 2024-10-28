import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-body',
  standalone: true,
  imports: [],
  templateUrl: './table-body.component.html',
})
export class TableBodyComponent {
  @Input() className: String = "";
  @Input() content: String = "";
}
