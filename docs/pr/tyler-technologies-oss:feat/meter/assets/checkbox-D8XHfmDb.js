import{C as p,l as k,m as f,s as d,a as x,k as m,d as y,b as v,g as E,i as _,e as A,j as C,B as w}from"./constants-DVLGQE2r.js";import{B as L,c as s}from"./base-adapter-C-lOm-JO.js";import{c as n,o as g,i as D}from"./feature-detection-DRCh51Sa.js";import"./index-BmocOEUj.js";import{W as z,a as R}from"./with-form-associated-DXFQToO5.js";import{W as T,a as N}from"./with-default-aria-BwsTg2ZV.js";import{W as S}from"./with-label-aware-Cjy84eJN.js";import{F as I}from"./focus-indicator-BvNL19jq.js";import{S as O}from"./state-layer-CG0HAXrj.js";const P=`${p}checkbox`,u={CHECKED:"checked",DEFAULT_CHECKED:"default-checked",INDETERMINATE:"indeterminate",VALUE:"value",DENSE:"dense",DISABLED:"disabled",REQUIRED:"required",READONLY:"readonly",LABEL_POSITION:"label-position",TABINDEX:"tabindex"},H={...u},q={ROOT:".forge-checkbox",LABEL:"#label",STATE_LAYER:"forge-state-layer"},o={elementName:P,selectors:q,observedAttributes:u,attributes:H};class B extends L{constructor(e){super(e),this._rootElement=k(e,o.selectors.ROOT),this._labelElement=k(e,o.selectors.LABEL),this._stateLayerElement=k(e,o.selectors.STATE_LAYER)}setChecked(e){this._component[f](),this._component[d]({ariaChecked:e?"true":"false"})}setDisabled(e){this._component[x]=!e,this._component[d]({ariaDisabled:e?"true":"false"}),this._stateLayerElement.disabled=e}setRequired(e){this._component[f](),this._component[d]({ariaRequired:e?"true":"false"})}setReadonly(e){this._component[d]({ariaReadOnly:e?"true":"false"}),this._stateLayerElement.disabled=e}setLabelPosition(e){this._labelElement.remove(),e==="start"?this._rootElement.prepend(this._labelElement):this._rootElement.append(this._labelElement)}syncValue(e,t){const a=e?new FormData:null;a&&e&&a.append(this._component.name,e),this._component.setFormValue(a,t)}}class F{constructor(e){this._adapter=e,this._checked=!1,this._defaultChecked=!1,this._indeterminate=!1,this._value="on",this._dense=!1,this._disabled=!1,this._required=!1,this._readonly=!1,this._labelPosition="end",this._clickListener=t=>this._handleChange(),this._keydownListener=t=>this._handleKeydown(t),this._keyupListener=t=>this._handleKeyup(t)}get _submittedValue(){return this._checked?this._value:null}get _formState(){return this._checked?this._indeterminate?"checked-indeterminate":"checked":this._indeterminate?"unchecked-indeterminate":"unchecked"}initialize(){this._adapter.addHostListener("click",this._clickListener,{capture:!0}),this._adapter.addHostListener("keydown",this._keydownListener),this._adapter.addHostListener("keyup",this._keyupListener,{capture:!0}),this._adapter.syncValue(this._submittedValue,this._formState)}_handleKeydown(e){e.key===" "&&e.preventDefault()}_handleKeyup(e){e.key===" "&&this._handleChange()}_handleChange(){if(this._readonly)return;const e=this._checked,t=!this._checked;this._checked=t;const a=new Event("change",{cancelable:!0,bubbles:!0});this._adapter.dispatchHostEvent(a),this._checked=e,!a.defaultPrevented&&(this.checked=t,this._indeterminate=!1,this._adapter.toggleHostAttribute(o.attributes.INDETERMINATE,this._indeterminate))}get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,this._adapter.setChecked(this._checked),this._adapter.syncValue(this._submittedValue,this._formState),this._adapter.toggleHostAttribute(o.attributes.CHECKED,this._checked))}get defaultChecked(){return this._defaultChecked}set defaultChecked(e){this._defaultChecked!==e&&(this._defaultChecked=e,this._adapter.toggleHostAttribute(o.attributes.DEFAULT_CHECKED,this._defaultChecked))}get indeterminate(){return this._indeterminate}set indeterminate(e){this._indeterminate!==e&&(this._indeterminate=e,this._adapter.syncValue(this._submittedValue,this._formState),this._adapter.toggleHostAttribute(o.attributes.INDETERMINATE,this._indeterminate))}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._adapter.syncValue(this._submittedValue,this._formState),(typeof this._value=="string"||this._value==null)&&this._adapter.setHostAttribute(o.attributes.VALUE,this._value))}get dense(){return this._dense}set dense(e){this._dense!==e&&(this._dense=e,this._adapter.toggleHostAttribute(o.attributes.DENSE,this._dense))}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._adapter.setDisabled(this.disabled),this._adapter.toggleHostAttribute(o.attributes.DISABLED,this._disabled))}get required(){return this._required}set required(e){this._required!==e&&(this._required=e,this._adapter.setRequired(this._required),this._adapter.toggleHostAttribute(o.attributes.REQUIRED,this._required))}get readonly(){return this._readonly}set readonly(e){this._readonly!==e&&(this._readonly=e,this._adapter.setReadonly(this._readonly),this._adapter.toggleHostAttribute(o.attributes.READONLY,this._readonly))}get labelPosition(){return this._labelPosition}set labelPosition(e){this.labelPosition!==e&&(this._labelPosition=e,this._adapter.setLabelPosition(this._labelPosition),this._adapter.setHostAttribute(o.attributes.LABEL_POSITION,this._labelPosition))}}const V=`<template>
  <div class="forge-checkbox" part="root">
    <div id="container" class="container">
      <div class="background" part="background">
        <svg class="icon icon--checked" aria-hidden="true" viewBox="0 0 24 24" part="checkmark">
          <path d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
        </svg>
        <svg class="icon icon--indeterminate" aria-hidden="true" viewBox="0 0 24 24" part="mixedmark">
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
        <forge-focus-indicator target=":host" part="focus-indicator"></forge-focus-indicator>
      </div>
      <forge-state-layer target=":host" exportparts="surface:state-layer"></forge-state-layer>
    </div>
    <div id="label" class="label" part="label">
      <slot></slot>
    </div>
  </div>
</template>
`,K=':host{display:inline-block;outline:none;-webkit-tap-highlight-color:transparent}:host([hidden]){display:none}.forge-checkbox{--_checkbox-primary-color: var(--forge-checkbox-primary-color, var(--forge-theme-tertiary, #3d5afe));--_checkbox-size: var(--forge-checkbox-size, 16px);--_checkbox-border-width: var(--forge-checkbox-border-width, var(--forge-border-medium, 2px));--_checkbox-icon-color: var(--forge-checkbox-icon-color, var(--forge-theme-on-tertiary, #ffffff));--_checkbox-state-layer-size: var(--forge-checkbox-state-layer-size, 40px);--_checkbox-state-layer-dense-size: var(--forge-checkbox-state-layer-dense-size, 24px);--_checkbox-background: var(--forge-checkbox-background, var(--forge-theme-surface, #ffffff));--_checkbox-width: var(--forge-checkbox-width, var(--_checkbox-size));--_checkbox-height: var(--forge-checkbox-height, var(--_checkbox-size));--_checkbox-unchecked-border-width: var(--forge-checkbox-unchecked-border-width, var(--_checkbox-border-width));--_checkbox-unchecked-border-color: var(--forge-checkbox-unchecked-border-color, var(--forge-theme-surface-container-high, #9e9e9e));--_checkbox-shape: var(--forge-checkbox-shape, calc(var(--forge-shape-small, 2px) * var(--forge-shape-factor, 1)));--_checkbox-elevation: var(--forge-checkbox-elevation, 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12));--_checkbox-checked-background: var(--forge-checkbox-checked-background, var(--_checkbox-primary-color));--_checkbox-checked-border-width: var(--forge-checkbox-checked-border-width, var(--_checkbox-border-width));--_checkbox-checked-border-color: var(--forge-checkbox-checked-border-color, var(--_checkbox-checked-background));--_checkbox-icon-checked-color: var(--forge-checkbox-icon-checked-color, var(--_checkbox-icon-color));--_checkbox-icon-indeterminate-color: var(--forge-checkbox-icon-indeterminate-color, var(--_checkbox-icon-color));--_checkbox-icon-stroke-width: var(--forge-checkbox-icon-stroke-width, 4px);--_checkbox-gap: var(--forge-checkbox-gap, 0);--_checkbox-justify: var(--forge-checkbox-justify, start);--_checkbox-direction: var(--forge-checkbox-direction, initial);--_checkbox-state-layer-width: var(--forge-checkbox-state-layer-width, var(--_checkbox-state-layer-size));--_checkbox-state-layer-height: var(--forge-checkbox-state-layer-height, var(--_checkbox-state-layer-size));--_checkbox-state-layer-checked-color: var(--forge-checkbox-state-layer-checked-color, var(--_checkbox-primary-color));--_checkbox-state-layer-unchecked-color: var(--forge-checkbox-state-layer-unchecked-color, var(--_checkbox-color));--_checkbox-state-layer-shape: var(--forge-checkbox-state-layer-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_checkbox-dense-gap: var(--forge-checkbox-dense-gap, 8px);--_checkbox-state-layer-dense-width: var(--forge-checkbox-state-layer-dense-width, var(--_checkbox-state-layer-dense-size));--_checkbox-state-layer-dense-height: var(--forge-checkbox-state-layer-dense-height, var(--_checkbox-state-layer-dense-size));--_checkbox-disabled-opacity: var(--forge-checkbox-disabled-opacity, .38);--_checkbox-animation-duration: var(--forge-checkbox-animation-duration, var(--forge-animation-duration-short2, .1s));--_checkbox-background-animation-timing: var(--forge-checkbox-background-animation-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_checkbox-icon-animation-timing: var(--forge-checkbox-icon-animation-timing, var(--forge-animation-easing-emphasized-accelerate, cubic-bezier(.3, 0, .8, .15)))}.forge-checkbox{position:relative;flex-direction:var(--_checkbox-direction);flex-shrink:0;align-items:center;justify-content:var(--_checkbox-justify);gap:var(--_checkbox-gap);display:flex}.forge-checkbox .container{position:relative;align-items:center;justify-content:center;display:flex;border-radius:var(--_checkbox-state-layer-shape);inline-size:var(--_checkbox-state-layer-width);block-size:var(--_checkbox-state-layer-height);cursor:pointer}.forge-checkbox .background{position:relative;align-items:center;justify-content:center;display:flex;transition-property:background,border-width,border-color;transition-duration:var(--_checkbox-animation-duration);transition-timing-function:var(--_checkbox-background-animation-timing);box-shadow:var(--_checkbox-elevation);border-style:solid;border-width:var(--_checkbox-unchecked-border-width);border-color:var(--_checkbox-unchecked-border-color);border-radius:var(--_checkbox-shape);box-sizing:border-box;block-size:var(--_checkbox-height);inline-size:var(--_checkbox-width);background:var(--_checkbox-background)}.forge-checkbox .icon{position:absolute;transition-property:stroke-dashoffset;transition-duration:var(--_checkbox-animation-duration);transition-timing-function:var(--_checkbox-icon-animation-timing);fill:none;stroke-width:var(--_checkbox-icon-stroke-width)}.forge-checkbox .icon--checked{stroke:var(--_checkbox-icon-checked-color);stroke-dasharray:30;transition-delay:0s;stroke-dashoffset:30}.forge-checkbox .icon--indeterminate{stroke:var(--_checkbox-icon-indeterminate-color);stroke-dasharray:20;transition-delay:0s;stroke-dashoffset:20}.forge-checkbox .label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .8125)));font-weight:var(--forge-typography-label2-font-weight, 400);line-height:var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label2-letter-spacing, .0096153846em);text-transform:var(--forge-typography-label2-text-transform, inherit);text-decoration:var(--forge-typography-label2-text-decoration, inherit);cursor:default}:host([checked]) .background{border-style:solid;border-width:var(--_checkbox-checked-border-width);border-color:var(--_checkbox-checked-border-color);background:var(--_checkbox-checked-background)}:host([checked]) .icon--checked{transition-delay:var(--_checkbox-animation-duration);stroke-dashoffset:0}:host([checked]) .icon--checked:dir(rtl){stroke-dashoffset:60}:host([checked]) .icon--indeterminate{transition-delay:0s;stroke-dashoffset:20}:host([checked]) forge-state-layer{--forge-state-layer-color: var(--_checkbox-state-layer-checked-color)}:host([indeterminate]) .background{border-style:solid;border-width:var(--_checkbox-checked-border-width);border-color:var(--_checkbox-checked-border-color);background:var(--_checkbox-checked-background)}:host([indeterminate]) .icon--checked{transition-delay:0s;stroke-dashoffset:30}:host([indeterminate]) .icon--indeterminate{transition-delay:var(--_checkbox-animation-duration);stroke-dashoffset:0}:host([indeterminate]) .icon--indeterminate:dir(rtl){stroke-dashoffset:40}:host([indeterminate]) forge-state-layer{--forge-state-layer-color: var(--_checkbox-state-layer-checked-color)}:host([dense]) .forge-checkbox{--_checkbox-gap: var(--_checkbox-dense-gap)}:host([dense]) .forge-checkbox .container{inline-size:var(--_checkbox-state-layer-dense-width);block-size:var(--_checkbox-state-layer-dense-height)}:host([disabled]) .forge-checkbox .container{opacity:var(--_checkbox-disabled-opacity);cursor:not-allowed}:host([readonly]) .forge-checkbox .container{cursor:not-allowed}@media (prefers-reduced-motion){.forge-checkbox{--_checkbox-animation-duration: var(--forge-checkbox-animation-duration, 0s)}}forge-state-layer{--forge-state-layer-color: var(--_checkbox-state-layer-unchecked-color)}forge-focus-indicator{--forge-focus-indicator-shape: 0px;--forge-focus-indicator-outward-offset: 8px}';var j=Object.defineProperty,M=Object.getOwnPropertyDescriptor,c=(r,e,t,a)=>{for(var h=a>1?void 0:a?M(e,t):e,l=r.length-1,b;l>=0;l--)(b=r[l])&&(h=(a?b(e,t,h):b(h))||h);return a&&h&&j(e,t,h),h};let i=class extends z(S(R(T(N(w))))){static get observedAttributes(){return Object.values(o.observedAttributes)}constructor(){super(),m(this,V,K),this[y]="checkbox",this._core=new F(new B(this))}connectedCallback(){super.connectedCallback(),this[d]({role:"checkbox",ariaChecked:this.checked?"true":"false",ariaDisabled:this.disabled?"true":"false",ariaRequired:this.required?"true":"false"}),this._core.initialize()}attributeChangedCallback(r,e,t){switch(r){case o.observedAttributes.CHECKED:this.checked=n(t);break;case o.observedAttributes.DEFAULT_CHECKED:this.defaultChecked=n(t);break;case o.observedAttributes.INDETERMINATE:this.indeterminate=n(t);break;case o.observedAttributes.VALUE:this.value=t;break;case o.observedAttributes.DENSE:this.dense=n(t);break;case o.observedAttributes.DISABLED:this.disabled=n(t);break;case o.observedAttributes.REQUIRED:this.required=n(t);break;case o.observedAttributes.READONLY:this.readonly=n(t);break;case o.observedAttributes.LABEL_POSITION:this.labelPosition=t;break}super.attributeChangedCallback(r,e,t)}[v](){return this.checked?this.value:null}[E](){return this.checked?this.indeterminate?"checked-indeterminate":"checked":this.indeterminate?"unchecked-indeterminate":"unchecked"}[f](){this[_].setValidity({valueMissing:this.required&&!this.checked},this[A]({checked:this.checked,required:this.required}))}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(r){this.checked=r==="checked"||r==="checked-indeterminate",this.indeterminate=r==="unchecked-indeterminate"||r==="checked-indeterminate"}labelClickedCallback(){this.click(),this.focus()}labelChangedCallback(r){this[d]({ariaLabel:r})}setFormValue(r,e){if(this[_].setFormValue(r,e),e){const t=g(e)?e:e[this.name];this.checked=t==="checked"||t==="checked-indeterminate",this.indeterminate=t==="unchecked-indeterminate"||t==="checked-indeterminate";return}g(r)?this.checked=!!r:r!=null&&r[this.name]?this.checked=!!r[this.name]:this.checked=!1}toggle(r){D(r)?this._core.checked=r:this._core.checked=!this._core.checked}};c([s()],i.prototype,"checked",2);c([s()],i.prototype,"defaultChecked",2);c([s()],i.prototype,"indeterminate",2);c([s()],i.prototype,"value",2);c([s()],i.prototype,"dense",2);c([s()],i.prototype,"disabled",2);c([s()],i.prototype,"required",2);c([s()],i.prototype,"readonly",2);c([s()],i.prototype,"labelPosition",2);i=c([C({name:o.elementName,dependencies:[I,O]})],i);export{o as C,i as a};
