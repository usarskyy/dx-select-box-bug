import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-modal-window-with-select-box',
  templateUrl: './modal-window-with-select-box.component.html',
  styleUrls: ['./modal-window-with-select-box.component.scss']
})
export class ModalWindowWithSelectBoxComponent {

  @Input({ required: true })
  public popupWindowId = '';

  protected readonly years$ = of([2020, 2021, 2022, 2023]);
}
