import { Component, Inject, InjectionToken } from '@angular/core';
import { Portal } from '@angular/cdk/portal';

export const POPUPWINDOW_DATA_HEADER = new InjectionToken<string>('POPUPWINDOW_DATA_HEADER');
export const POPUPWINDOW_DATA_PORTAL = new InjectionToken<Portal<any>>('POPUPWINDOW_DATA_PORTAL');
export const POPUPWINDOW_DATA_ID = new InjectionToken<Portal<any>>('POPUPWINDOW_DATA_ID');
export const POPUPWINDOW_DATA_CLOSE_CALLBACK = new InjectionToken<() => void>('POPUPWINDOW_DATA_CLOSE_CALLBACK');

@Component({
    selector: 'app-popup-window',
    templateUrl: './popup-window.component.html',
    styleUrls: ['./popup-window.component.scss'],
})
export class PopupWindowComponent {
    constructor(
        @Inject(POPUPWINDOW_DATA_HEADER) public header: string,
        @Inject(POPUPWINDOW_DATA_PORTAL) public portal: Portal<any>,
        @Inject(POPUPWINDOW_DATA_ID) public id: string,
        @Inject(POPUPWINDOW_DATA_CLOSE_CALLBACK) private closeCallback: (windowId: any) => void
    ) {}

    close() {
        this.closeCallback(this.id);
    }
}
