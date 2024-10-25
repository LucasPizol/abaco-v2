import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-popout',
  standalone: true,
  imports: [NzButtonModule, NzModalModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popout.component.html'
})

export class PopoutComponent {
  isVisible = false;
  isOkLoading = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }
  handleCancel(): void {
    this.isVisible = false;
  }
}