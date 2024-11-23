import { Component, Input, forwardRef } from '@angular/core'
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inputs.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true,
    },
  ],
})
export class InputsComponent implements ControlValueAccessor {
  @Input() placeholder: string = ''
  @Input() type: string = 'text'
  @Input() className: string = ''
  @Input() name: string = ''
  @Input() onBlur: () => Promise<void> = async () => {}

  // Variável para armazenar o valor do input
  private innerValue: string = ''

  // Funções de callback que o Angular precisa para o ngModel funcionar
  onChange = (value: any) => {}
  onTouched = () => {}

  // Método para atualizar o valor e propagar para o componente pai
  get value(): string {
    return this.innerValue
  }

  set value(val: string) {
    if (val !== this.innerValue) {
      this.innerValue = val
      this.onChange(val) // Notifica a mudança
      this.onTouched()
    }
  }

  // Métodos do ControlValueAccessor
  writeValue(value: any): void {
    this.innerValue = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  handleBlur() {
    if (this.onBlur) {
      this.onBlur()
    }
  }
}
