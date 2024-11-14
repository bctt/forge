import { defineCustomElement } from '@tylertech/forge-core';

import { VirtualizerComponent } from './virtualizer';

export * from './virtualizer-constants';
export * from './virtualizer';
export * from './virtual-item';

export function defineVirtualizerComponent(): void {
  defineCustomElement(VirtualizerComponent);
}
