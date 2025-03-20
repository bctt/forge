import{C as g,l as d,j as E,k as f}from"./constants-DHnR0122.js";import{B as L,c as A}from"./base-adapter-B_B1W7NX.js";import{t as y,n as C,c as T}from"./feature-detection-C61kIZu7.js";import{O as P}from"./index-RsKXMDm2.js";import{B as n,F as p,a as I,b as F}from"./base-field-B1mAVOnC.js";import"./focus-indicator-B_9E-jM6.js";import"./index-CiLSBptl.js";import{L as O}from"./label-DX_PQUsn.js";import"./button-Cye3g7s2.js";import"./state-layer-DA2sYK0k.js";import"./button-toggle-group-JMDAjILZ.js";import"./checkbox-BwLNDz7l.js";import{I as S}from"./icon-button-BgvK8Gih.js";import{I as B}from"./icon-DNSPAaK0.js";import"./switch-B2m0S8OE.js";import{a as N}from"./tooltip-CCMKllfO.js";import"./overlay-CFvbk99I.js";import{j as x}from"./utils-DXGAA5XK.js";function _t(i,t){let e=t.replace(/\[(\w+)\]/g,".$1");e=e.replace(/^\./,"");const r=e.split(".");for(let s=0;s<r.length;++s){const a=r[s];if(i&&typeof i=="object"&&a in i)i=i[a];else{i="";break}}return i}function ut(i,t){return i.find(e=>v(e,t))}function ct(i,t){if(!i||!i.length)throw new Error("Invalid key");const e={};for(const r of i)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r];else throw new Error(`Invalid key. The property "${r}" does not exist in the data.`);return e}function v(i,t){return Object.keys(t).every(e=>i[e]===t[e])}function w(i,t,e,r){let s=t;t.hasOwnProperty(e)||(s=Object.getPrototypeOf(t));const a=Object.getOwnPropertyDescriptor(s,e);if(!a)throw new Error(`Property ${e} does not exist.`);return Object.defineProperty(t,e,{configurable:!0,get(){return a.get?a.get.apply(this,arguments):void 0},set(){a.set&&a.set.apply(this,arguments),r.apply(i,arguments)}}),()=>Object.defineProperty(t,e,a)}class V extends L{setFieldProperty(t,e){this._fieldElement[t]=e}floatLabelWithoutAnimation(t){this._fieldElement.floatLabelWithoutAnimation(t)}}class D{constructor(t){this._adapter=t,this._labelPosition=n.defaults.DEFAULT_LABEL_POSITION,this._labelAlignment=n.defaults.DEFAULT_LABEL_ALIGNMENT,this._invalid=!1,this._required=!1,this._optional=!1,this._disabled=!1,this._variant=n.defaults.DEFAULT_VARIANT,this._theme=n.defaults.DEFAULT_THEME,this._shape=n.defaults.DEFAULT_SHAPE,this._density=n.defaults.DEFAULT_DENSITY,this._dense=!1,this._popoverIcon=!1,this._popoverExpanded=!1,this._supportTextInset=n.defaults.DEFAULT_SUPPORT_TEXT_INSET,this._permanentlyFloatLabel=!1}get _hasValue(){return this._adapter.hasValue}get _hasPlaceholder(){return this._adapter.hasPlaceholder}click(){this._adapter.click()}applyLabel(t){this._adapter.applyLabel(t)}floatLabelWithoutAnimation(t){this._adapter.floatLabelWithoutAnimation(this._hasValue||this._hasPlaceholder||t)}_tryFloatLabel(t){if(!this._permanentlyFloatLabel){if(this._labelPosition!=="inset"){this._adapter.tryFloatLabel(!1);return}this._adapter.tryFloatLabel(t)}}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition!==t&&(this._labelPosition=t,this._adapter.setFieldProperty("labelPosition",t),this._adapter.setHostAttribute(n.attributes.LABEL_POSITION,t))}get labelAlignment(){return this._labelAlignment}set labelAlignment(t){this._labelAlignment!==t&&(this._labelAlignment=t,this._adapter.setFieldProperty("labelAlignment",t),this._adapter.setHostAttribute(n.attributes.LABEL_ALIGNMENT,t))}get invalid(){return this._invalid}set invalid(t){this._invalid!==t&&(this._invalid=t,this._adapter.setFieldProperty("invalid",t),this._adapter.toggleHostAttribute(n.attributes.INVALID,t))}get required(){return this._required}set required(t){this._required!==t&&(this._required=t,this._adapter.setFieldProperty("required",t),this._adapter.toggleHostAttribute(n.attributes.REQUIRED,t))}get optional(){return this._optional}set optional(t){this._optional!==t&&(this._optional=t,this._adapter.setFieldProperty("optional",t),this._adapter.toggleHostAttribute(n.attributes.OPTIONAL,t))}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.setFieldProperty("disabled",t),this._adapter.toggleHostAttribute(n.attributes.DISABLED,t))}get permanentlyFloatLabel(){return this._permanentlyFloatLabel}set permanentlyFloatLabel(t){this._permanentlyFloatLabel!==t&&(this._permanentlyFloatLabel=t,this._adapter.setFieldProperty("floatLabel",t||this._hasValue||this._hasPlaceholder),this._adapter.toggleHostAttribute(n.attributes.FLOAT_LABEL,t))}get variant(){return this._variant}set variant(t){this._variant!==t&&(this._variant=t,this._adapter.setFieldProperty("variant",t),this._adapter.setHostAttribute(n.attributes.VARIANT,t))}get theme(){return this._theme}set theme(t){this._theme!==t&&(this._theme=t,this._adapter.setFieldProperty("theme",t),this._adapter.setHostAttribute(n.attributes.THEME,t))}get shape(){return this._shape}set shape(t){this._shape!==t&&(this._shape=t,this._adapter.setFieldProperty("shape",t),this._adapter.setHostAttribute(n.attributes.SHAPE,t))}get density(){return this._density}set density(t){this._density!==t&&(this._density=t,this._adapter.setFieldProperty("density",t),this._adapter.setHostAttribute(n.attributes.DENSITY,t))}get dense(){return this._dense}set dense(t){this._dense!==t&&(this._dense=t,this._adapter.setFieldProperty("dense",t),this._adapter.toggleHostAttribute(n.attributes.DENSE,t))}get popoverIcon(){return this._popoverIcon}set popoverIcon(t){this._popoverIcon!==t&&(this._popoverIcon=t,this._adapter.setFieldProperty("popoverIcon",t),this._adapter.toggleHostAttribute(n.attributes.POPOVER_ICON,t))}get popoverExpanded(){return this._popoverExpanded}set popoverExpanded(t){this._popoverExpanded!==t&&(this._popoverExpanded=t,this._adapter.setFieldProperty("popoverExpanded",t))}get supportTextInset(){return this._supportTextInset}set supportTextInset(t){this._supportTextInset!==t&&(this._supportTextInset=t,this._adapter.setFieldProperty("supportTextInset",t),this._adapter.setHostAttribute(n.attributes.SUPPORT_TEXT_INSET,t))}}const u=`${g}text-field`,c={SHOW_CLEAR:"show-clear"},R={...c},H={FIELD:"#field",DEFAULT_SLOT:"slot:not([name])",LABEL_SLOT:"slot[name=label]",CLEAR_BUTTON_SLOT:"slot[name=clear-button]",FORGE_LABEL:O.elementName,INPUT:":where(input:not([type=button], [type=checkbox], [type=color], [type=hidden], [type=image], [type=radio], [type=range], [type=reset], [type=submit]), textarea)"},k=["disabled","placeholder"],U={TEXTAREA:"TEXTAREA",LABEL:"LABEL"},M={CLEAR:`${u}-clear`},o={elementName:u,observedAttributes:c,attributes:R,selectors:H,observedInputAttributes:k,tagNames:U,events:M};class q extends V{constructor(t){super(t),this._inputElements=[],this._destroyValueChangerListeners=[],this._fieldElement=d(t,o.selectors.FIELD),this._clearButtonSlotElement=d(t,o.selectors.CLEAR_BUTTON_SLOT),this._defaultSlotElement=d(t,o.selectors.DEFAULT_SLOT),this._labelSlotElement=d(t,o.selectors.LABEL_SLOT),this._fieldElement.setAttribute("exportparts",Object.values(p.parts).join(", ")),this._clearButtonSlotElement.remove()}get hasValue(){return this._inputElements.some(t=>!!t.value)}get hasPlaceholder(){return this._inputElements.some(t=>!!t.placeholder)}get popoverTargetElement(){return this._popoverTargetElement||(this._popoverTargetElement=d(this._fieldElement,p.selectors.POPOVER_TARGET)),this._popoverTargetElement}addRootListener(t,e){this._fieldElement.addEventListener(t,e)}removeRootListener(t,e){this._fieldElement.removeEventListener(t,e)}disableInput(t){this._inputElements.forEach(e=>e.disabled=t)}inputIsDisabled(){return this._inputElements.some(t=>t.disabled)}click(){var t;(t=this._inputElements[0])==null||t.focus()}applyLabel(t){this._inputElements.forEach(e=>{y(e,!!t,"aria-label",t??"")})}handleDefaultSlotChange(t){var r;(r=this._inputMutationObserver)==null||r.disconnect();const e=this._defaultSlotElement.assignedElements();e.length&&(this._inputElements=e.filter(s=>s.matches(o.selectors.INPUT)),this._fieldElement.multiline=this._inputElements.some(s=>s.tagName===o.tagNames.TEXTAREA),this._inputMutationObserver=new MutationObserver(s=>{s.forEach(a=>{if(a.attributeName){const h=a.target.getAttribute(a.attributeName),m=a.attributeName;t(m,h)}})}),this._inputElements.forEach(s=>{var a;(a=this._inputMutationObserver)==null||a.observe(s,{attributes:!0,attributeFilter:[...o.observedInputAttributes]}),this._component.disabled&&(s.disabled=!0),Object.values(o.observedInputAttributes).forEach(l=>{const h=l;t(h,s.getAttribute(h))})}))}tryAddValueChangeListener(t,e){this._destroyValueChangerListeners.forEach(r=>r()),this._destroyValueChangerListeners=this._inputElements.map(r=>w(t,r,"value",e))}removeValueChangeListener(){this._destroyValueChangerListeners.forEach(t=>t())}tryFloatLabel(t){if(t!==void 0){this._fieldElement.floatLabel=t;return}this._fieldElement.floatLabel=this.hasValue||this.hasPlaceholder}tryConnectSlottedLabel(){var l;if(this._inputElements.length!==1||(l=this._inputElements[0].labels)!=null&&l.length)return;const t=this._inputElements[0],e=this._labelSlotElement.assignedElements({flatten:!0}),r=e.find(h=>h.matches(o.selectors.FORGE_LABEL));if(r){r.forElement=this._component,r.clickTarget=t;return}const s=e.find(h=>h.tagName===o.tagNames.LABEL);if(!s||s.control)return;const a=t.id||`forge-input-${C()}`;t.id=a,s.htmlFor=a}connectClearButton(t){this._clearButtonSlotElement.addEventListener("click",t)}disconnectClearButton(t){this._clearButtonSlotElement.removeEventListener("click",t)}toggleClearButtonVisibility(t){t?this._fieldElement.append(this._clearButtonSlotElement):this._clearButtonSlotElement.remove()}clearInput(){this._inputElements.length&&(this._inputElements.forEach(t=>{t.value="",t.dispatchEvent(new Event("input"))}),this._inputElements[0].focus())}getAllSlotElements(){var t;return Array.from(((t=this._component.shadowRoot)==null?void 0:t.querySelectorAll("slot"))??[])}}class W extends D{constructor(t){super(t),this._adapter=t,this._showClear=!1,this._slotChangeListener=this._onSlotChange.bind(this),this._inputAttributeListener=this._onInputAttributeChange.bind(this),this._valueChangeListener=this._onValueChange.bind(this),this._inputListener=this._onInputChange.bind(this),this._clearButtonClickListener=e=>this._onClearButtonClick(e)}initialize(){this._adapter.tryApplyGlobalConfiguration(["labelPosition","variant"]),this._adapter.addRootListener("slotchange",this._slotChangeListener),this._adapter.addRootListener("input",this._inputListener),this._initializeSlots()}destroy(){this._adapter.removeRootListener("slotchange",this._slotChangeListener),this._adapter.removeRootListener("input",this._inputListener),this._adapter.removeValueChangeListener()}get popoverTargetElement(){return this._adapter.popoverTargetElement}_initializeSlots(){this._adapter.getAllSlotElements().forEach(t=>this._handleSlotChange(t.name))}_onSlotChange(t){const e=t.target;this._handleSlotChange(e.name)}_handleSlotChange(t){switch(t){case"label":this._adapter.tryConnectSlottedLabel();break;case"":this._adapter.handleDefaultSlotChange(this._inputAttributeListener),this._adapter.tryAddValueChangeListener(this,this._valueChangeListener),this._tryFloatLabel();break}}_onInputAttributeChange(t,e){switch(t){case"disabled":this.disabled=e!==null;break;case"placeholder":this._tryFloatLabel();break}}_onClearButtonClick(t){const e=new CustomEvent(o.events.CLEAR,{bubbles:!0,cancelable:!0,composed:!0});this._adapter.dispatchHostEvent(e),e.defaultPrevented||this._adapter.clearInput()}_onInputChange(t){let e;x(t,InputEvent.name)&&t.target.type==="number"&&(t.data!=null||t.target.validity.badInput)&&(e=!0),this._syncValueChange({floatLabel:e})}_onValueChange(){this._syncValueChange()}_syncValueChange({floatLabel:t=void 0}={}){this._tryFloatLabel(t),this._toggleClearButtonVisibility()}_toggleClearButtonVisibility(){this._adapter.toggleClearButtonVisibility(this._showClear&&this._hasValue&&!this.disabled)}get showClear(){return this._showClear}set showClear(t){this._showClear!==t&&(this._showClear=t,this._adapter.toggleHostAttribute(o.attributes.SHOW_CLEAR,t),t?this._adapter.connectClearButton(this._clearButtonClickListener):this._adapter.disconnectClearButton(this._clearButtonClickListener),this._toggleClearButtonVisibility())}get disabled(){return super.disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.toggleHostAttribute(p.attributes.DISABLED,t),this._adapter.setFieldProperty("disabled",t),this._adapter.disableInput(t),this._toggleClearButtonVisibility())}get labelPosition(){return super.labelPosition}set labelPosition(t){this._labelPosition!==t&&(this._labelPosition=t,this._adapter.toggleHostAttribute(p.attributes.LABEL_POSITION,!0,t),this._adapter.setFieldProperty("labelPosition",t),this._tryFloatLabel())}}const j=`<template>
  <forge-field id="field">
    <slot slot="label" name="label"></slot>
    <slot slot="start" name="start"></slot>
    <slot></slot>
    <slot slot="end" name="end"></slot>
    <slot slot="end" name="clear-button">
      <forge-icon-button tabindex="-1" dense>
        <forge-icon name="clear"></forge-icon>
      </forge-icon-button>
      <forge-tooltip type="label">
        <slot name="clear-button-tooltip">Clear</slot>
      </forge-tooltip>
    </slot>
    <slot slot="accessory" name="accessory"></slot>
    <slot slot="support-text" name="support-text"></slot>
    <slot slot="support-text-end" name="support-text-end"></slot>

    <!-- Include deprecated leading alias -->
    <slot slot="start" name="leading"></slot>
    <!-- Include deprecated trailing alias -->
    <slot slot="end" name="trailing"></slot>
    <!-- Include deprecated addon-end alias -->
    <slot slot="accessory" name="addon-end"></slot>
    <!-- Include deprecated helper-text alias -->
    <slot slot="support-text" name="helper-text"></slot>
  </forge-field>
</template>
`,X=":host{display:block}:host([hidden]){display:none}forge-field{display:contents}";var G=Object.defineProperty,$=Object.getOwnPropertyDescriptor,b=(i,t,e,r)=>{for(var s=r>1?void 0:r?$(t,e):t,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(t,e,s):l(s))||s);return r&&s&&G(t,e,s),s};let _=class extends F{static get observedAttributes(){return[...Object.values(n.observedAttributes),...Object.values(o.observedAttributes)]}constructor(){super(),f(this,j,X),this._core=new W(new q(this)),B.define(P)}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(i,t,e){switch(super.attributeChangedCallback(i,t,e),i){case o.attributes.SHOW_CLEAR:this.showClear=T(e);break}}get popoverTargetElement(){return this._core.popoverTargetElement}};b([A()],_.prototype,"showClear",2);_=b([E({name:o.elementName,dependencies:[I,S,N]})],_);export{V as B,o as T,D as a,_ as b,ct as c,ut as f,_t as g,w as l,v as m};
