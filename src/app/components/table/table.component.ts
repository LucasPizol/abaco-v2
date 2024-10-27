import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() spacing: String = "";
  @Input() paddingCell: String = "";
}
