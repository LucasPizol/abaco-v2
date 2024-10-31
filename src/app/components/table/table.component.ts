import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() spacing: String = "";
  @Input() paddingCell: String = "";
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Input() className: String = "";
}
