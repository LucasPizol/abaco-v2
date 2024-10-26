import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [],
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent {
  @Input() className: String = "";
  @Input() content: String = "";
}
