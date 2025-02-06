import{C as f,j as p,B as _,k as b}from"./constants-BjnHqKgS.js";import{B as m,c as h}from"./base-adapter-CQdYccXX.js";import{c as u}from"./feature-detection-ONR9WHvu.js";import{a as c,B as g}from"./button-vPgaRyW5.js";import"./focus-indicator-R2otSvsR.js";import"./index-BmocOEUj.js";import"./state-layer-B7GOb8iB.js";class v extends m{constructor(t){super(t)}startButtonObserver(){this._buttonChangeObserver=new MutationObserver(t=>{const e=t.reduce((s,{addedNodes:o})=>{const a=Array.from(o).filter(r=>r.nodeType===Node.ELEMENT_NODE).map(r=>r.nodeName.toLowerCase()===c.elementName?r:r.querySelector(c.elementName)).filter(r=>!!r);return s.concat(a)},[]);e.length&&(e.forEach(s=>{s.variant=this._component.variant,s.theme=this._component.theme,s.disabled=this._component.disabled,s.dense=this._component.dense}),this.setPill(this._component.pill))}),this._buttonChangeObserver.observe(this._component,{childList:!0,subtree:!0})}destroyButtonObserver(){var t;(t=this._buttonChangeObserver)==null||t.disconnect(),this._buttonChangeObserver=void 0}setVariant(t){this._getButtons().forEach(s=>s.variant=t)}setTheme(t){this._getButtons().forEach(s=>s.theme=t)}setDisabled(t){this._getButtons().forEach(s=>s.disabled=t)}setDense(t){this._getButtons().forEach(s=>s.dense=t)}setPill(t){const e=this._getButtons();e.length>2&&Array.from(e).slice(1,e.length-1).filter(({pill:a})=>a).forEach(a=>a.pill=!1);const s=e[0];s&&(s.pill=t);const o=e[e.length-1];o&&(o.pill=t)}_getButtons(){return this._component.querySelectorAll(c.elementName)}}const E=`${f}split-button`,A={VARIANT:"variant",THEME:"theme",DISABLED:"disabled",DENSE:"dense",PILL:"pill"},T={DEFAULT_VARIANT:"text",DEFAULT_THEME:"primary"},i={elementName:E,attributes:A,defaults:T};class B{constructor(t){this._adapter=t,this._variant=i.defaults.DEFAULT_VARIANT,this._theme=i.defaults.DEFAULT_THEME,this._disabled=!1,this._dense=!1,this._pill=!1}initialize(){this._adapter.startButtonObserver(),this._adapter.setVariant(this._variant),this._adapter.setTheme(this._theme),this._adapter.setDisabled(this._disabled),this._adapter.setDense(this._dense),this._adapter.setPill(this._pill)}destroy(){this._adapter.destroyButtonObserver()}get variant(){return this._variant}set variant(t){this._variant!==t&&(this._variant=t??i.defaults.DEFAULT_VARIANT,this._adapter.setVariant(t),this._adapter.setHostAttribute(i.attributes.VARIANT,this._variant))}get theme(){return this._theme}set theme(t){this._theme!==t&&(this._theme=t??i.defaults.DEFAULT_THEME,this._adapter.setTheme(this._theme),this._adapter.setHostAttribute(i.attributes.THEME,this._theme))}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.setDisabled(this._disabled),this._adapter.toggleHostAttribute(i.attributes.DISABLED,this._disabled))}get dense(){return this._dense}set dense(t){this._dense!==t&&(this._dense=t,this._adapter.setDense(this._dense),this._adapter.toggleHostAttribute(i.attributes.DENSE,this._dense))}get pill(){return this._pill}set pill(t){this._pill!==t&&(this._pill=t,this._adapter.setPill(this._pill),this._adapter.toggleHostAttribute(i.attributes.PILL,this._pill))}}const N=`<template>
  <slot></slot>
</template>
`,D=":host{--_split-button-min-width: var(--forge-split-button-min-width, 0);--_split-button-gap: var(--forge-split-button-gap, var(--forge-border-thin, 1px));--_split-button-focus-indicator-offset: var(--forge-split-button-focus-indicator-offset, var(--forge-button-focus-indicator-offset, 4px));--_split-button-focus-indicator-divider-offset: var(--forge-split-button-focus-indicator-divider-offset, var(--_split-button-gap));--_split-button-focus-indicator-offset-adjusted: calc(var(--_split-button-focus-indicator-offset) + var(--_split-button-focus-indicator-divider-offset) * 2)}:host{display:inline-flex;justify-content:center;align-items:center}:host([hidden]){display:none}::slotted(*){--forge-button-min-width: var(--_split-button-min-width);--forge-button-focus-indicator-offset: var(--_split-button-focus-indicator-offset)}::slotted(:first-child){--forge-button-shape-start-end-radius: 0;--forge-button-shape-end-end-radius: 0;--forge-focus-indicator-shape-start-end: 0;--forge-focus-indicator-shape-end-end: 0;--forge-focus-indicator-offset-inline: 0 var(--_split-button-focus-indicator-offset-adjusted)}::slotted(:not(:first-child):not(:last-child)){--forge-button-shape: 0;--forge-focus-indicator-shape: 0;--forge-focus-indicator-offset-inline: var(--_split-button-focus-indicator-offset-adjusted)}::slotted(:last-child){--forge-button-shape-start-start-radius: 0;--forge-button-shape-end-start-radius: 0;--forge-focus-indicator-shape-start-start: 0;--forge-focus-indicator-shape-end-start: 0;--forge-focus-indicator-offset-inline: var(--_split-button-focus-indicator-offset-adjusted) 0}:host([variant=outlined]){--_split-button-focus-indicator-divider-offset: var(--forge-split-button-focus-indicator-divider-offset, 0px)}:host([variant=outlined]) ::slotted(:not(:first-child)){margin-inline-start:calc(-1 * var(--_split-button-gap))}:host(:is([variant=tonal],[variant=filled],[variant=raised],:not([variant]))) ::slotted(:not(:last-child)){margin-inline-end:var(--_split-button-gap)}";var L=Object.defineProperty,y=Object.getOwnPropertyDescriptor,l=(d,t,e,s)=>{for(var o=s>1?void 0:s?y(t,e):t,a=d.length-1,r;a>=0;a--)(r=d[a])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&L(t,e,o),o};let n=class extends _{static get observedAttributes(){return[i.attributes.VARIANT,i.attributes.THEME,i.attributes.DISABLED,i.attributes.DENSE,i.attributes.PILL]}constructor(){super(),b(this,N,D),this._core=new B(new v(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(d,t,e){switch(d){case i.attributes.VARIANT:this.variant=e;break;case i.attributes.THEME:this.theme=e;break;case i.attributes.DISABLED:this.disabled=u(e);break;case i.attributes.DENSE:this.dense=u(e);break;case i.attributes.PILL:this.pill=u(e);break}}};l([h()],n.prototype,"variant",2);l([h()],n.prototype,"theme",2);l([h()],n.prototype,"disabled",2);l([h()],n.prototype,"dense",2);l([h()],n.prototype,"pill",2);n=l([p({name:i.elementName,dependencies:[g]})],n);export{i as S};
