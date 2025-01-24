import{C as c,j as g,k as v}from"./constants-DVLGQE2r.js";import{c as b}from"./base-adapter-C-lOm-JO.js";import{c as l}from"./feature-detection-DRCh51Sa.js";import{a as h}from"./icon-PniqSQTM.js";import"./index-BmocOEUj.js";import{F as p}from"./focus-indicator-BvNL19jq.js";import{S as _}from"./state-layer-CG0HAXrj.js";import{a as m,B as y,b as k,c as x}from"./base-button-adapter-DxgXZ3Bs.js";class w extends m{constructor(t){super(t)}toggleStateLayer(t){this._stateLayerElement.disabled=!t}}const A=`${c}button`,f={VARIANT:"variant",PILL:"pill",THEME:"theme",FULL_WIDTH:"full-width"},z={...f},r={elementName:A,observedAttributes:f,attributes:z};class T extends y{constructor(t){super(t),this._variant="text",this._pill=!1,this._theme="primary",this._fullWidth=!1}initialize(){super.initialize(),this._adapter.tryApplyGlobalConfiguration(["variant","dense"])}get variant(){return this._variant}set variant(t){if(this._variant!==t){const o=this._variant;this._variant=t,this._variant==="link"?this._adapter.toggleStateLayer(!1):o==="link"&&this._adapter.toggleStateLayer(!0),this._adapter.setHostAttribute(r.attributes.VARIANT,this._variant)}}get pill(){return this._pill}set pill(t){this._pill!==t&&(this._pill=t,this._adapter.toggleHostAttribute(r.attributes.PILL,this._pill))}get theme(){return this._theme}set theme(t){this._theme!==t&&(this._theme=t,this._adapter.setHostAttribute(r.attributes.THEME,this._theme))}get fullWidth(){return this._fullWidth}set fullWidth(t){this._fullWidth!==t&&(this._fullWidth=t,this._adapter.toggleHostAttribute(r.attributes.FULL_WIDTH,this._fullWidth))}}const C=`<template>
  <div class="forge-button" part="root">
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <forge-focus-indicator target=":host" part="focus-indicator"></forge-focus-indicator>
    <forge-state-layer target=":host" exportparts="surface:state-layer"></forge-state-layer>
  </div>
</template>
`,L=':host{--_button-display: var(--forge-button-display, inline-flex);--_button-disabled-cursor: var(--forge-button-disabled-cursor, not-allowed)}:host{display:var(--_button-display);position:relative;outline:none;vertical-align:middle;-webkit-tap-highlight-color:transparent}:host([hidden]){display:none}.forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-primary, #3f51b5));--_button-text-color: var(--forge-button-text-color, var(--_button-primary-color));--_button-disabled-color: var(--forge-button-disabled-color, var(--forge-theme-surface-container, #e0e0e0));--_button-padding: var(--forge-button-padding, var(--forge-spacing-medium, 16px));--_button-justify: var(--forge-button-justify, center);--_button-shape: var(--forge-button-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_button-height: var(--forge-button-height, 36px);--_button-min-width: var(--forge-button-min-width, 64px);--_button-spacing: var(--forge-button-spacing, var(--forge-spacing-xsmall, 8px));--_button-border-width: var(--forge-button-border-width, medium);--_button-border-style: var(--forge-button-border-style, none);--_button-border-color: var(--forge-button-border-color, currentColor);--_button-shape-start-start-radius: var(--forge-button-shape-start-start-radius, var(--_button-shape));--_button-shape-start-end-radius: var(--forge-button-shape-start-end-radius, var(--_button-shape));--_button-shape-end-start-radius: var(--forge-button-shape-end-start-radius, var(--_button-shape));--_button-shape-end-end-radius: var(--forge-button-shape-end-end-radius, var(--_button-shape));--_button-padding-block: var(--forge-button-padding-block, var(--_button-padding));--_button-padding-inline: var(--forge-button-padding-inline, var(--_button-padding));--_button-background: var(--forge-button-background, transparent);--_button-hover-background: var(--forge-button-hover-background, var(--_button-background));--_button-active-background: var(--forge-button-active-background, var(--_button-background));--_button-color: var(--forge-button-color, var(--_button-text-color));--_button-icon-size: var(--forge-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_button-shadow: var(--forge-button-shadow, none);--_button-hover-shadow: var(--forge-button-hover-shadow, none);--_button-active-shadow: var(--forge-button-active-shadow, none);--_button-cursor: var(--forge-button-cursor, pointer);--_button-transition-duration: var(--forge-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-transition-timing: var(--forge-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-text-padding-inline: var(--forge-button-text-padding-inline, var(--forge-spacing-xsmall, 8px));--_button-outlined-background: var(--forge-button-outlined-background, transparent);--_button-outlined-color: var(--forge-button-outlined-color, var(--_button-primary-color));--_button-outlined-border-width: var(--forge-button-outlined-border-width, var(--forge-border-thin, 1px));--_button-outlined-border-style: var(--forge-button-outlined-border-style, solid);--_button-outlined-border-color: var(--forge-button-outlined-border-color, var(--_button-primary-color));--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-primary-container, #d1d5ed));--_button-tonal-disabled-background: var(--forge-button-tonal-disabled-background, var(--_button-disabled-color));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-primary-container, #222c62));--_button-tonal-disabled-color: var(--forge-button-tonal-disabled-color, var(--_button-disabled-text-color));--_button-filled-background: var(--forge-button-filled-background, var(--_button-primary-color));--_button-filled-disabled-background: var(--forge-button-filled-disabled-background, var(--_button-disabled-color));--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-primary, #ffffff));--_button-filled-disabled-color: var(--forge-button-filled-disabled-color, var(--_button-disabled-text-color));--_button-raised-background: var(--forge-button-raised-background, var(--_button-primary-color));--_button-raised-disabled-background: var(--forge-button-raised-disabled-background, var(--_button-disabled-color));--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-primary, #ffffff));--_button-raised-disabled-color: var(--forge-button-raised-disabled-color, var(--_button-disabled-text-color));--_button-raised-shadow: var(--forge-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_button-raised-hover-shadow: var(--forge-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_button-raised-active-shadow: var(--forge-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_button-raised-disabled-shadow: var(--forge-button-raised-disabled-shadow, none);--_button-link-color: var(--forge-button-link-color, var(--_button-primary-color));--_button-link-text-decoration: var(--forge-button-link-text-decoration, underline);--_button-link-height: var(--forge-button-link-height, auto);--_button-link-padding: var(--forge-button-link-padding, 0);--_button-link-line-height: var(--forge-button-link-line-height, normal);--_button-link-width: var(--forge-button-link-width, auto);--_button-link-hover-text-decoration: var(--forge-button-link-hover-text-decoration, none);--_button-link-active-opacity: var(--forge-button-link-active-opacity, .65);--_button-link-transition-duration: var(--forge-button-link-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-link-transition-timing: var(--forge-button-link-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-disabled-text-color: var(--forge-button-disabled-text-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)));--_button-disabled-background: var(--forge-button-disabled-background, transparent);--_button-disabled-border-color: var(--forge-button-disabled-border-color, var(--_button-disabled-color));--_button-disabled-shadow: var(--forge-button-disabled-shadow, none);--_button-dense-height: var(--forge-button-dense-height, 24px);--_button-pill-shape: var(--forge-button-pill-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_button-pill-padding-inline: var(--forge-button-pill-padding-inline, var(--forge-spacing-small, 12px));--_button-focus-indicator-offset: var(--forge-button-focus-indicator-offset, 4px);--_button-text-focus-indicator-offset: var(--forge-button-text-focus-indicator-offset, 0px);--_button-link-focus-indicator-offset: var(--forge-button-link-focus-indicator-offset, 2px);--_button-popover-icon-transition-duration: var(--forge-button-popover-icon-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-popover-icon-transition-timing: var(--forge-button-popover-icon-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-popover-icon-open-rotation: var(--forge-button-popover-icon-open-rotation, 180deg)}.forge-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);position:relative;display:var(--_button-display);align-items:center;justify-content:var(--_button-justify);gap:var(--_button-spacing);z-index:0;box-sizing:border-box;min-inline-size:var(--_button-min-width);height:var(--_button-height);inline-size:100%;border-width:var(--_button-border-width);border-style:var(--_button-border-style);border-color:var(--_button-border-color);border-start-start-radius:var(--_button-shape-start-start-radius);border-start-end-radius:var(--_button-shape-start-end-radius);border-end-start-radius:var(--_button-shape-end-start-radius);border-end-end-radius:var(--_button-shape-end-end-radius);padding-block:var(--_button-padding-block);padding-inline:var(--_button-padding-inline);box-shadow:var(--_button-shadow);outline:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;vertical-align:middle;text-decoration:none;white-space:nowrap;background:var(--_button-background);color:var(--_button-color);cursor:var(--_button-cursor);transition-property:box-shadow,background;transition-duration:var(--_button-transition-duration);transition-timing-function:var(--_button-transition-timing)}.forge-button::-moz-focus-inner{padding:0;border:0}.forge-button:hover{--_button-shadow: var(--_button-hover-shadow);background:var(--_button-hover-background)}.forge-button:active{--_button-shadow: var(--_button-active-shadow);background:var(--_button-active-background)}.forge-button ::slotted(:is([slot=start],[slot=end])){font-size:var(--_button-icon-size)}.with-anchor{display:flex;justify-content:stretch;align-items:stretch;padding:0}::slotted(a){display:flex;align-items:center;justify-content:center;gap:var(--_button-spacing);width:100%;padding:var(--_button-padding);color:var(--_button-color);outline:none;border-radius:var(--_button-shape);text-decoration:none;--forge-icon-font-size: var(--_button-icon-size)}:host([variant=link]) ::slotted(a){position:relative;inset:auto}forge-state-layer{--forge-state-layer-color: var(--_button-color)}forge-focus-indicator{--forge-focus-indicator-color: var(--_button-primary-color);--forge-focus-indicator-outward-offset: var(--_button-focus-indicator-offset)}:host([theme=secondary]) .forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-secondary, #ffc107))}:host([theme=secondary][variant=filled]) .forge-button{--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-secondary, #000000))}:host([theme=secondary][variant=raised]) .forge-button{--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-secondary, #000000))}:host([theme=secondary][variant=tonal]) .forge-button{--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-secondary-container, #fff0c3));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-secondary-container, #8a6804))}:host([theme=tertiary]) .forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-tertiary, #3d5afe))}:host([theme=tertiary][variant=filled]) .forge-button{--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-tertiary, #ffffff))}:host([theme=tertiary][variant=raised]) .forge-button{--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-tertiary, #ffffff))}:host([theme=tertiary][variant=tonal]) .forge-button{--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-tertiary-container, #d0d7ff));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-tertiary-container, #213189))}:host([theme=success]) .forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-success, #2e7d32))}:host([theme=success][variant=filled]) .forge-button{--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-success, #ffffff))}:host([theme=success][variant=raised]) .forge-button{--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-success, #ffffff))}:host([theme=success][variant=tonal]) .forge-button{--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-success-container, #cde0ce));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-success-container, #19441b))}:host([theme=error]) .forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-error, #b00020))}:host([theme=error][variant=filled]) .forge-button{--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-error, #ffffff))}:host([theme=error][variant=raised]) .forge-button{--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-error, #ffffff))}:host([theme=error][variant=tonal]) .forge-button{--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-error-container, #ecc2c9));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-error-container, #5f0011))}:host([theme=warning]) .forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-warning, #d14900))}:host([theme=warning][variant=filled]) .forge-button{--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-warning, #ffffff))}:host([theme=warning][variant=raised]) .forge-button{--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-warning, #ffffff))}:host([theme=warning][variant=tonal]) .forge-button{--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-warning-container, #f4d3c2));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-warning-container, #712700))}:host([theme=info]) .forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-info, #1565c0))}:host([theme=info][variant=filled]) .forge-button{--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-info, #ffffff))}:host([theme=info][variant=raised]) .forge-button{--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-info, #ffffff))}:host([theme=info][variant=tonal]) .forge-button{--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-info-container, #c7daf0));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-info-container, #0b3768))}:host(:where(:not([variant]),[variant=text])) .forge-button{--_button-padding-inline: var(--_button-text-padding-inline)}:host([variant=filled]) .forge-button{--_button-background: var(--_button-filled-background);--_button-color: var(--_button-filled-color)}:host([variant=filled]) forge-state-layer{--forge-state-layer-color: var(--_button-filled-color)}:host([variant=raised]) .forge-button{--_button-background: var(--_button-raised-background);--_button-color: var(--_button-raised-color);--_button-shadow: var(--_button-raised-shadow)}:host([variant=raised]) .forge-button:hover{--_button-shadow: var(--_button-raised-hover-shadow)}:host([variant=raised]) .forge-button:active{--_button-shadow: var(--_button-raised-active-shadow)}:host([variant=raised]) forge-state-layer{--forge-state-layer-color: var(--_button-raised-color)}:host([variant=tonal]) .forge-button{--_button-background: var(--_button-tonal-background);--_button-color: var(--_button-tonal-color)}:host([variant=tonal]) forge-state-layer{--forge-state-layer-color: var(--_button-tonal-color)}:host([variant=outlined]) .forge-button{--_button-background: var(--_button-outlined-background);--_button-color: var(--_button-outlined-color);--_button-border-width: var(--_button-outlined-border-width);--_button-border-style: var(--_button-outlined-border-style);--_button-border-color: var(--_button-outlined-border-color)}:host([variant=link]) .forge-button{--_button-color: var(--_button-link-color);--_button-height: var(--_button-link-height);--_button-padding: var(--_button-link-padding);--_button-focus-indicator-offset: var(--_button-link-focus-indicator-offset);text-decoration:var(--_button-link-text-decoration);line-height:var(--_button-link-line-height);transition:opacity var(--_button-link-transition-duration) var(--_button-link-transition-timing);inline-size:var(--_button-link-width)}:host([variant=link]) .forge-button:hover{text-decoration:var(--_button-link-hover-text-decoration)}:host([variant=link]) .forge-button:active{opacity:var(--_button-link-active-opacity)}:host([full-width]){width:100%}:host([dense]) .forge-button{--_button-height: var(--_button-dense-height)}:host([pill]) .forge-button{--_button-shape: var(--_button-pill-shape);--_button-padding-inline: var(--_button-pill-padding-inline)}:host([pill]) forge-focus-indicator{--forge-focus-indicator-shape: var(--_button-pill-shape)}:host(:not([anchor])[disabled]){cursor:var(--_button-disabled-cursor)}:host(:not([anchor])[disabled]) .forge-button{--_button-background: var(--_button-disabled-background);--_button-color: var(--_button-disabled-text-color);--_button-shadow: var(--_button-disabled-shadow);pointer-events:none}:host(:not([anchor])[variant=outlined][disabled]) .forge-button{--_button-border-color: var(--_button-disabled-border-color)}:host(:not([anchor])[variant=tonal][disabled]) .forge-button{--_button-background: var(--_button-tonal-disabled-background);--_button-color: var(--_button-tonal-disabled-color)}:host(:not([anchor])[variant=filled][disabled]) .forge-button{--_button-background: var(--_button-filled-disabled-background);--_button-color: var(--_button-filled-disabled-color)}:host(:not([anchor])[variant=raised][disabled]) .forge-button{--_button-background: var(--_button-raised-disabled-background);--_button-color: var(--_button-raised-disabled-color);--_button-shadow: var(--_button-raised-disabled-shadow)}:host([popover-icon]) .forge-button__popover-icon{transition:rotate var(--_button-popover-icon-transition-duration) var(--_button-popover-icon-transition-timing)}:host([popover-icon][aria-expanded=true]) .forge-button__popover-icon{rotate:var(--_button-popover-icon-open-rotation)}::slotted(forge-circular-progress){--forge-circular-progress-indicator-color: var(--_button-color);--forge-circular-progress-track-color: transparent;--forge-circular-progress-size: 1em}';var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,i=(e,t,o,u)=>{for(var n=u>1?void 0:u?N(t,o):t,s=e.length-1,d;s>=0;s--)(d=e[s])&&(n=(u?d(t,o,n):d(n))||n);return u&&n&&B(t,o,n),n};let a=class extends k{static get observedAttributes(){return[...Object.values(x.observedAttributes),...Object.values(r.observedAttributes)]}constructor(){super(),v(this,C,L),this._core=new T(new w(this))}attributeChangedCallback(e,t,o){switch(e){case r.observedAttributes.VARIANT:this.variant=o;return;case r.observedAttributes.PILL:this.pill=l(o);return;case r.observedAttributes.THEME:this.theme=o;return;case r.observedAttributes.FULL_WIDTH:this.fullWidth=l(o);return}super.attributeChangedCallback(e,t,o)}};i([b()],a.prototype,"variant",2);i([b()],a.prototype,"pill",2);i([b()],a.prototype,"theme",2);i([b()],a.prototype,"fullWidth",2);a=i([g({name:r.elementName,dependencies:[p,_,h]})],a);export{a as B,r as a};
