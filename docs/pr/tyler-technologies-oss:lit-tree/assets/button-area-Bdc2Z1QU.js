import{C as _,l as a,j as b,B as c,k as p}from"./constants-BjnHqKgS.js";import{B as m,c as f}from"./base-adapter-CQdYccXX.js";import{c as L}from"./feature-detection-ONR9WHvu.js";import"./index-BgGCUUFB.js";import{a as g,F as E}from"./focus-indicator-I_IrwQSK.js";import{a as S,S as v}from"./state-layer-CxIpCmDW.js";import{g as O}from"./event-utils-C1SDeUaq.js";const y=`${_}button-area`,T={DISABLED:"disabled",IGNORE:"data-forge-ignore",IGNORE_ALT:"forge-ignore"},l={ROOT:"root",BUTTON_SLOT:"button",CONTENT_SLOT:"content"},B={ROOT:"forge-button-area"},w={ROOT:`#${l.ROOT}`,BUTTON_SLOT:"slot[name=button]",CONTENT_SLOT:`#${l.CONTENT_SLOT}`},o={elementName:y,attributes:T,ids:l,classes:B,selectors:w};class C extends m{constructor(t){super(t),this._rootElement=a(t,o.selectors.ROOT),this._buttonSlotElement=a(t,o.selectors.BUTTON_SLOT),this._contentSlotElement=a(t,o.selectors.CONTENT_SLOT),this._focusIndicatorElement=a(t,g.elementName),this._stateLayerElement=a(t,S.elementName)}destroy(){}setDisabled(t){var e;(e=this._buttonElement)==null||e.toggleAttribute(o.attributes.DISABLED,t),t?(this._focusIndicatorElement.remove(),this._stateLayerElement.remove()):this._rootElement.append(this._focusIndicatorElement,this._stateLayerElement)}addListener(t,e,r){this._rootElement.addEventListener(t,e,{capture:r})}removeListener(t,e,r){this._rootElement.removeEventListener(t,e,{capture:r})}addButtonSlotListener(t,e){this._buttonSlotElement.addEventListener(t,e)}removeButtonSlotListener(t,e){this._buttonSlotElement.removeEventListener(t,e)}addContentSlotListener(t,e){this._contentSlotElement.addEventListener(t,e)}removeContentSlotListener(t,e){this._contentSlotElement.removeEventListener(t,e)}animateStateLayer(){this._stateLayerElement.playAnimation()}startButtonObserver(t){this._buttonElement&&(this._buttonObserver=new MutationObserver(t),this._buttonObserver.observe(this._buttonElement,{attributeFilter:[o.attributes.DISABLED]}))}stopButtonObserver(){this._buttonObserver&&(this._buttonObserver.disconnect(),this._buttonObserver=void 0)}detectSlottedButton(){this._buttonElement=this._buttonSlotElement.assignedElements()[0]}isButtonDisabled(){var t;return((t=this._buttonElement)==null?void 0:t.disabled)??!0}requestDisabledButtonFrame(){this._buttonElement&&(this._buttonElement.disabled=!0,requestAnimationFrame(()=>this._buttonElement.disabled=!1))}}class N{constructor(t){this._adapter=t,this._disabled=!1,this._clickListener=this._handleClick.bind(this),this._keydownListener=this._handleKeydown.bind(this),this._pointerdownListener=this._handlePointerdown.bind(this),this._ignoreStateLayerListener=this._handleIgnoreStateLayer.bind(this),this._slotListener=this._handleSlotChange.bind(this)}initialize(){this._adapter.addListener("click",this._clickListener),this._adapter.addListener("keydown",this._keydownListener),this._adapter.addListener("pointerdown",this._pointerdownListener),this._adapter.addContentSlotListener("click",this._ignoreStateLayerListener.bind(this)),this._adapter.addContentSlotListener("pointerdown",this._ignoreStateLayerListener.bind(this)),this._adapter.addContentSlotListener("pointerup",this._ignoreStateLayerListener.bind(this)),this._adapter.addButtonSlotListener("slotchange",this._slotListener)}destroy(){this._adapter.removeListener("click",this._clickListener),this._adapter.removeListener("keydown",this._keydownListener),this._adapter.removeListener("pointerdown",this._pointerdownListener),this._adapter.removeContentSlotListener("click",this._ignoreStateLayerListener.bind(this)),this._adapter.removeContentSlotListener("pointerdown",this._ignoreStateLayerListener.bind(this)),this._adapter.removeContentSlotListener("pointerup",this._ignoreStateLayerListener.bind(this)),this._adapter.removeButtonSlotListener("slotchange",this._slotListener),this._adapter.destroy(),this._adapter.stopButtonObserver()}_handleClick(t){this._disabled&&t.stopPropagation();const e=window.getSelection();(e==null?void 0:e.type)==="Range"&&(e==null?void 0:e.toString().trim())!==""&&t.stopPropagation(),this._shouldIgnoreEvent(t)&&t.stopPropagation()}_handleKeydown(t){t.key!==" "&&t.key!=="Enter"||(this._shouldIgnoreEvent(t)?t.stopPropagation():this._adapter.animateStateLayer())}_handlePointerdown(t){this._disabled||this._shouldIgnoreEvent(t)&&this._adapter.requestDisabledButtonFrame()}_handleIgnoreStateLayer(t){this._disabled||this._shouldIgnoreEvent(t)&&t.stopPropagation()}_handleSlotChange(){this._adapter.stopButtonObserver(),this._adapter.detectSlottedButton(),this._adapter.startButtonObserver(()=>this._handleButtonDisabled()),this._adapter.isButtonDisabled()?this.disabled=!0:this._disabled&&this._adapter.setDisabled(!0)}_handleButtonDisabled(){this.disabled=this._adapter.isButtonDisabled()}_shouldIgnoreEvent(t){return O(t).some(r=>r.nodeType===1&&(r.hasAttribute(o.attributes.IGNORE)||r.hasAttribute(o.attributes.IGNORE_ALT)))}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.setDisabled(this._disabled),this._adapter.toggleHostAttribute(o.attributes.DISABLED,this._disabled))}}const A=`<template>
  <div class="forge-button-area" id="root" part="root">
    <div class="button" id="button" part="button">
      <slot name="button"></slot>
    </div>
    <slot id="content"></slot>
    <forge-state-layer target="root" exportparts="surface:state-layer"></forge-state-layer>
    <forge-focus-indicator target="button" part="focus-indicator" inward></forge-focus-indicator>
  </div>
</template>
`,D=":host{display:block;position:relative}:host .forge-button-area{cursor:var(--_button-area-cursor)}:host([hidden]){display:none}:host([disabled]) .forge-button-area{cursor:var(--_button-area-disabled-cursor)}.forge-button-area{--_button-area-primary-color: var(--forge-button-area-primary-color, var(--forge-theme-primary, #3f51b5));--_button-area-cursor: var(--forge-button-area-cursor, pointer);--_button-area-disabled-cursor: var(--forge-button-area-disabled-cursor, not-allowed);--_button-area-focus-indicator-color: var(--forge-button-area-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_button-area-focus-indicator-offset: var(--forge-button-area-focus-indicator-offset, 4px)}.forge-button-area{position:relative;overflow:hidden}.forge-button-area .button{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:fixed;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}forge-focus-indicator{z-index:1;--forge-focus-indicator-color: var(--_button-area-focus-indicator-color);--forge-focus-indicator-outward-offset: var(--_button-area-focus-indicator-offset)}forge-state-layer{--forge-state-layer-color: var(--_button-area-primary-color);border-radius:inherit}";var I=Object.defineProperty,k=Object.getOwnPropertyDescriptor,u=(i,t,e,r)=>{for(var s=r>1?void 0:r?k(t,e):t,n=i.length-1,d;n>=0;n--)(d=i[n])&&(s=(r?d(t,e,s):d(s))||s);return r&&s&&I(t,e,s),s};let h=class extends c{static get observedAttributes(){return[o.attributes.DISABLED]}constructor(){super(),p(this,A,D),this._core=new N(new C(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(i,t,e){switch(i){case o.attributes.DISABLED:this.disabled=L(e);break}}};u([f()],h.prototype,"disabled",2);h=u([b({name:o.elementName,dependencies:[E,v]})],h);
