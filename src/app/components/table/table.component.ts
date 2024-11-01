import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() spacing: String = "";
  @Input() paddingCell: String = "";
  @Input() headers: {key:string, label: string}[] = [];
  @Input() data: any[] = [];
  @Input() className: String = "";
  @Input() content: TemplateRef<any>[] = [];
}
