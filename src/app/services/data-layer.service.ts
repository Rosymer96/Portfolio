import { Injectable } from '@angular/core';

declare global {
  interface Window {
    adobeDataLayer: any[];
  }
}

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {
  constructor() {
    window.adobeDataLayer = window.adobeDataLayer || [];
  }

  push(event: Record<string, any>): void {
    window.adobeDataLayer.push(event);
  }

  onChange(callback:(event:any) => void): void {
    window.adobeDataLayer.push(
      (dl: any) => {
      dl.addEventListener('adobeDataLayer:event', callback);
      }
    );
  }

  getAllEvents(): any[] {
    return window.adobeDataLayer;
  }

  getLastEvent(): any {
    return window.adobeDataLayer[window.adobeDataLayer.length - 1];
  }


}
