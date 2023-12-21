import { Injectable, Injector } from '@angular/core';
import { Portal, ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { PopupWindowComponent, POPUPWINDOW_DATA_CLOSE_CALLBACK, POPUPWINDOW_DATA_HEADER, POPUPWINDOW_DATA_ID, POPUPWINDOW_DATA_PORTAL } from '../popup-window/popup-window.component';

@Injectable({providedIn: 'root'})
export class PopupWindowService {

  constructor(private overlay: Overlay, private injector: Injector) { }

    private overlayRefs: { [key: string]: OverlayRef } = {};

    createInjector(header: string, portal: Portal<any>, id: string): PortalInjector {
        const injectorTokens = new WeakMap();
        injectorTokens.set(POPUPWINDOW_DATA_HEADER, header);
        injectorTokens.set(POPUPWINDOW_DATA_PORTAL, portal);
        injectorTokens.set(POPUPWINDOW_DATA_ID, id);
        injectorTokens.set(POPUPWINDOW_DATA_CLOSE_CALLBACK, (id2: string) => this.closePopupWindow(id2));
        return new PortalInjector(this.injector, injectorTokens);
    }

    openPopupWindow(headerText: string, portal: Portal<any>): string {
        const oRef = this.overlay.create({
            backdropClass: 'backdrop',
            panelClass: 'overlayPane',
            hasBackdrop: true,
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            disposeOnNavigation: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
        });

        const g = 'balh-blah-guid-' + Date.now();
        this.overlayRefs[g] = oRef;

        const popupWindowPortal = new ComponentPortal(
            PopupWindowComponent,
            null,
            this.createInjector(headerText, portal, g)
        );

        oRef.backdropClick().subscribe({
            next: () => {
                this.closePopupWindow(g);
            },
        });

        oRef.attach(popupWindowPortal);

        return g;
    }

    closePopupWindow(id: string) {
        this.overlayRefs[id].detach();
        this.overlayRefs[id].dispose();
    }
}
