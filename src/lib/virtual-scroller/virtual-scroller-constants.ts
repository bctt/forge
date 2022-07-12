/**
 * Configuration for a virtual scroller.
 */
export interface IVirtualScrollerOptions<T = unknown> {
  appendOnly?: boolean;
  buffer?: number;
  cacheSize?: number;
  container: HTMLElement;
  data: T[];
  insetBottom?: string;
  insetTop?: string;
  itemBuilder: VirtualScrollerItemBuilder<T>;
  itemHeight: number;
  scrollAlignment?: VirtualScrollerAlignment;
  skipAccessibility?: boolean;
  startIndex?: number;
  throttle?: number;
}

/**
 * An object used by a virtual scroller to keep track of its child elements.
 */
export interface IVirtualScrollerItem {
  /**
   * The element instance.
   */
  element: HTMLElement;
  /**
    * The element height. This allows for a dynamic height that overrides the global constant.
    * 
    * @optional
    */
  height?: number;
  /**
    * A function to enable dynamic sorting of elements.
    * 
    * @optional
    */
  trackBy?: (...args: any[]) => unknown;
}

/**
 * An object returned by a `VirtualScrollerItemBuilder` to define an item element.
 */
export interface IVirtualScrollerItemBuilderResult extends Omit<IVirtualScrollerItem, 'element'> {
  /**
   * The element instance.
   */
  element: HTMLElement | string;
}

/**
 * Defines a callback function that creates virtual scroller item elements.
 */
export type VirtualScrollerItemBuilder<T = unknown> = (data: T, index: number) => HTMLElement | string | IVirtualScrollerItemBuilderResult;

/**
 * Defines the position of a scrolled-to item within its container.
 */
export type VirtualScrollerAlignment = 'top' | 'center' | 'bottom';
