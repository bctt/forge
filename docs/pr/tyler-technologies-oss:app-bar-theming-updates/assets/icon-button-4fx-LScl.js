import{C as f,j as v,k as h}from"./constants-D2tqnpVB.js";import{c as a}from"./base-adapter-BD6-QDkX.js";import{c as u}from"./feature-detection-CY6TVbRZ.js";import{a as _}from"./icon-D5yjdXv8.js";import"./index-CiLSBptl.js";import{B as m,a as p,b as y,c as k}from"./base-button-adapter-cyf2Ayfh.js";import{F as A}from"./focus-indicator-NbLDNrYT.js";import{S as E}from"./state-layer-sxQMIn2c.js";const b=`${f}icon-button`,d={TOGGLE:"toggle",PRESSED:"pressed",ON:"on",VARIANT:"variant",THEME:"theme",SHAPE:"shape",DENSITY:"density"},x={...d,ARIA_PRESSED:"aria-pressed"},w={TOGGLE:`${b}-toggle`},T={DEFAULT_VARIANT:"icon",DEFAULT_THEME:"default",DEFAULT_SHAPE:"circular",DEFAULT_DENSITY:"large"},t={elementName:b,observedAttributes:d,attributes:x,events:w,defaults:T};class z extends m{constructor(o){super(o),this._toggle=!1,this._pressed=!1,this._variant=t.defaults.DEFAULT_VARIANT,this._theme=t.defaults.DEFAULT_THEME,this._shape=t.defaults.DEFAULT_SHAPE,this._density=t.defaults.DEFAULT_DENSITY}initialize(){super.initialize(),this._adapter.tryApplyGlobalConfiguration(["variant","shape","density"])}async _onClick(o){this._toggle&&this._onToggle(),super._onClick(o)}_onToggle(){const o=this._pressed;this._pressed=!this._pressed;const n=!this._adapter.emitHostEvent(t.events.TOGGLE,this.pressed,!0,!0);this._pressed=o,!n&&(this.pressed=!o)}get toggle(){return this._toggle}set toggle(o){o=!!o,this._toggle!==o&&(this._toggle=o,this._adapter.toggleHostAttribute(t.attributes.ARIA_PRESSED,this._toggle,`${this._pressed}`),this._adapter.toggleHostAttribute(t.attributes.TOGGLE,this._toggle))}get pressed(){return this._pressed}set pressed(o){o=!!o,this._pressed!==o&&(this._pressed=o,this._toggle?this._adapter.setHostAttribute(t.attributes.ARIA_PRESSED,`${this._pressed}`):this._adapter.removeHostAttribute(t.attributes.ARIA_PRESSED),this._adapter.toggleHostAttribute(t.attributes.PRESSED,this._pressed),this._adapter.toggleHostAttribute(t.attributes.ON,this._pressed))}get variant(){return this._variant}set variant(o){o=o??t.defaults.DEFAULT_VARIANT,this._variant!==o&&(this._variant=o,this._variant!==t.defaults.DEFAULT_VARIANT?this._adapter.setHostAttribute(t.attributes.VARIANT,this._variant):this._adapter.removeHostAttribute(t.attributes.VARIANT))}get theme(){return this._theme}set theme(o){o=o??t.defaults.DEFAULT_THEME,this._theme!==o&&(this._theme=o,this._theme!==t.defaults.DEFAULT_THEME?this._adapter.setHostAttribute(t.attributes.THEME,this._theme):this._adapter.removeHostAttribute(t.attributes.THEME))}get shape(){return this._shape}set shape(o){o=o??t.defaults.DEFAULT_SHAPE,this._shape!==o&&(this._shape=o,this._shape!==t.defaults.DEFAULT_SHAPE?this._adapter.setHostAttribute(t.attributes.SHAPE,this._shape):this._adapter.removeHostAttribute(t.attributes.SHAPE))}get density(){return this._density}set density(o){o=o??t.defaults.DEFAULT_DENSITY,this._density!==o&&(this._density=o,this._density!==t.defaults.DEFAULT_DENSITY?this._adapter.setHostAttribute(t.attributes.DENSITY,this._density):this._adapter.removeHostAttribute(t.attributes.DENSITY))}}class S extends p{constructor(o){super(o)}}const D=`<template>
  <div class="forge-icon-button" part="root">
    <slot name="start"></slot>
    <slot></slot>
    <slot name="on"></slot>
    <slot name="end"></slot>
    <slot name="badge"></slot>
    <forge-focus-indicator target=":host" part="focus-indicator"></forge-focus-indicator>
    <forge-state-layer target=":host" exportparts="surface:state-layer"></forge-state-layer>
  </div>
</template>
`,H=":host{--_icon-button-display: var(--forge-icon-button-display, inline-flex);--_icon-button-disabled-cursor: var(--forge-icon-button-disabled-cursor, not-allowed)}:host{display:var(--_icon-button-display);position:relative;outline:none;-webkit-tap-highlight-color:transparent}:host([hidden]){display:none}.forge-icon-button{--_icon-button-size: var(--forge-icon-button-size, 48px);--_icon-button-gap: var(--forge-icon-button-gap, 0);--_icon-button-icon-color: var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color: var(--forge-icon-button-background-color, none);--_icon-button-icon-size: var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor: var(--forge-icon-button-cursor, pointer);--_icon-button-padding: var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border: var(--forge-icon-button-border, none);--_icon-button-shadow: var(--forge-icon-button-shadow, none);--_icon-button-transition-duration: var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing: var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape: var(--forge-icon-button-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_icon-button-shape-start-start: var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end: var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start: var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end: var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared: var(--forge-icon-button-shape-squared, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_icon-button-outlined-border-width: var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style: var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color: var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color: var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color: var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color: var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color: var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow: var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow: var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow: var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow: var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size: var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding: var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size: var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size: var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding: var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size: var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-background-color: var(--forge-icon-button-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color: var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color: var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color: var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-opacity: var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding: var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}.forge-icon-button{position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);font-size:var(--_icon-button-icon-size);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing)}.forge-icon-button ::slotted(:is([slot=start],[slot=end])){font-size:var(--_icon-button-icon-size);height:var(--_icon-button-icon-size);width:var(--_icon-button-icon-size);font-weight:inherit}::slotted(a){height:100%;width:100%;outline:none;border-radius:var(--_icon-button-shape);padding-inline:var(--_icon-button-padding);display:flex;align-items:center;justify-content:center;gap:var(--_icon-button-gap);color:var(--_icon-button-icon-color);text-decoration:none}forge-focus-indicator{--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape-start-start: var(--_icon-button-shape-start-start);--forge-focus-indicator-shape-start-end: var(--_icon-button-shape-start-end);--forge-focus-indicator-shape-end-start: var(--_icon-button-shape-end-start);--forge-focus-indicator-shape-end-end: var(--_icon-button-shape-end-end)}:host(:is([variant=icon],:not([variant]))){--forge-focus-indicator-outward-offset: 0px}forge-state-layer{--forge-state-layer-color: var(--_icon-button-icon-color)}:host([popover-icon]) .forge-icon-button{--_icon-button-padding: var(--_icon-button-popover-icon-padding)}:host([variant=outlined]) .forge-icon-button{border-width:var(--_icon-button-outlined-border-width);border-style:var(--_icon-button-outlined-border-style);border-color:var(--_icon-button-outlined-border-color)}:host([variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--_icon-button-tonal-icon-color);--_icon-button-background-color: var(--_icon-button-tonal-background-color)}:host(:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--_icon-button-filled-icon-color);--_icon-button-background-color: var(--_icon-button-filled-background-color)}:host([variant=raised]) .forge-icon-button{--_icon-button-shadow: var(--_icon-button-raised-shadow)}:host([variant=raised]) .forge-icon-button:hover{--_icon-button-raised-shadow: var(--_icon-button-raised-hover-shadow)}:host([variant=raised]) .forge-icon-button:active{--_icon-button-raised-shadow: var(--_icon-button-raised-active-shadow)}:host(:is(:not([toggle]),[toggle]:not([pressed]))) slot[name=on]{display:none}:host([toggle][pressed]) slot:not([name]){display:none}:host([toggle][pressed]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-background-color: var(--_icon-button-toggle-on-background-color);--_icon-button-icon-color: var(--_icon-button-toggle-on-icon-color)}:host([toggle][pressed][variant=outlined]) .forge-icon-button{--_icon-button-background-color: var(--_icon-button-outlined-toggle-on-background-color);--_icon-button-icon-color: var(--_icon-button-outlined-toggle-on-icon-color)}:host([toggle]:not([pressed])[variant=tonal]) .forge-icon-button{--_icon-button-background-color: var(--_icon-button-tonal-toggle-background-color)}:host([toggle][pressed][variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--_icon-button-tonal-toggle-on-icon-color);--_icon-button-background-color: var(--_icon-button-tonal-toggle-on-background-color)}:host([toggle]:not([pressed]):is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--_icon-button-filled-toggle-icon-color);--_icon-button-background-color: var(--_icon-button-filled-toggle-background-color)}:host([toggle][pressed]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--_icon-button-filled-toggle-on-icon-color);--_icon-button-background-color: var(--_icon-button-filled-toggle-on-background-color)}::slotted([slot=badge]){position:absolute;top:0;left:60%;z-index:1;pointer-events:none}::slotted(forge-badge[slot=badge][dot]){top:8px}:host(:is([dense],[density=small],[density=medium])) ::slotted(forge-badge[slot=badge]:not([dot])){top:-25%}:host(:is([dense],[density=small],[density=medium])) ::slotted(forge-badge[slot=badge][dot]){top:0}:host(:is([dense],[density=small])) ::slotted(forge-badge[slot=badge]){--forge-typography-label1-line-height: normal;--forge-badge-height: auto}::slotted(forge-circular-progress){--forge-circular-progress-indicator-color: var(--_icon-button-icon-color);--forge-circular-progress-track-color: transparent;--forge-circular-progress-size: 1em}:host(:is([dense],[density=small])) .forge-icon-button{--_icon-button-size: var(--_icon-button-density-small-size);--_icon-button-icon-size: var(--_icon-button-density-small-icon-size);--_icon-button-padding: var(--_icon-button-density-small-padding)}:host(:is([dense],[density=small])) ::slotted(*){font-size:var(--_icon-button-density-small-icon-size)}:host([density=medium]) .forge-icon-button{--_icon-button-size: var(--_icon-button-density-medium-size);--_icon-button-padding: var(--_icon-button-density-medium-padding)}:host([shape=squared]) .forge-icon-button{--_icon-button-shape: var(--_icon-button-shape-squared)}:host([disabled]){cursor:var(--_icon-button-disabled-cursor)}:host([disabled]) .forge-icon-button{pointer-events:none;opacity:var(--_icon-button-disabled-opacity)}:host([disabled][variant=raised]) .forge-icon-button{--_icon-button-raised-shadow: var(--_icon-button-raised-disabled-shadow)}:host(:not([toggle])[theme=primary]:is(:not([variant]),[variant=icon],[variant=outlined])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-primary, #3f51b5))}:host([toggle][theme=primary]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5))}:host([toggle][theme=primary][variant=outlined]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5))}:host([theme=primary]) .forge-icon-button{--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}:host(:not([toggle])[theme=secondary]:is(:not([variant]),[variant=icon],[variant=outlined])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-secondary, #ffc107))}:host([toggle][theme=secondary]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-secondary, #ffc107))}:host([toggle][theme=secondary][variant=outlined]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-secondary, #ffc107));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-secondary-container, #fff0c3));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-secondary, #ffc107))}:host(:not([toggle])[theme=secondary][variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-secondary-container, #8a6804));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-secondary-container, #fff0c3))}:host([toggle]:not([pressed])[theme=secondary][variant=tonal]) .forge-icon-button{--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-secondary-container, #fff0c3))}:host([toggle][theme=secondary][variant=tonal]) .forge-icon-button{--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-secondary-container, #fff0c3));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-on-secondary-container, #8a6804))}:host(:not([toggle])[theme=secondary]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-secondary, #000000));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-secondary, #ffc107))}:host([toggle]:not([pressed])[theme=secondary]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-secondary, #ffc107));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-secondary-container, #fff0c3))}:host([toggle][theme=secondary]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-secondary, #ffc107));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-secondary, #000000))}:host([theme=secondary]) .forge-icon-button{--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-secondary, #ffc107))}:host(:not([toggle])[theme=tertiary]:is(:not([variant]),[variant=icon],[variant=outlined])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-tertiary, #3d5afe))}:host([toggle][theme=tertiary]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-tertiary, #3d5afe))}:host([toggle][theme=tertiary][variant=outlined]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-tertiary, #3d5afe));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-tertiary-container, #d0d7ff));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-tertiary, #3d5afe))}:host(:not([toggle])[theme=tertiary][variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-tertiary-container, #213189));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-tertiary-container, #d0d7ff))}:host([toggle]:not([pressed])[theme=tertiary][variant=tonal]) .forge-icon-button{--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-tertiary-container, #d0d7ff))}:host([toggle][theme=tertiary][variant=tonal]) .forge-icon-button{--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-tertiary-container, #d0d7ff));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-on-tertiary-container, #213189))}:host(:not([toggle])[theme=tertiary]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-tertiary, #ffffff));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-tertiary, #3d5afe))}:host([toggle]:not([pressed])[theme=tertiary]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-tertiary, #3d5afe));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-tertiary-container, #d0d7ff))}:host([toggle][theme=tertiary]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-tertiary, #3d5afe));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-tertiary, #ffffff))}:host([theme=tertiary]) .forge-icon-button{--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-tertiary, #3d5afe))}:host(:not([toggle])[theme=success]:is(:not([variant]),[variant=icon],[variant=outlined])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-success, #2e7d32))}:host([toggle][theme=success]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-success, #2e7d32))}:host([toggle][theme=success][variant=outlined]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-success, #2e7d32));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-success-container, #cde0ce));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-success, #2e7d32))}:host(:not([toggle])[theme=success][variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-success-container, #19441b));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-success-container, #cde0ce))}:host([toggle]:not([pressed])[theme=success][variant=tonal]) .forge-icon-button{--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-success-container, #cde0ce))}:host([toggle][theme=success][variant=tonal]) .forge-icon-button{--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-success-container, #cde0ce));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-on-success-container, #19441b))}:host(:not([toggle])[theme=success]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-success, #ffffff));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-success, #2e7d32))}:host([toggle]:not([pressed])[theme=success]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-success, #2e7d32));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-success-container, #cde0ce))}:host([toggle][theme=success]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-success, #2e7d32));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-success, #ffffff))}:host([theme=success]) .forge-icon-button{--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-success, #2e7d32))}:host(:not([toggle])[theme=error]:is(:not([variant]),[variant=icon],[variant=outlined])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-error, #b00020))}:host([toggle][theme=error]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-error, #b00020))}:host([toggle][theme=error][variant=outlined]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-error, #b00020));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-error-container, #ecc2c9));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-error, #b00020))}:host(:not([toggle])[theme=error][variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-error-container, #5f0011));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-error-container, #ecc2c9))}:host([toggle]:not([pressed])[theme=error][variant=tonal]) .forge-icon-button{--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-error-container, #ecc2c9))}:host([toggle][theme=error][variant=tonal]) .forge-icon-button{--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-error-container, #ecc2c9));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-on-error-container, #5f0011))}:host(:not([toggle])[theme=error]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-error, #ffffff));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-error, #b00020))}:host([toggle]:not([pressed])[theme=error]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-error, #b00020));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-error-container, #ecc2c9))}:host([toggle][theme=error]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-error, #b00020));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-error, #ffffff))}:host([theme=error]) .forge-icon-button{--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-error, #b00020))}:host(:not([toggle])[theme=warning]:is(:not([variant]),[variant=icon],[variant=outlined])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-warning, #d14900))}:host([toggle][theme=warning]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-warning, #d14900))}:host([toggle][theme=warning][variant=outlined]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-warning, #d14900));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-warning-container, #f4d3c2));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-warning, #d14900))}:host(:not([toggle])[theme=warning][variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-warning-container, #712700));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-warning-container, #f4d3c2))}:host([toggle]:not([pressed])[theme=warning][variant=tonal]) .forge-icon-button{--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-warning-container, #f4d3c2))}:host([toggle][theme=warning][variant=tonal]) .forge-icon-button{--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-warning-container, #f4d3c2));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-on-warning-container, #712700))}:host(:not([toggle])[theme=warning]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-warning, #ffffff));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-warning, #d14900))}:host([toggle]:not([pressed])[theme=warning]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-warning, #d14900));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-warning-container, #f4d3c2))}:host([toggle][theme=warning]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-warning, #d14900));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-warning, #ffffff))}:host([theme=warning]) .forge-icon-button{--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-warning, #d14900))}:host(:not([toggle])[theme=info]:is(:not([variant]),[variant=icon],[variant=outlined])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-info, #1565c0))}:host([toggle][theme=info]:is(:not([variant]),[variant=icon])) .forge-icon-button{--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-info, #1565c0))}:host([toggle][theme=info][variant=outlined]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-info, #1565c0));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-info-container, #c7daf0));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-info, #1565c0))}:host(:not([toggle])[theme=info][variant=tonal]) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-info-container, #0b3768));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-info-container, #c7daf0))}:host([toggle]:not([pressed])[theme=info][variant=tonal]) .forge-icon-button{--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-info-container, #c7daf0))}:host([toggle][theme=info][variant=tonal]) .forge-icon-button{--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-info-container, #c7daf0));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-on-info-container, #0b3768))}:host(:not([toggle])[theme=info]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-on-info, #ffffff));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-info, #1565c0))}:host([toggle]:not([pressed])[theme=info]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-icon-color: var(--forge-icon-button-icon-color, var(--forge-theme-info, #1565c0));--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-info-container, #c7daf0))}:host([toggle][theme=info]:is([variant=filled],[variant=raised])) .forge-icon-button{--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-info, #1565c0));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-info, #ffffff))}:host([theme=info]) .forge-icon-button{--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-info, #1565c0))}:host([theme=app-bar]){--forge-icon-button-icon-color: var(--_app-bar-theme-foreground);--forge-icon-button-focus-indicator-color: var(--_app-bar-theme-foreground)}";var N=Object.defineProperty,I=Object.getOwnPropertyDescriptor,e=(i,o,n,g)=>{for(var c=g>1?void 0:g?I(o,n):o,s=i.length-1,l;s>=0;s--)(l=i[s])&&(c=(g?l(o,n,c):l(c))||c);return g&&c&&N(o,n,c),c};let r=class extends y{static get observedAttributes(){return[...Object.values(k.observedAttributes),...Object.values(t.observedAttributes)]}constructor(){super(),h(this,D,H),this._core=new z(new S(this))}attributeChangedCallback(i,o,n){switch(i){case t.attributes.TOGGLE:this.toggle=u(n);break;case t.attributes.PRESSED:case t.attributes.ON:this.pressed=u(n);break;case t.attributes.VARIANT:this.variant=n;break;case t.attributes.THEME:this.theme=n;break;case t.attributes.SHAPE:this.shape=n;break;case t.attributes.DENSITY:this.density=n;break}super.attributeChangedCallback(i,o,n)}};e([a()],r.prototype,"toggle",2);e([a()],r.prototype,"pressed",2);e([a({name:"pressed"})],r.prototype,"on",2);e([a()],r.prototype,"theme",2);e([a()],r.prototype,"variant",2);e([a()],r.prototype,"shape",2);e([a()],r.prototype,"density",2);r=e([v({name:t.elementName,dependencies:[A,E,_]})],r);export{r as I,t as a};
