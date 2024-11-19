import { CommonModule } from '@angular/common'
import { Component, Input, TemplateRef } from '@angular/core'
import { ITableHeader } from '../../interfaces/TableHeader'
import { BlankSlateComponent } from '../blank-slate/blank-slate.component'
import { InputsComponent } from '../inputs/inputs.component'

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, BlankSlateComponent],
  templateUrl: './table.component.html',
})
export class TableComponent<T extends object = any> {
  @Input() spacing: String = ''
  @Input() paddingCell: String = ''
  @Input() headers: ITableHeader<T> = []
  @Input() data: any[] = []
  @Input() className: String = ''
  @Input() content: TemplateRef<any>[] = []
}
