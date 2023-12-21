import { TemplatePortal } from '@angular/cdk/portal';
import { Component, inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupWindowService } from './services/popup-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-box-bug';

  protected modalWindowId: string = '';

  @ViewChild('wizardModal', { static: true })
  public modalTmplRef!: TemplateRef<unknown>;

  #popupWindowService = inject(PopupWindowService);

  #viewContainerRef = inject(ViewContainerRef);


  openModal() {
    this.modalWindowId = this.#popupWindowService.openPopupWindow(
      'header',
      new TemplatePortal(this.modalTmplRef, this.#viewContainerRef)
    );
  }
}
