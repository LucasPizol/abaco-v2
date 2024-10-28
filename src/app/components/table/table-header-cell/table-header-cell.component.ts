import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header-cell',
  standalone: true,
  imports: [],
  templateUrl: './table-header-cell.component.html',
})
export class TableHeaderCellComponent {
  @Input() title: String = ""
}
