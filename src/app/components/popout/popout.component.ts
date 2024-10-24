import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-popout',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popout.component.html'
})
<<<<<<< HEAD

export class PopoutComponent {
  isVisible = false;
  isOkLoading = false;
  showModal(): void {
    this.isVisible = true;
  }
=======
export class PopoutComponent {
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

>>>>>>> d31fb55e6f2398ff951fac8a756b336afad13db0
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }
<<<<<<< HEAD
  handleCancel(): void {
    this.isVisible = false;
  }
}
=======

  handleCancel(): void {
    this.isVisible = false;
  }
}
>>>>>>> d31fb55e6f2398ff951fac8a756b336afad13db0
