import{C as f,l as a,j as p,B as _,k as u}from"./constants-D2tqnpVB.js";import{B as v,c as g}from"./base-adapter-BD6-QDkX.js";import{c as b}from"./feature-detection-CY6TVbRZ.js";import{E as S}from"./index-RsKXMDm2.js";import{I as E}from"./icon-D5yjdXv8.js";import"./index-CiLSBptl.js";import{I as y}from"./icon-button-4fx-LScl.js";import"./focus-indicator-NbLDNrYT.js";import"./state-layer-sxQMIn2c.js";import{a as D}from"./tooltip-BgQLBWUo.js";import"./overlay-8j8D8Fh1.js";const m=`${f}banner`,h={DISMISSED:"dismissed",PERSISTENT:"persistent",CAN_DISMISS:"can-dismiss",THEME:"theme"},I={...h},T={HAS_ICON:"has-icon",HAS_BUTTON:"has-button"},B={DISMISS_BUTTON:"[part=dismiss-button]",ICON_SLOT:"slot[name=icon]",BUTTON_SLOT:"slot[name=button]"},C={THEME:"info"},k={BEFORE_DISMISS:`${m}-before-dismiss`,DISMISSED:`${m}-dismissed`},t={elementName:m,observedAttributes:h,attributes:I,classes:T,selectors:B,defaults:C,events:k};class N extends v{constructor(e){super(e),this._rootElement=this._component,this._rootElement=a(e,".forge-banner"),this._dismissButtonElement=a(e,t.selectors.DISMISS_BUTTON),this._iconSlotElement=a(e,t.selectors.ICON_SLOT),this._buttonSlotElement=a(e,t.selectors.BUTTON_SLOT)}initialize(){this._iconSlotElement.addEventListener("slotchange",this._onIconSlotChange.bind(this)),this._buttonSlotElement.addEventListener("slotchange",this._onButtonSlotChange.bind(this)),this._onIconSlotChange(),this._onButtonSlotChange()}setDismissButtonVisibility(e){this._dismissButtonElement.hidden=!e}addDismissListener(e){this._dismissButtonElement.addEventListener("click",e)}removeDismissListener(e){this._dismissButtonElement.removeEventListener("click",e)}setDismissed(e){this._rootElement.inert=e}async startDismissCompleteListener(){return new Promise(e=>{this._rootElement.addEventListener("transitionend",()=>e(),{once:!0})})}_onIconSlotChange(){this._rootElement.classList.toggle(t.classes.HAS_ICON,this._iconSlotElement.assignedNodes().length>0)}_onButtonSlotChange(){this._rootElement.classList.toggle(t.classes.HAS_BUTTON,this._buttonSlotElement.assignedNodes().length>0)}}class L{constructor(e){this._adapter=e,this._dismissed=!1,this._persistent=!1,this._theme=t.defaults.THEME,this._dismissListener=this._onDismiss.bind(this)}initialize(){this._adapter.initialize(),this._persistent||this._addDismissListener()}async _onDismiss(){if(this._dismissed||this._persistent)return;const e=this._dismissed;this._dismissed=!this._dismissed;const n=new CustomEvent(t.events.BEFORE_DISMISS,{bubbles:!0,composed:!0,cancelable:!0});if(this._adapter.dispatchHostEvent(n),this._dismissed=e,n.defaultPrevented)return;const o=this._adapter.startDismissCompleteListener();this.dismissed=!this._dismissed,await o,this._adapter.dispatchHostEvent(new CustomEvent(t.events.DISMISSED,{bubbles:!0,composed:!0}))}_addDismissListener(){this._adapter.addDismissListener(this._dismissListener)}_removeDismissEventListener(){this._adapter.removeDismissListener(this._dismissListener)}_applyPersistent(){this._adapter.setDismissButtonVisibility(!this._persistent),this._persistent?this._removeDismissEventListener():this._addDismissListener()}get dismissed(){return this._dismissed}set dismissed(e){e=!!e,this.dismissed!==e&&(this._dismissed=e,this._adapter.setDismissed(this._dismissed),this._adapter.toggleHostAttribute(t.attributes.DISMISSED,this.dismissed))}get persistent(){return this._persistent}set persistent(e){e=!!e,this._persistent!==e&&(this._persistent=e,this._applyPersistent(),this._adapter.toggleHostAttribute(t.attributes.PERSISTENT,this._persistent))}get theme(){return this._theme}set theme(e){this._theme!==e&&(this._theme=e??t.defaults.THEME,this._adapter.setHostAttribute(t.attributes.THEME,this._theme))}}const O=`<template>
  <div class="forge-banner" part="root">
    <div class="inner">
      <div class="container">
        <slot name="icon"></slot>
        <slot></slot>
        <div class="button-container">
          <slot name="button"></slot>
        </div>
      </div>
      <div class="dismiss-button-container">
        <slot name="dismiss-button">
          <forge-icon-button part="dismiss-button">
            <forge-icon name="cancel"></forge-icon>
          </forge-icon-button>
          <forge-tooltip type="label" placement="bottom">
            <slot name="dismiss-tooltip">Dismiss</slot>
          </forge-tooltip>
        </slot>
      </div>
    </div>
  </div>
</template>
`,A=":host{display:block;container-type:inline-size}:host([hidden]){display:none}.forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-info-container, #c7daf0));--_banner-color: var(--forge-banner-color, var(--forge-theme-text-high, rgba(0, 0, 0, .87)));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-info-container, #0b3768));--_banner-gap: var(--forge-banner-gap, var(--forge-spacing-small, 12px));--_banner-padding-inline: var(--forge-banner-padding-inline, var(--forge-spacing-large, 24px));--_banner-padding-block: var(--forge-banner-padding-block, var(--forge-spacing-small, 12px));--_banner-transition-duration: var(--forge-banner-transition-duration, var(--forge-animation-duration-short4, .2s));--_banner-transition-easing: var(--forge-banner-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)))}.forge-banner{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;overflow:hidden;box-sizing:border-box;transition-property:opacity,grid-template-rows,min-height;transition-duration:var(--_banner-transition-duration);transition-timing-function:var(--_banner-transition-easing);background:var(--_banner-background);color:var(--_banner-color);opacity:1}.forge-banner .inner{display:grid;grid-template-columns:1fr auto;place-items:center;gap:var(--_banner-gap);overflow:hidden;padding-inline:var(--_banner-padding-inline)}.forge-banner .container{display:flex;justify-content:center;align-items:center;gap:var(--_banner-gap);flex:1 1 auto;padding-block:var(--_banner-padding-block)}.forge-banner .dismiss-button-container{display:flex;align-items:center;gap:var(--_banner-gap)}.forge-banner ::slotted(forge-button[slot=dismiss-button]){--forge-button-primary-color: var(--_banner-color)}.forge-banner ::slotted(forge-icon-button[slot=dismiss-button]),.forge-banner forge-icon-button[part=dismiss-button]{color:var(--_banner-icon-color);--forge-icon-button-focus-indicator-color: var(--_banner-color)}::slotted(forge-button[slot=button]){--forge-button-primary-color: var(--_banner-color)}::slotted([slot=icon]){color:var(--_banner-icon-color)}:host([dismissed]) .forge-banner{grid-template-rows:0fr;opacity:0}:host([theme=primary]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-primary-container, #d1d5ed));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-primary-container, #222c62))}:host([theme=secondary]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-secondary-container, #fff0c3));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-secondary-container, #8a6804))}:host([theme=tertiary]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-tertiary-container, #d0d7ff));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-tertiary-container, #213189))}:host([theme=success]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-success-container, #cde0ce));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-success-container, #19441b))}:host([theme=error]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-error-container, #ecc2c9));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-error-container, #5f0011))}:host([theme=warning]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-warning-container, #f4d3c2));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-warning-container, #712700))}:host([theme=danger]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-error-container, #ecc2c9));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-error-container, #5f0011))}:host([theme=info-secondary]) .forge-banner{--_banner-background: var(--forge-banner-background, var(--forge-theme-surface-container, #e0e0e0));--_banner-icon-color: var(--forge-banner-icon-color, var(--forge-theme-on-surface-container, #000000))}@container (max-width: 600px){.forge-banner.has-button .container{display:grid;grid-template-rows:[content] 1fr [button] auto;grid-template-columns:[content] 1fr;place-items:normal}.forge-banner.has-button.has-icon .container{grid-template-columns:[icon] auto [content] 1fr}.forge-banner.has-button .inner{place-items:normal}.forge-banner.has-button .button-container{grid-row:button;grid-column:content}.forge-banner.has-button .dismiss-button-container{align-items:flex-start}}";var w=Object.defineProperty,M=Object.getOwnPropertyDescriptor,c=(r,e,n,o)=>{for(var s=o>1?void 0:o?M(e,n):e,d=r.length-1,l;d>=0;d--)(l=r[d])&&(s=(o?l(e,n,s):l(s))||s);return o&&s&&w(e,n,s),s};let i=class extends _{static get observedAttributes(){return Object.values(t.observedAttributes)}constructor(){super(),E.define(S),u(this,O,A),this._core=new L(new N(this))}connectedCallback(){this._core.initialize()}attributeChangedCallback(r,e,n){switch(r){case t.observedAttributes.DISMISSED:this.dismissed=b(n);break;case t.observedAttributes.PERSISTENT:this.persistent=b(n);break;case t.observedAttributes.CAN_DISMISS:this.persistent=b(n)===!1;break;case t.observedAttributes.THEME:this.theme=n;break}}get canDismiss(){return!this.persistent}set canDismiss(r){this.persistent=!r}};c([g()],i.prototype,"dismissed",2);c([g()],i.prototype,"persistent",2);c([g()],i.prototype,"theme",2);i=c([p({name:t.elementName,dependencies:[y,D]})],i);export{t as B};
