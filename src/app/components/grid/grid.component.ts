import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  @Input() xs: number | undefined = 1
  @Input() sm: number | undefined = 1
  @Input() md: number | undefined = 2
  @Input() lg: number | undefined = 2
}
