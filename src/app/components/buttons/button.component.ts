import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = ''
  @Input() className: string = ''
  @Input() click: Function = () => {}
  @Input() isLoading: boolean = false
  @Input() type: 'button' | 'submit' | 'reset' = 'submit'
}
