import{C as l,l as h,j as c,k as v}from"./constants-DHnR0122.js";import{c as b}from"./base-adapter-B_B1W7NX.js";import"./feature-detection-C61kIZu7.js";import{a as _,B as u,b as m,c as x}from"./base-button-adapter-Diqkx89j.js";import{F as y}from"./focus-indicator-B_9E-jM6.js";import"./index-CiLSBptl.js";import{a as E}from"./icon-DNSPAaK0.js";import{S as w}from"./state-layer-DA2sYK0k.js";const g=`${l}fab`,p={THEME:"theme",DENSITY:"density",ELEVATION:"elevation"},T={...p},A={LABEL_SLOT:"slot[name=label]"},L={EXTENDED:`${g}--extended`},D={DEFAULT_THEME:"secondary",DEFAULT_DENSITY:"medium",DEFAULT_ELEVATION:"raised"},a={elementName:g,observedAttributes:p,attributes:T,selectors:A,classes:L,defaults:D};class N extends _{constructor(e){super(e),this._labelSlotElement=h(this._component,a.selectors.LABEL_SLOT)}initialize(){super.initialize(),this._extendedObserver||this._startExtendedWatcher(),this._detectExtendedState()}destroy(){var e;(e=this._extendedObserver)==null||e.disconnect(),this._extendedObserver=void 0}toggleDefaultPopoverIcon(e){super.toggleDefaultPopoverIcon(e),this._detectExtendedState()}_startExtendedWatcher(){this._extendedObserver=new MutationObserver(()=>this._detectExtendedState()),this._extendedObserver.observe(this._component,{childList:!0,subtree:!0,characterData:!0})}_detectExtendedState(){if(this._labelSlotElement.assignedNodes().length>0){this._rootElement.classList.add(a.classes.EXTENDED);return}this._rootElement.classList.remove(a.classes.EXTENDED),this._component.clientWidth>this._component.clientHeight&&this._rootElement.classList.add(a.classes.EXTENDED)}}class O extends u{constructor(e){super(e),this._theme=a.defaults.DEFAULT_THEME,this._density=a.defaults.DEFAULT_DENSITY,this._elevation=a.defaults.DEFAULT_ELEVATION}destroy(){this._adapter.destroy()}get theme(){return this._theme}set theme(e){if(this._theme!==e){this._theme=e??a.defaults.DEFAULT_THEME;const t=this._theme!==a.defaults.DEFAULT_THEME;this._adapter.toggleHostAttribute(a.attributes.THEME,t,this._theme)}}get density(){return this._density}set density(e){if(this._density!==e){this._density=e??a.defaults.DEFAULT_DENSITY;const t=this._density!==a.defaults.DEFAULT_DENSITY;this._adapter.toggleHostAttribute(a.attributes.DENSITY,t,this._density)}}get elevation(){return this._elevation}set elevation(e){if(this._elevation!==e){this._elevation=e??a.defaults.DEFAULT_ELEVATION;const t=this._elevation!==a.defaults.DEFAULT_ELEVATION;this._adapter.toggleHostAttribute(a.attributes.ELEVATION,t,this._elevation)}}}const z=`<template>
  <div class="forge-fab" part="root">
    <slot name="start"></slot>
    <slot></slot>
    <slot name="label"></slot>
    <slot name="end"></slot>
    <forge-focus-indicator target=":host" part="focus-indicator"></forge-focus-indicator>
    <forge-state-layer target=":host" exportparts="surface:state-layer"></forge-state-layer>
  </div>
</template>
`,k=':host{--_fab-display: var(--forge-fab-display, inline-flex);--_fab-disabled-cursor: var(--forge-fab-disabled-cursor, not-allowed)}:host{display:var(--_fab-display);position:relative;outline:none;-webkit-tap-highlight-color:transparent}:host([hidden]){display:none}.forge-fab{--_fab-gap: var(--forge-fab-gap, var(--forge-spacing-xsmall, 8px));--_fab-background: var(--forge-fab-background, var(--forge-theme-secondary, #ffc107));--_fab-color: var(--forge-fab-color, var(--forge-theme-on-secondary, #000000));--_fab-size: var(--forge-fab-size, 56px);--_fab-padding: var(--forge-fab-padding, var(--forge-spacing-xsmall, 8px));--_fab-shadow: var(--forge-fab-shadow, 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12));--_fab-hover-shadow: var(--forge-fab-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_fab-active-shadow: var(--forge-fab-active-shadow, 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12));--_fab-lowered-shadow: var(--forge-fab-lowered-shadow, 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12));--_fab-lowered-hover-shadow: var(--forge-fab-lowered-hover-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_fab-lowered-active-shadow: var(--forge-fab-lowered-active-shadow, 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12));--_fab-transition-duration: var(--forge-fab-transition-duration, var(--forge-animation-duration-short3, .15s));--_fab-transition-timing: var(--forge-fab-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_fab-shape: var(--forge-fab-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_fab-shape-start-start: var(--forge-fab-shape-start-start, var(--_fab-shape));--_fab-shape-start-end: var(--forge-fab-shape-start-end, var(--_fab-shape));--_fab-shape-end-start: var(--forge-fab-shape-end-start, var(--_fab-shape));--_fab-shape-end-end: var(--forge-fab-shape-end-end, var(--_fab-shape));--_fab-extended-padding: var(--forge-fab-extended-padding, var(--forge-spacing-medium-large, 20px));--_fab-extended-min-width: var(--forge-fab-extended-min-width, 96px);--_fab-density-small-size: var(--forge-fab-density-small-size, 40px);--_fab-density-medium-size: var(--forge-fab-density-medium-size, var(--_fab-size));--_fab-density-large-size: var(--forge-fab-density-large-size, 96px);--_fab-disabled-background: var(--forge-fab-disabled-background, var(--forge-theme-surface-container, #e0e0e0));--_fab-disabled-color: var(--forge-fab-disabled-color, var(--forge-theme-on-surface-container, #000000));--_fab-disabled-opacity: var(--forge-fab-disabled-opacity, .38)}.forge-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);position:relative;display:inline-flex;justify-content:center;align-items:center;gap:var(--_fab-gap);z-index:0;background:var(--_fab-background);color:var(--_fab-color);cursor:pointer;box-shadow:var(--_fab-shadow);box-sizing:border-box;height:var(--_fab-density-medium-size);min-width:var(--_fab-density-medium-size);padding-inline:var(--_fab-padding);border-width:medium;border-style:none;border-color:currentColor;border-top-left-radius:var(--_fab-shape-start-start);border-top-right-radius:var(--_fab-shape-start-end);border-bottom-left-radius:var(--_fab-shape-end-start);border-bottom-right-radius:var(--_fab-shape-end-end);-webkit-user-select:none;user-select:none;white-space:nowrap;transition-property:box-shadow,background,color;transition-duration:var(--_fab-transition-duration);transition-timing-function:var(--_fab-transition-timing)}.forge-fab:hover{--_fab-shadow: var(--_fab-hover-shadow)}.forge-fab:active{--_fab-shadow: var(--_fab-active-shadow)}.forge-fab--extended{--_fab-padding: var(--_fab-extended-padding);min-width:var(--_fab-extended-min-width)}.with-anchor{padding-inline:0}::slotted(a){height:100%;width:100%;outline:none;border-radius:var(--_fab-shape);padding-inline:var(--_fab-padding);display:flex;align-items:center;justify-content:center;gap:var(--_fab-gap);color:var(--_fab-color);text-decoration:none}forge-focus-indicator{--forge-focus-indicator-color: var(--_fab-background);--forge-focus-indicator-shape-start-start: var(--_fab-shape-start-start);--forge-focus-indicator-shape-start-end: var(--_fab-shape-start-end);--forge-focus-indicator-shape-end-start: var(--_fab-shape-end-start);--forge-focus-indicator-shape-end-end: var(--_fab-shape-end-end)}forge-state-layer{--forge-state-layer-color: var(--_fab-color)}:host(:is([dense],[density=small])) .forge-fab{--_fab-size: var(--_fab-density-small-size)}:host([density=large]) .forge-fab{--_fab-size: var(--_fab-density-large-size);--_fab-shape: var(--forge-fab-shape, calc(var(--forge-shape-extra-large, 16px) * var(--forge-shape-factor, 1)))}:host([elevation=lowered]) .forge-fab{--_fab-shadow: var(--_fab-lowered-shadow)}:host([elevation=lowered]) .forge-fab:hover{--_fab-shadow: var(--_fab-lowered-hover-shadow)}:host([elevation=lowered]) .forge-fab:active{--_fab-shadow: var(--_fab-lowered-active-shadow)}:host([disabled]){cursor:var(--_fab-disabled-cursor)}:host([disabled]) .forge-fab{--_fab-background: var(--_fab-disabled-background);--_fab-color: var(--_fab-disabled-color);pointer-events:none;opacity:var(--_fab-disabled-opacity)}:host([theme=primary]:not([disabled])) .forge-fab{--_fab-background: var(--forge-fab-background, var(--forge-theme-primary, #3f51b5));--_fab-color: var(--forge-fab-color, var(--forge-theme-on-primary, #ffffff))}:host([theme=tertiary]:not([disabled])) .forge-fab{--_fab-background: var(--forge-fab-background, var(--forge-theme-tertiary, #3d5afe));--_fab-color: var(--forge-fab-color, var(--forge-theme-on-tertiary, #ffffff))}:host([theme=success]:not([disabled])) .forge-fab{--_fab-background: var(--forge-fab-background, var(--forge-theme-success, #2e7d32));--_fab-color: var(--forge-fab-color, var(--forge-theme-on-success, #ffffff))}:host([theme=error]:not([disabled])) .forge-fab{--_fab-background: var(--forge-fab-background, var(--forge-theme-error, #b00020));--_fab-color: var(--forge-fab-color, var(--forge-theme-on-error, #ffffff))}:host([theme=warning]:not([disabled])) .forge-fab{--_fab-background: var(--forge-fab-background, var(--forge-theme-warning, #d14900));--_fab-color: var(--forge-fab-color, var(--forge-theme-on-warning, #ffffff))}:host([theme=info]:not([disabled])) .forge-fab{--_fab-background: var(--forge-fab-background, var(--forge-theme-info, #1565c0));--_fab-color: var(--forge-fab-color, var(--forge-theme-on-info, #ffffff))}';var S=Object.defineProperty,I=Object.getOwnPropertyDescriptor,n=(r,e,t,i)=>{for(var o=i>1?void 0:i?I(e,t):e,f=r.length-1,d;f>=0;f--)(d=r[f])&&(o=(i?d(e,t,o):d(o))||o);return i&&o&&S(e,t,o),o};let s=class extends m{static get observedAttributes(){return[...Object.values(x.observedAttributes),...Object.values(a.observedAttributes)]}constructor(){super(),v(this,z,k),this._core=new O(new N(this))}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(r,e,t){switch(r){case a.attributes.THEME:this.theme=t;return;case a.attributes.DENSITY:this.density=t;return;case a.attributes.ELEVATION:this.elevation=t;return}super.attributeChangedCallback(r,e,t)}};n([b()],s.prototype,"theme",2);n([b()],s.prototype,"density",2);n([b()],s.prototype,"elevation",2);s=n([c({name:a.elementName,dependencies:[y,w,E]})],s);
