import { BaseAdapter, IBaseAdapter } from '@tylertech/forge/core';
import { IListDropdownComponent } from './list-dropdown';
import { getShadowElement } from '@tylertech/forge-core';
import { IPopoverComponent } from '@tylertech/forge/popover';

export interface IListDropdownAdapter extends IBaseAdapter {
  setTargetElement(element: HTMLElement): void;
}

export class ListDropdownAdapter extends BaseAdapter<IListDropdownComponent> implements IListDropdownAdapter {
  private _popoverElement: IPopoverComponent;

  constructor(component: IListDropdownComponent) {
    super(component);
    this._popoverElement = getShadowElement(component, 'forge-popover') as IPopoverComponent;
  }
  
  public setTargetElement(element: HTMLElement): void {
    this._popoverElement.targetElement = element;
  }
}
