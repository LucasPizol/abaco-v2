import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [],
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent {
  @Input() title: String = ""
}
