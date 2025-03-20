import{C as g,j as h,B as _,k as f,l as d}from"./constants-DHnR0122.js";import{H as v,c as u,t as k,b as E}from"./feature-detection-C61kIZu7.js";import{F as p,a as m}from"./focus-indicator-B_9E-jM6.js";import"./index-CiLSBptl.js";import{S as y,a as x}from"./state-layer-DA2sYK0k.js";import{a as w}from"./icon-DNSPAaK0.js";const O=`${g}deprecated-button`,A={TYPE:"type",DISABLED:"disabled",FULL_WIDTH:"full-width"},L={BUTTON:"button,a"},i={elementName:O,attributes:A,selectors:L},z=`<template>
  <slot></slot>
  <forge-focus-indicator part="focus-indicator"></forge-focus-indicator>
  <forge-state-layer exportparts="surface:state-layer"></forge-state-layer>
</template>
`,T=':host{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-primary, #3f51b5));--_button-text-color: var(--forge-button-text-color, var(--_button-primary-color));--_button-disabled-color: var(--forge-button-disabled-color, var(--forge-theme-surface-container, #e0e0e0));--_button-padding: var(--forge-button-padding, var(--forge-spacing-medium, 16px));--_button-display: var(--forge-button-display, inline-flex);--_button-justify: var(--forge-button-justify, center);--_button-shape: var(--forge-button-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_button-height: var(--forge-button-height, 36px);--_button-min-width: var(--forge-button-min-width, 64px);--_button-spacing: var(--forge-button-spacing, var(--forge-spacing-xsmall, 8px));--_button-border-width: var(--forge-button-border-width, medium);--_button-border-style: var(--forge-button-border-style, none);--_button-border-color: var(--forge-button-border-color, currentColor);--_button-shape-start-start-radius: var(--forge-button-shape-start-start-radius, var(--_button-shape));--_button-shape-start-end-radius: var(--forge-button-shape-start-end-radius, var(--_button-shape));--_button-shape-end-start-radius: var(--forge-button-shape-end-start-radius, var(--_button-shape));--_button-shape-end-end-radius: var(--forge-button-shape-end-end-radius, var(--_button-shape));--_button-padding-block: var(--forge-button-padding-block, var(--_button-padding));--_button-padding-inline: var(--forge-button-padding-inline, var(--_button-padding));--_button-background: var(--forge-button-background, transparent);--_button-hover-background: var(--forge-button-hover-background, var(--_button-background));--_button-active-background: var(--forge-button-active-background, var(--_button-background));--_button-color: var(--forge-button-color, var(--_button-text-color));--_button-icon-size: var(--forge-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_button-shadow: var(--forge-button-shadow, none);--_button-hover-shadow: var(--forge-button-hover-shadow, none);--_button-active-shadow: var(--forge-button-active-shadow, none);--_button-cursor: var(--forge-button-cursor, pointer);--_button-transition-duration: var(--forge-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-transition-timing: var(--forge-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-text-padding-inline: var(--forge-button-text-padding-inline, var(--forge-spacing-xsmall, 8px));--_button-outlined-background: var(--forge-button-outlined-background, transparent);--_button-outlined-color: var(--forge-button-outlined-color, var(--_button-primary-color));--_button-outlined-border-width: var(--forge-button-outlined-border-width, var(--forge-border-thin, 1px));--_button-outlined-border-style: var(--forge-button-outlined-border-style, solid);--_button-outlined-border-color: var(--forge-button-outlined-border-color, var(--_button-primary-color));--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-primary-container, #d1d5ed));--_button-tonal-disabled-background: var(--forge-button-tonal-disabled-background, var(--_button-disabled-color));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-primary-container, #222c62));--_button-tonal-disabled-color: var(--forge-button-tonal-disabled-color, var(--_button-disabled-text-color));--_button-filled-background: var(--forge-button-filled-background, var(--_button-primary-color));--_button-filled-disabled-background: var(--forge-button-filled-disabled-background, var(--_button-disabled-color));--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-primary, #ffffff));--_button-filled-disabled-color: var(--forge-button-filled-disabled-color, var(--_button-disabled-text-color));--_button-raised-background: var(--forge-button-raised-background, var(--_button-primary-color));--_button-raised-disabled-background: var(--forge-button-raised-disabled-background, var(--_button-disabled-color));--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-primary, #ffffff));--_button-raised-disabled-color: var(--forge-button-raised-disabled-color, var(--_button-disabled-text-color));--_button-raised-shadow: var(--forge-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_button-raised-hover-shadow: var(--forge-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_button-raised-active-shadow: var(--forge-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_button-raised-disabled-shadow: var(--forge-button-raised-disabled-shadow, none);--_button-link-color: var(--forge-button-link-color, var(--_button-primary-color));--_button-link-text-decoration: var(--forge-button-link-text-decoration, underline);--_button-link-height: var(--forge-button-link-height, auto);--_button-link-padding: var(--forge-button-link-padding, 0);--_button-link-line-height: var(--forge-button-link-line-height, normal);--_button-link-width: var(--forge-button-link-width, auto);--_button-link-hover-text-decoration: var(--forge-button-link-hover-text-decoration, none);--_button-link-active-opacity: var(--forge-button-link-active-opacity, .65);--_button-link-transition-duration: var(--forge-button-link-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-link-transition-timing: var(--forge-button-link-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-disabled-cursor: var(--forge-button-disabled-cursor, not-allowed);--_button-disabled-text-color: var(--forge-button-disabled-text-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)));--_button-disabled-background: var(--forge-button-disabled-background, transparent);--_button-disabled-border-color: var(--forge-button-disabled-border-color, var(--_button-disabled-color));--_button-disabled-shadow: var(--forge-button-disabled-shadow, none);--_button-dense-height: var(--forge-button-dense-height, 24px);--_button-pill-shape: var(--forge-button-pill-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_button-pill-padding-inline: var(--forge-button-pill-padding-inline, var(--forge-spacing-small, 12px));--_button-focus-indicator-offset: var(--forge-button-focus-indicator-offset, 4px);--_button-text-focus-indicator-offset: var(--forge-button-text-focus-indicator-offset, 0px);--_button-link-focus-indicator-offset: var(--forge-button-link-focus-indicator-offset, 2px);--_button-popover-icon-transition-duration: var(--forge-button-popover-icon-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-popover-icon-transition-timing: var(--forge-button-popover-icon-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-popover-icon-open-rotation: var(--forge-button-popover-icon-open-rotation, 180deg)}:host{display:var(--_button-display);position:relative;outline:none;vertical-align:middle;-webkit-tap-highlight-color:transparent;border-radius:var(--_button-shape)}:host([hidden]){display:none}::slotted(:is(button,a)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);position:relative;display:var(--_button-display);align-items:center;justify-content:var(--_button-justify);gap:var(--_button-spacing);z-index:0;box-sizing:border-box;min-inline-size:var(--_button-min-width);height:var(--_button-height);inline-size:100%;border-width:var(--_button-border-width);border-style:var(--_button-border-style);border-color:var(--_button-border-color);border-start-start-radius:var(--_button-shape-start-start-radius);border-start-end-radius:var(--_button-shape-start-end-radius);border-end-start-radius:var(--_button-shape-end-start-radius);border-end-end-radius:var(--_button-shape-end-end-radius);padding-block:var(--_button-padding-block);padding-inline:var(--_button-padding-inline);box-shadow:var(--_button-shadow);outline:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;vertical-align:middle;text-decoration:none;white-space:nowrap;background:var(--_button-background);color:var(--_button-color);cursor:var(--_button-cursor);transition-property:box-shadow,background;transition-duration:var(--_button-transition-duration);transition-timing-function:var(--_button-transition-timing);--forge-icon-font-size: 1.25em}::slotted(:is(button,a))::-moz-focus-inner{padding:0;border:0}::slotted(:is(button,a)):hover{--_button-shadow: var(--_button-hover-shadow);background:var(--_button-hover-background)}::slotted(:is(button,a)):active{--_button-shadow: var(--_button-active-shadow);background:var(--_button-active-background)}::slotted(a){text-decoration:none;--forge-typography-link-text-decoration: none}forge-state-layer{--forge-state-layer-color: var(--_button-color)}forge-focus-indicator{--forge-focus-indicator-color: var(--_button-primary-color);--forge-focus-indicator-outward-offset: var(--_button-focus-indicator-offset)}:host(:is([type*=unelevated],[type*=raised])) ::slotted(:is(button,a)){--_button-background: var(--_button-filled-background);--_button-color: var(--_button-filled-color)}:host(:is([type*=unelevated],[type*=raised])) forge-state-layer{--forge-state-layer-color: var(--_button-filled-color)}:host([type*=raised]) ::slotted(:is(button,a)){--_button-background: var(--_button-raised-background);--_button-color: var(--_button-raised-color);--_button-shadow: var(--_button-raised-shadow)}:host([type*=raised]) ::slotted(:is(button,a)):hover{--_button-shadow: var(--_button-raised-hover-shadow)}:host([type*=raised]) ::slotted(:is(button,a)):active{--_button-shadow: var(--_button-raised-active-shadow)}:host([type*=outlined]) ::slotted(:is(button,a)){--_button-background: var(--_button-outlined-background);--_button-color: var(--_button-outlined-color);--_button-border-width: var(--_button-outlined-border-width);--_button-border-style: var(--_button-outlined-border-style);--_button-border-color: var(--_button-outlined-border-color)}:host([full-width]){width:100%}:host(:is([dense],[type*=dense])) ::slotted(:is(button,a)){--_button-height: var(--_button-dense-height)}:host([disabled]){cursor:var(--_button-disabled-cursor)}:host([disabled]) ::slotted(button[disabled]){--_button-background: var(--_button-disabled-background);--_button-color: var(--_button-disabled-text-color);--_button-shadow: var(--_button-disabled-shadow);pointer-events:none}:host([type*=outlined][disabled]) ::slotted(button[disabled]){--_button-border-color: var(--_button-disabled-border-color)}:host(:is([type*=unelevated],[type*=raised])[disabled]) ::slotted(button[disabled]){--_button-background: var(--_button-filled-disabled-background);--_button-color: var(--_button-filled-disabled-color)}:host([type*=raised][disabled]) ::slotted(button[disabled]){--_button-background: var(--_button-raised-disabled-background);--_button-color: var(--_button-raised-disabled-color);--_button-shadow: var(--_button-raised-disabled-shadow)}';var C=Object.getOwnPropertyDescriptor,D=(t,o,n,r)=>{for(var a=r>1?void 0:r?C(o,n):o,s=t.length-1,b;s>=0;s--)(b=t[s])&&(a=b(a)||a);return a};let l=class extends _{constructor(){super(),this._buttonOrAnchorElement=null,this._disabled=!1,this._fullWidth=!1,this._buttonChangeListener=this._onButtonChange.bind(this),this._keydownListener=t=>this._onKeydown(t),f(this,z,T),this._slotElement=d(this,"slot:not([name])"),this._focusIndicator=d(this,m.elementName),this._stateLayer=d(this,x.elementName)}static get observedAttributes(){return Object.values(i.attributes)}connectedCallback(){this._slotElement.addEventListener("slotchange",this._buttonChangeListener),this.children.length?this._initialize():v(this).then(()=>this._initialize())}disconnectedCallback(){this._detachButton()}attributeChangedCallback(t,o,n){switch(t){case i.attributes.TYPE:this.type=n;return;case i.attributes.DISABLED:this.disabled=u(n);return;case i.attributes.FULL_WIDTH:this.fullWidth=u(n);return}}_onKeydown(t){(t.key==="Enter"||t.key===" ")&&this._stateLayer.playAnimation()}_onButtonChange(){this._detachButton(),this._initialize()}_initialize(){this._buttonOrAnchorElement=this.querySelector(i.selectors.BUTTON),this._buttonOrAnchorElement&&(this._stateLayer.targetElement=this._buttonOrAnchorElement,this._focusIndicator.targetElement=this._buttonOrAnchorElement,this._buttonOrAnchorElement.addEventListener("keydown",this._keydownListener),this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._disabled&&!this._buttonOrAnchorElement.disabled?this._buttonOrAnchorElement.disabled=!0:this.disabled=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled,this._buttonOrAnchorElement instanceof HTMLButtonElement&&(this._buttonAttrMutationObserver=new MutationObserver(t=>{t.some(o=>o.attributeName==="disabled")&&this._syncDisabledState()}),this._buttonAttrMutationObserver.observe(this._buttonOrAnchorElement,{attributes:!0,attributeFilter:["disabled"]})))}_syncDisabledState(){const t=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled;k(this,t,i.attributes.DISABLED)}_detachButton(){var t;(t=this._buttonOrAnchorElement)==null||t.removeEventListener("keydown",this._keydownListener),this._buttonAttrMutationObserver&&(this._buttonAttrMutationObserver.disconnect(),this._buttonAttrMutationObserver=void 0)}get type(){return this._type}set type(t){this._type!==t&&(this._type=t,this.setAttribute(i.attributes.TYPE,this._type))}get disabled(){return this._disabled}set disabled(t){var o;this._disabled!==t&&(this._disabled=t,(o=this._buttonOrAnchorElement)==null||o.toggleAttribute(i.attributes.DISABLED,this._disabled),this.toggleAttribute(i.attributes.DISABLED,this._disabled))}get fullWidth(){return this._fullWidth}set fullWidth(t){this._fullWidth!==t&&(this._fullWidth=t,this.toggleAttribute(i.attributes.FULL_WIDTH,this._fullWidth))}focus(t){var o;(o=this._buttonOrAnchorElement)==null||o.focus(t)}};l=D([h({name:i.elementName,dependencies:[p,y]})],l);const N=`${g}deprecated-icon-button`,S={DISABLED:"disabled",TOGGLE:"toggle",IS_ON:"is-on",DENSITY_LEVEL:"density-level"},B={...S,ON_ICON:"forge-icon-button-on"},I={BUTTON:"button,a",ICON_LIKE:"button > i,span,svg,img,forge-icon"},e={elementName:N,attributes:B,selectors:I},M=`<template>
  <slot></slot>
  <forge-focus-indicator part="focus-indicator"></forge-focus-indicator>
  <forge-state-layer exportparts="surface:state-layer"></forge-state-layer>
</template>
`,H=":host{--_icon-button-display: var(--forge-icon-button-display, inline-flex);--_icon-button-size: var(--forge-icon-button-size, 48px);--_icon-button-gap: var(--forge-icon-button-gap, 0);--_icon-button-icon-color: var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color: var(--forge-icon-button-background-color, none);--_icon-button-icon-size: var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor: var(--forge-icon-button-cursor, pointer);--_icon-button-padding: var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border: var(--forge-icon-button-border, none);--_icon-button-shadow: var(--forge-icon-button-shadow, none);--_icon-button-transition-duration: var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing: var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape: var(--forge-icon-button-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_icon-button-shape-start-start: var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end: var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start: var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end: var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared: var(--forge-icon-button-shape-squared, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_icon-button-outlined-border-width: var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style: var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color: var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color: var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color: var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color: var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color: var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow: var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow: var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow: var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow: var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size: var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding: var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size: var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size: var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding: var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size: var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-background-color: var(--forge-icon-button-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color: var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color: var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color: var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-cursor: var(--forge-icon-button-disabled-cursor, not-allowed);--_icon-button-disabled-opacity: var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding: var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}:host{display:var(--_icon-button-display);position:relative;outline:none;-webkit-tap-highlight-color:transparent;border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end)}:host([hidden]){display:none}::slotted(:is(button,a)){position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing);font-size:var(--_icon-button-icon-size);height:var(--_icon-button-size);width:var(--_icon-button-size)}::slotted(a){text-decoration:none;color:var(--_icon-button-icon-color)!important}forge-state-layer{--forge-state-layer-color: var(--_icon-button-icon-color)}forge-focus-indicator{--forge-focus-indicator-outward-offset: 0px;--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape-start-start: var(--_icon-button-shape-start-start);--forge-focus-indicator-shape-start-end: var(--_icon-button-shape-start-end);--forge-focus-indicator-shape-end-start: var(--_icon-button-shape-end-start);--forge-focus-indicator-shape-end-end: var(--_icon-button-shape-end-end)}:host(:is([dense],[density=large]):not(:is([density=medium],[density-level]))){--_icon-button-size: var(--_icon-button-density-small-size);--_icon-button-icon-size: var(--_icon-button-density-small-icon-size);--_icon-button-padding: var(--_icon-button-density-small-padding);--forge-icon-font-size: var(--_icon-button-icon-size)}:host([dense]:not([density=large]):not([density=small]):is([density=medium],[density-level])){--_icon-button-size: var(--_icon-button-density-medium-size);--_icon-button-padding: var(--_icon-button-density-medium-padding)}:host([disabled]){cursor:var(--_icon-button-disabled-cursor)}:host([disabled]) ::slotted(button[disabled]){pointer-events:none;opacity:var(--_icon-button-disabled-opacity)}:host([toggle]:is([on],[is-on]):not([is-on=false])){--_icon-button-background-color: var(--_icon-button-toggle-on-background-color);--_icon-button-icon-color: var(--_icon-button-toggle-on-icon-color);--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-primary-container-low, #e8eaf6))}";var P=Object.getOwnPropertyDescriptor,W=(t,o,n,r)=>{for(var a=r>1?void 0:r?P(o,n):o,s=t.length-1,b;s>=0;s--)(b=t[s])&&(a=b(a)||a);return a};let c=class extends _{constructor(){super(),this._disabled=!1,this._toggle=!1,this._isOn=!1,this._densityLevel=0,this._buttonOrAnchorElement=null,this._slotChangeListener=this._onSlotChange.bind(this),this._keydownListener=this._onKeydown.bind(this),this._toggleClickListener=this._onToggle.bind(this),f(this,M,H),this._slotElement=d(this,"slot:not([name])"),this._focusIndicator=d(this,m.elementName),this._stateLayer=d(this,x.elementName)}static get observedAttributes(){return Object.values(e.attributes)}connectedCallback(){this._slotElement.addEventListener("slotchange",this._slotChangeListener),this.children.length?this._initialize():v(this).then(()=>this._initialize())}disconnectedCallback(){this._detachButton()}attributeChangedCallback(t,o,n){switch(t){case e.attributes.DISABLED:this.disabled=u(n);return;case e.attributes.TOGGLE:this.toggle=u(n);return;case e.attributes.IS_ON:this.isOn=u(n);return;case e.attributes.DENSITY_LEVEL:this.densityLevel=E(n);return}}_onKeydown(t){(t.key==="Enter"||t.key===" ")&&this._stateLayer.playAnimation()}_onSlotChange(){this._detachButton(),this._initialize()}_onToggle(){this.isOn=!this._isOn,this.dispatchEvent(new CustomEvent("forge-icon-button-toggle",{bubbles:!0,composed:!0,detail:this._isOn}))}_initialize(){this._buttonOrAnchorElement=this.querySelector(e.selectors.BUTTON),this._buttonOrAnchorElement&&(this._stateLayer.targetElement=this._buttonOrAnchorElement,this._focusIndicator.targetElement=this._buttonOrAnchorElement,this._buttonOrAnchorElement.addEventListener("keydown",this._keydownListener),this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._disabled&&!this._buttonOrAnchorElement.disabled?this._buttonOrAnchorElement.disabled=!0:this.disabled=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled,this._toggle&&this._initializeToggle(),this._buttonOrAnchorElement instanceof HTMLButtonElement&&(this._buttonAttrMutationObserver=new MutationObserver(t=>{t.some(o=>o.attributeName==="disabled")&&this._syncDisabledState()}),this._buttonAttrMutationObserver.observe(this._buttonOrAnchorElement,{attributes:!0,attributeFilter:["disabled"]})))}_syncDisabledState(){const t=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled;this.toggleAttribute(e.attributes.DISABLED,t)}_detachButton(){var t;(t=this._buttonOrAnchorElement)==null||t.removeEventListener("keydown",this._keydownListener),this._buttonAttrMutationObserver&&(this._buttonAttrMutationObserver.disconnect(),this._buttonAttrMutationObserver=void 0)}_initializeToggle(){this._buttonOrAnchorElement&&(this._buttonOrAnchorElement.addEventListener("click",this._toggleClickListener),this._syncToggleState())}_destroyToggle(){var t;(t=this._buttonOrAnchorElement)==null||t.removeEventListener("click",this._toggleClickListener)}_syncToggleState(){const t=Array.from(this.querySelectorAll(e.selectors.ICON_LIKE)),o=t.find(r=>r.hasAttribute(e.attributes.ON_ICON)),n=t.filter(r=>r!==o);o==null||o.toggleAttribute("hidden",!this._isOn),n.forEach(r=>r.toggleAttribute("hidden",this._isOn)),this.toggleAttribute(e.attributes.IS_ON,this._isOn)}get disabled(){return this._disabled}set disabled(t){var o;t=!!t,this._disabled!==t&&(this._disabled=t,(o=this._buttonOrAnchorElement)==null||o.toggleAttribute(e.attributes.DISABLED,this._disabled),this.toggleAttribute(e.attributes.DISABLED,this._disabled))}get toggle(){return this._toggle}set toggle(t){t=!!t,this._toggle!==t&&(this._toggle=t,this.isConnected&&(this._toggle?this._initializeToggle():this._destroyToggle()),this.toggleAttribute(e.attributes.TOGGLE,this._toggle))}get isOn(){return this._isOn}set isOn(t){t=!!t,this._isOn!==t&&(this._isOn=t,this.isConnected&&this._syncToggleState())}get densityLevel(){return this._densityLevel}set densityLevel(t){this._densityLevel!==t&&(this._densityLevel=t,this.setAttribute(e.attributes.DENSITY_LEVEL,String(this._densityLevel)))}focus(t){var o;(o=this._buttonOrAnchorElement)==null||o.focus(t)}};c=W([h({name:e.elementName,dependencies:[w,p,y]})],c);
