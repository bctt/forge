import{C as w,j as B,B as W,l as C,a as G,m as N,k as Q,d as Z,s as F,b as tt,i as H,e as et}from"./constants-9n5_0r7k.js";import{B as $,c as l}from"./base-adapter-B6TJxM93.js";import{c as b,i as E,D as Y,r as q,n as it,E as st,t as v}from"./feature-detection-DRCh51Sa.js";import{J as nt,K as rt}from"./index-ByifSpfC.js";import{C as ot}from"./circular-progress-qTjvyVPT.js";import{W as lt,a as at}from"./with-form-associated-Bje5Hee1.js";import{W as pt,a as dt}from"./with-default-aria-B0dk5gj8.js";import{W as ht}from"./with-label-aware-OEbK3wHg.js";import{B as c,F as h,b as _t}from"./base-field-7jt5_xYz.js";import{b as ct,s as U}from"./focus-indicator-COi7jdIi.js";import"./index-BmocOEUj.js";import{I as ut,a as bt}from"./icon-DB7kP3Ec.js";import{I as mt}from"./icon-button-DxiF-tf5.js";import"./state-layer-Bf3rUq66.js";import{L as gt,a as ft}from"./list-CHxmoizQ.js";import{a as Lt,P as At}from"./popover-DHJf1hjV.js";import"./overlay-D0uIIChk.js";import{S as Et}from"./scaffold-D66s8WNO.js";import{T as It}from"./toolbar-DrgqBcwu.js";import"./linear-progress-CqfIuBkR.js";import"./skeleton-D2S3-1Sc.js";import{L as Ot,a as Ct}from"./list-dropdown-aware-core-Cutda2HB.js";import{a as yt}from"./list-dropdown-DS_wqevJ.js";function Tt(s){class t extends s{constructor(...i){super(...i)}initializeFieldInstance(i){this._fieldElement=i,this._fieldElement.shadowRoot||window.customElements.upgrade(this._fieldElement)}attributeChangedCallback(i,n,o){var a;switch(i){case c.observedAttributes.LABEL_POSITION:this.labelPosition=o;return;case c.observedAttributes.LABEL_ALIGNMENT:this.labelAlignment=o;return;case c.observedAttributes.INVALID:this.invalid=b(o);return;case c.observedAttributes.REQUIRED:this.required=b(o);return;case c.observedAttributes.OPTIONAL:this.optional=b(o);return;case c.observedAttributes.DISABLED:this.disabled=b(o);return;case c.observedAttributes.FLOAT_LABEL:this.floatLabel=b(o);return;case c.observedAttributes.VARIANT:this.variant=o;return;case c.observedAttributes.THEME:this.theme=o;return;case c.observedAttributes.SHAPE:this.shape=o;return;case c.observedAttributes.DENSITY:this.density=o;return;case c.observedAttributes.DENSE:this.dense=b(o);return;case c.observedAttributes.POPOVER_ICON:this.popoverIcon=b(o);return;case c.observedAttributes.SUPPORT_TEXT_INSET:this.supportTextInset=o;return}(a=super.attributeChangedCallback)==null||a.call(this,i,n,o)}get labelPosition(){return this._fieldElement.labelPosition}set labelPosition(i){this._fieldElement.labelPosition!==i&&(this._fieldElement.labelPosition=i,this.setAttribute(h.attributes.LABEL_POSITION,i))}get labelAlignment(){return this._fieldElement.labelAlignment}set labelAlignment(i){this._fieldElement.labelAlignment!==i&&(this._fieldElement.labelAlignment=i,this.setAttribute(h.attributes.LABEL_ALIGNMENT,i))}get invalid(){return this._fieldElement.invalid}set invalid(i){this._fieldElement.invalid!==i&&(this._fieldElement.invalid=i,this.toggleAttribute(h.attributes.INVALID,i))}get required(){return this._fieldElement.required}set required(i){this._fieldElement.required!==i&&(this._fieldElement.required=i,this.toggleAttribute(h.attributes.REQUIRED,i))}get optional(){return this._fieldElement.optional}set optional(i){this._fieldElement.optional!==i&&(this._fieldElement.optional=i,this.toggleAttribute(h.attributes.OPTIONAL,i))}get disabled(){return this._fieldElement.disabled}set disabled(i){this._fieldElement.disabled!==i&&(this._fieldElement.disabled=i,this.toggleAttribute(h.attributes.DISABLED,i))}get floatLabel(){return this._fieldElement.floatLabel}set floatLabel(i){this._fieldElement.floatLabel!==i&&(this._fieldElement.floatLabel=i,this.toggleAttribute(h.attributes.FLOAT_LABEL,i))}get variant(){return this._fieldElement.variant}set variant(i){this._fieldElement.variant!==i&&(this._fieldElement.variant=i,this.setAttribute(h.attributes.VARIANT,i))}get theme(){return this._fieldElement.theme}set theme(i){this._fieldElement.theme!==i&&(this._fieldElement.theme=i,this.setAttribute(h.attributes.THEME,i))}get shape(){return this._fieldElement.shape}set shape(i){this._fieldElement.shape!==i&&(this._fieldElement.shape=i,this.setAttribute(h.attributes.SHAPE,i))}get density(){return this._fieldElement.density}set density(i){this._fieldElement.density!==i&&(this._fieldElement.density=i,this.setAttribute(h.attributes.DENSITY,i))}get dense(){return this._fieldElement.dense}set dense(i){this._fieldElement.dense!==i&&(this._fieldElement.dense=i,this.toggleAttribute(h.attributes.DENSE,i))}get popoverIcon(){return this._fieldElement.popoverIcon}set popoverIcon(i){this._fieldElement.popoverIcon!==i&&(this._fieldElement.popoverIcon=i,this.toggleAttribute(h.attributes.POPOVER_ICON,i))}get supportTextInset(){return this._fieldElement.supportTextInset}set supportTextInset(i){this._fieldElement.supportTextInset!==i&&(this._fieldElement.supportTextInset=i,this.setAttribute(h.attributes.SUPPORT_TEXT_INSET,i))}floatLabelWithoutAnimation(i){this._fieldElement.floatLabelWithoutAnimation(i)}}return t}class Dt extends ${constructor(t){super(t)}}const j=`${w}option`,St={DISABLED:"disabled",DIVIDER:"divider",LABEL:"label",SECONDARY_LABEL:"secondary-label",LEADING_ICON_CLASS:"leading-icon-class",LEADING_ICON_TYPE:"leading-icon-type",LEADING_ICON:"leading-icon",OPTION_CLASS:"option-class",TRAILING_ICON_CLASS:"trailing-icon-class",TRAILING_ICON_TYPE:"trailing-icon-type",TRAILING_ICON:"trailing-icon",VALUE:"value"},vt={VALUE_CHANGE:`${j}-value-change`},r={elementName:j,attributes:St,events:vt};class Nt{constructor(t){this._adapter=t,this._disabled=!1,this._divider=!1,this._optionClass=[]}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._adapter.emitHostEvent(r.events.VALUE_CHANGE,this._value))}get label(){return this._label}set label(t){this._label!==t&&(this._label=t,this._adapter.toggleHostAttribute(r.attributes.LABEL,!!this._label,this._label))}get secondaryLabel(){return this._secondaryLabel}set secondaryLabel(t){this._secondaryLabel!==t&&(this._secondaryLabel=t,this._adapter.toggleHostAttribute(r.attributes.SECONDARY_LABEL,!!this._secondaryLabel,this._secondaryLabel))}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.toggleHostAttribute(r.attributes.DISABLED,this._disabled))}get divider(){return this._divider}set divider(t){this._divider!==t&&(this._divider=t,this._adapter.toggleHostAttribute(r.attributes.DIVIDER,this._divider))}get optionClass(){return this._optionClass}set optionClass(t){t?typeof t=="string"&&(t=t.split(" ")):t=[],t=t.filter(e=>e&&!/\s+/.test(e)),this._optionClass.toString()!==t.toString()&&(this._optionClass=t,this._adapter.toggleHostAttribute(r.attributes.OPTION_CLASS,this._optionClass&&!!this._optionClass.length,this._optionClass.join(" ")))}get leadingIcon(){return this._leadingIcon}set leadingIcon(t){this._leadingIcon!==t&&(this._leadingIcon=t,this._adapter.toggleHostAttribute(r.attributes.LEADING_ICON,!!this._leadingIcon,this._leadingIcon))}get leadingIconClass(){return this._leadingIconClass}set leadingIconClass(t){this._leadingIconClass!==t&&(this._leadingIconClass=t,this._adapter.toggleHostAttribute(r.attributes.LEADING_ICON_CLASS,!!this._leadingIconClass,this._leadingIconClass))}get leadingIconType(){return this._leadingIconType}set leadingIconType(t){this._leadingIconType!==t&&(this._leadingIconType=t,this._adapter.toggleHostAttribute(r.attributes.LEADING_ICON_TYPE,!!this._leadingIconType,this._leadingIconType))}get leadingIconComponentProps(){return this._leadingIconComponentProps}set leadingIconComponentProps(t){this._leadingIconComponentProps!==t&&(this._leadingIconComponentProps=t)}get trailingIcon(){return this._trailingIcon}set trailingIcon(t){this._trailingIcon!==t&&(this._trailingIcon=t,this._adapter.toggleHostAttribute(r.attributes.TRAILING_ICON,!!this._trailingIcon,this._trailingIcon))}get trailingIconClass(){return this._trailingIconClass}set trailingIconClass(t){this._trailingIconClass!==t&&(this._trailingIconClass=t,this._adapter.toggleHostAttribute(r.attributes.TRAILING_ICON_CLASS,!!this._trailingIconClass,this._trailingIconClass))}get trailingIconType(){return this._trailingIconType}set trailingIconType(t){this._trailingIconType!==t&&(this._trailingIconType=t,this._adapter.toggleHostAttribute(r.attributes.TRAILING_ICON_TYPE,!!this._trailingIconType,this._trailingIconType))}get trailingIconComponentProps(){return this._trailingIconComponentProps}set trailingIconComponentProps(t){this._trailingIconComponentProps!==t&&(this._trailingIconComponentProps=t)}get leadingBuilder(){return this._leadingBuilder}set leadingBuilder(t){this._leadingBuilder!==t&&(this._leadingBuilder=t)}get trailingBuilder(){return this._trailingBuilder}set trailingBuilder(t){this._trailingBuilder!==t&&(this._trailingBuilder=t)}}var Pt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,_=(s,t,e,i)=>{for(var n=i>1?void 0:i?xt(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(n=(i?a(t,e,n):a(n))||n);return i&&n&&Pt(t,e,n),n};let p=class extends W{static get observedAttributes(){return[r.attributes.VALUE,r.attributes.LABEL,r.attributes.SECONDARY_LABEL,r.attributes.DISABLED,r.attributes.DIVIDER,r.attributes.OPTION_CLASS,r.attributes.LEADING_ICON,r.attributes.LEADING_ICON_CLASS,r.attributes.LEADING_ICON_TYPE,r.attributes.TRAILING_ICON,r.attributes.TRAILING_ICON_CLASS,r.attributes.TRAILING_ICON_TYPE]}constructor(){super(),this._core=new Nt(new Dt(this))}attributeChangedCallback(s,t,e){switch(s){case r.attributes.VALUE:this.value=e;break;case r.attributes.LABEL:this.label=e;break;case r.attributes.SECONDARY_LABEL:this.secondaryLabel=e;break;case r.attributes.DISABLED:this.disabled=b(e);break;case r.attributes.DIVIDER:this.divider=this.hasAttribute(r.attributes.DIVIDER);break;case r.attributes.OPTION_CLASS:this.optionClass=e;break;case r.attributes.LEADING_ICON:this.leadingIcon=e;break;case r.attributes.LEADING_ICON_CLASS:this.leadingIconClass=e;break;case r.attributes.LEADING_ICON_TYPE:this.leadingIconType=e;break;case r.attributes.TRAILING_ICON:this.trailingIcon=e;break;case r.attributes.TRAILING_ICON_CLASS:this.trailingIconClass=e;break;case r.attributes.TRAILING_ICON_TYPE:this.trailingIconType=e;break}}};_([l()],p.prototype,"value",2);_([l()],p.prototype,"label",2);_([l()],p.prototype,"secondaryLabel",2);_([l()],p.prototype,"disabled",2);_([l()],p.prototype,"divider",2);_([l()],p.prototype,"optionClass",2);_([l()],p.prototype,"leadingIcon",2);_([l()],p.prototype,"leadingIconClass",2);_([l()],p.prototype,"leadingIconType",2);_([l()],p.prototype,"leadingIconComponentProps",2);_([l()],p.prototype,"trailingIcon",2);_([l()],p.prototype,"trailingIconClass",2);_([l()],p.prototype,"trailingIconType",2);_([l()],p.prototype,"trailingIconComponentProps",2);_([l()],p.prototype,"leadingBuilder",2);_([l()],p.prototype,"trailingBuilder",2);p=_([B({name:r.elementName})],p);const wt=`${w}option-group`,Bt={LABEL:"label"},A={elementName:wt,attributes:Bt};var Rt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Vt=(s,t,e,i)=>{for(var n=i>1?void 0:i?kt(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(n=(i?a(t,e,n):a(n))||n);return i&&n&&Rt(t,e,n),n};let P=class extends W{static get observedAttributes(){return[A.attributes.LABEL]}constructor(){super()}attributeChangedCallback(s,t,e){switch(s){case A.attributes.LABEL:this.label=e;break}}get label(){return this._label}set label(s){this._label!==s&&(this._label=s||"",this.setAttribute(A.attributes.LABEL,this._label))}get text(){return this._label}set text(s){this.label=s}};P=Vt([B({name:A.elementName})],P);var x=(s=>(s[s.Option=0]="Option",s[s.Group=1]="Group",s))(x||{});function z(s,t){const e=s.some(n=>M(n)),i=s.some(n=>Gt(n));return e&&t===1||i&&t===0}function M(s){return E(s)&&Y(s)&&s.hasOwnProperty("options")}function Gt(s){return E(s)&&Y(s)&&s.hasOwnProperty("label")&&s.hasOwnProperty("value")}class Ft extends ${constructor(t){super(t)}get popupElement(){var t;return(t=this._listDropdown)==null?void 0:t.dropdownElement}getOptions(){const t=Array.from(this._component.querySelectorAll(A.elementName));if(t.length)return t.map(e=>{const i=Array.from(e.querySelectorAll(r.elementName)),n=this._createOptionsFromElements(i);return{text:e.label,builder:e.builder,value:e.value,options:n}});{const e=Array.from(this._component.querySelectorAll(r.elementName));return this._createOptionsFromElements(e)}}_createOptionsFromElements(t){return t.map(e=>{let i=e.hasAttribute(r.attributes.OPTION_CLASS)?e.getAttribute(r.attributes.OPTION_CLASS):e.optionClass;return typeof i=="string"&&(i=i.split(" ")),{label:e.hasAttribute(r.attributes.LABEL)?e.getAttribute(r.attributes.LABEL):E(e.label)?e.label:e.innerText,secondaryLabel:e.hasAttribute(r.attributes.SECONDARY_LABEL)?e.getAttribute(r.attributes.SECONDARY_LABEL):E(e.secondaryLabel)?e.secondaryLabel:void 0,value:e.hasAttribute(r.attributes.VALUE)?e.getAttribute(r.attributes.VALUE):e.value,disabled:e.hasAttribute(r.attributes.DISABLED),divider:e.hasAttribute(r.attributes.DIVIDER),optionClass:i,leadingIcon:e.hasAttribute(r.attributes.LEADING_ICON)?e.getAttribute(r.attributes.LEADING_ICON):e.leadingIcon,leadingIconClass:e.hasAttribute(r.attributes.LEADING_ICON_CLASS)?e.getAttribute(r.attributes.LEADING_ICON_CLASS):e.leadingIconClass,leadingIconType:e.hasAttribute(r.attributes.LEADING_ICON_TYPE)?e.getAttribute(r.attributes.LEADING_ICON_TYPE):e.leadingIconType,leadingIconComponentProps:e.leadingIconComponentProps,trailingIcon:e.hasAttribute(r.attributes.TRAILING_ICON)?e.getAttribute(r.attributes.TRAILING_ICON):e.trailingIcon,trailingIconClass:e.hasAttribute(r.attributes.TRAILING_ICON_CLASS)?e.getAttribute(r.attributes.TRAILING_ICON_CLASS):e.trailingIconClass,trailingIconType:e.hasAttribute(r.attributes.TRAILING_ICON_TYPE)?e.getAttribute(r.attributes.TRAILING_ICON_TYPE):e.trailingIconType,trailingIconComponentProps:e.trailingIconComponentProps,leadingBuilder:e.leadingBuilder,trailingBuilder:e.trailingBuilder}})}open(t){var e;if(this._listDropdown=new yt(this._targetElement,t),this._listDropdown.open(),this._component.id){const i=(e=this._listDropdown.dropdownElement)==null?void 0:e.querySelector("forge-list");i==null||i.setAttribute("aria-labelledby",this._component.id)}}async close(){this._listDropdown&&(await this._listDropdown.close(),this.destroyListDropdown())}destroyListDropdown(){var t;(t=this._listDropdown)==null||t.destroy(),this._listDropdown=void 0}setDismissListener(t){!this._listDropdown||!this._listDropdown.dropdownElement||this._listDropdown.dropdownElement.addEventListener(Lt.events.TOGGLE,t)}toggleOptionMultiple(t,e){var i;(i=this._listDropdown)==null||i.toggleOptionMultiple(t,e)}getActiveOptionIndex(){var t;return((t=this._listDropdown)==null?void 0:t.getActiveOptionIndex())??-1}activateSelectedOption(){var t;(t=this._listDropdown)==null||t.activateSelectedOption()}activateFirstOption(){var t;(t=this._listDropdown)==null||t.activateFirstOption()}highlightActiveOption(t){var e;(e=this._listDropdown)==null||e.activateOption(t)}patchSelectedValues(t){var e;(e=this._listDropdown)==null||e.setSelectedValues(t)}setOptionsListener(t){const e=n=>{n.stopPropagation(),t(this.getOptions())};this._component.addEventListener(r.events.VALUE_CHANGE,e);const i=new MutationObserver(()=>t(this.getOptions()));return i.observe(this._component,{childList:!0,subtree:!0}),()=>{this._component.removeEventListener(r.events.VALUE_CHANGE,e),i.disconnect()}}setOptions(t,e=!0){e&&this._clearOptions();for(const i of t)if(M(i)){const n=this._createOptionGroupElement(i);for(const o of i.options){const a=this._createOptionElement(o);n.appendChild(a)}this._component.appendChild(n)}else{const n=this._createOptionElement(i);this._component.appendChild(n)}}appendDropdownOptions(t){var e;(e=this._listDropdown)==null||e.appendOptions(t)}setDropdownOptions(t){var e;(e=this._listDropdown)==null||e.setOptions(t)}scrollSelectedOptionIntoView(){var t;(t=this._listDropdown)==null||t.scrollSelectedOptionIntoView()}isFocusWithinPopup(t){return!this._listDropdown||!this._listDropdown.dropdownElement?!1:this._listDropdown.dropdownElement.contains(t)}queueDropdownPositionUpdate(){this.popupElement&&window.requestAnimationFrame(()=>{const t=this.popupElement;t==null||t.position()})}_clearOptions(){Array.from(this._component.querySelectorAll(A.elementName)).forEach(i=>q(i)),Array.from(this._component.querySelectorAll(r.elementName)).forEach(i=>q(i))}_createOptionGroupElement(t){const e=document.createElement("forge-option-group");return Object.assign(e,t),e}_createOptionElement(t){const e=document.createElement("forge-option");return Object.assign(e,t),e.textContent=t.label,t.elementAttributes&&t.elementAttributes.forEach((i,n)=>{e.setAttribute(n,i)}),e}}const K={VALUE:"value",MULTIPLE:"multiple",OBSERVE_SCROLL:"observe-scroll",OBSERVE_SCROLL_THRESHOLD:"observe-scroll-threshold",POPUP_CLASSES:"popup-classes",OPTION_LIMIT:"option-limit",SYNC_POPUP_WIDTH:"sync-popup-width",CONSTRAIN_POPUP_WIDTH:"constrain-popup-width",WRAP_OPTION_TEXT:"wrap-option-text"},Ht={...K},qt={CHANGE:"change"},y={observedAttributes:K,attributes:Ht,events:qt};class Ut extends Ot{constructor(t){super(),this._adapter=t,this._options=[],this._value=[],this._multiple=!1,this._open=!1,this._selectedValues=[],this._selectedLabels=[],this._selectedIndexes=[],this._filterString="",this._focusListener=e=>this._onFocus(e),this._blurListener=e=>this._onBlur(e),this._clickListener=e=>this._onClick(e),this._keydownListener=e=>this._onKeydown(e),this._optionsChangedListener=e=>this._onOptionsChanged(e),this._activeChangeListener=e=>this._onActiveOptionChanged(e),this._dropdownScrollEndListener=()=>this._onDropdownScrollEnd(),this._dismissListener=()=>this._onDismiss(),this._identifier=it()}_onFocus(t){}initialize(){this._optionListenerDestructor&&this._optionListenerDestructor(),this._optionListenerDestructor=this._adapter.setOptionsListener(this._optionsChangedListener),this._initializeValue()}initializeTarget(){this._adapter.initializeAccessibility(),this._adapter.addClickListener(this._clickListener),this._adapter.addTargetListener("blur",this._blurListener),this._adapter.addTargetListener("focus",this._focusListener),this._adapter.addTargetListener("keydown",this._keydownListener)}destroy(){this._adapter.removeClickListener(this._clickListener),this._adapter.removeTargetListener("blur",this._blurListener),this._adapter.removeTargetListener("focus",this._focusListener),this._adapter.removeTargetListener("keydown",this._keydownListener),this._optionListenerDestructor&&this._optionListenerDestructor(),this._open=!1,this._adapter.destroyListDropdown()}appendOptions(t){this._adapter.setOptions(t,!1),this._open&&this._adapter.appendDropdownOptions(t)}selectAll(){this._multiple&&(this.value=this._flatOptions.map(t=>t.value))}deselectAll(){this._multiple&&(this.value=[])}get _flatOptions(){return z(this._options,x.Group)?[].concat.apply([],this._options.map(t=>t.options)):this._options}get _nonDividerOptions(){return this._flatOptions.filter(t=>!t.divider)}_initializeValue(){const t=this._options.length&&this._options||this._adapter.getOptions();E(this._value)&&t.length&&this._applyValue(this._value)}_onClick(t){t.button===0&&(this._open?this._closeDropdown():this._openDropdown())}_onBlur(t){this._adapter.isFocusWithinPopup(t.relatedTarget)||this._open&&this._closeDropdown()}_openDropdown(){if(this._options=this._adapter.getOptions(),!this._flatOptions.length)return;this._open=!0;const t={options:this._options,referenceElement:this._adapter.hostElement,multiple:this._multiple,selectedValues:[...this._selectedValues],id:this._identifier,optionBuilder:this._optionBuilder,syncWidth:this._syncPopupWidth,constrainViewportWidth:this._constrainPopupWidth,wrapOptionText:this._wrapOptionText,observeScroll:this._observeScroll,observeScrollThreshold:this._observeScrollThreshold,scrollEndListener:this._dropdownScrollEndListener,activeChangeCallback:this._activeChangeListener,targetWidthCallback:this._targetWidthCallback,popupClasses:this._popupClasses,optionLimit:this._optionLimit,headerBuilder:this._popupHeaderBuilder,footerBuilder:this._popupFooterBuilder,closeCallback:()=>this._closeDropdown(),selectCallback:e=>{const i=this._flatOptions,n=i.find(o=>o.value===e);if(n){const o=i.indexOf(n);this._onSelect(n,o,!0)}}};this._adapter.open(t),this._adapter.setDismissListener(this._dismissListener)}_closeDropdown(){this._open=!1,this._adapter.close()}async _onSelect(t,e,i=!0){return new Promise(async n=>{if(this._valueChanging)return Promise.resolve(!1);const o=t?t.value:"",a=t?t.label:"",O=[...this._value],D=[...this._selectedValues],S=[...this._selectedLabels],R=[...this._selectedIndexes];if(this._multiple)if(this._selectedValues.includes(o)){const f=this._selectedValues.indexOf(o);this._selectedValues.splice(f,1),this._selectedLabels.splice(f,1),this._selectedIndexes.splice(f,1)}else this._selectedValues.push(o),this._selectedLabels.push(a),this._selectedIndexes.push(e);else E(o)?(this._selectedValues[0]=o,this._selectedLabels[0]=a,this._selectedIndexes[0]=e):(this._selectedValues=[],this._selectedLabels=[],this._selectedIndexes=[]);this._value=[...this._selectedValues];const d=()=>{this._selectedValues=[...D],this._selectedLabels=[...S],this._selectedIndexes=[...R],this._value=[...O]},L=()=>{if(this._multiple){const f=this._selectedIndexes.includes(e);this._adapter.toggleOptionMultiple(e,f)}this._applySelection()},k=this.multiple?[...this._selectedValues]:this._selectedValues[0];if(this._open&&i&&!this._multiple&&this._closeDropdown(),typeof this._beforeValueChange=="function"){this._valueChanging=Promise.resolve(this._beforeValueChange.call(null,k));const f=await this._valueChanging;if(this._valueChanging=void 0,!f)return d(),this._tryUpdateDropdownPosition(),n(!1)}const V=!this._adapter.emitHostEvent(y.events.CHANGE,k,!0,!0);V?d():L(),this._tryUpdateDropdownPosition(),n(!V)})}_selectActiveOption(){const t=this._adapter.getActiveOptionIndex();t>=0&&this._nonDividerOptions[t]&&this._onSelect(this._nonDividerOptions[t],t)}_tryUpdateDropdownPosition(){this._open&&this._adapter.queueDropdownPositionUpdate()}_reset(){this._selectedValues=[],this._selectedLabels=[],this._selectedIndexes=[]}_applyValue(t){this._selectedValues=[],this._selectedLabels=[],this._options=this._adapter.getOptions(),Array.isArray(t)||(t=[t]),this._value=[];for(const e of t){this._value.includes(e)||this._value.push(e);const i=this._flatOptions.find(n=>st(n.value,e));i&&(this._selectedValues.push(i.value),this._selectedLabels.push(i.label))}this._selectedIndexes=this._selectedValues.map(e=>this._flatOptions.findIndex(i=>i.value===e)),this._adapter.patchSelectedValues(this._selectedValues)}_onDismiss(){this._closeDropdown()}_getSelectedText(){if(typeof this._selectedTextBuilder=="function"){const t=this._flatOptions.filter(e=>this._selectedValues.includes(e.value));return this._selectedTextBuilder(t)}return this._multiple?this._selectedLabels.length?this._selectedLabels.length===1?this._selectedLabels[0]:`${this._selectedLabels.length} options selected`:"":this._selectedLabels.filter(t=>t&&t.length).join(" ").trim()}_onKeydown(t){const e=t.key==="Escape"||t.keyCode===27,i=t.key==="Enter"||t.keyCode===13,n=t.key==="Space"||t.keyCode===32,o=t.key==="ArrowDown"||t.keyCode===40,a=t.key==="ArrowUp"||t.keyCode===38,O=t.keyCode>=48&&t.keyCode<=90,D=t.key==="Home"||t.keyCode===36,S=t.key==="End"||t.keyCode===35;if(t.key==="Tab"&&this._open&&!this._multiple){this._selectActiveOption();return}if(!O&&this._filterTimeout&&(window.clearTimeout(this._filterTimeout),this._filterString="",this._filterTimeout=void 0),e&&(t.preventDefault(),t.stopPropagation(),this._open)){this._closeDropdown();return}if(n)t.preventDefault(),t.stopPropagation(),this._open?this._closeDropdown():this._openDropdown();else if(i)this._open&&(t.stopPropagation(),t.preventDefault(),this._options=this._adapter.getOptions(),this._selectActiveOption());else if(a||o){if(t.preventDefault(),!this._open){this._openDropdown(),this._adapter.activateFirstOption();return}if(this._flatOptions.length===0)return;let d=0;this._open?(d=this._adapter.getActiveOptionIndex(),d===-1&&(d=this._getFirstSelectedOptionIndex())):d=this._getFirstSelectedOptionIndex(),a?d=this._getPreviousHighlightableOptionIndex(d,this._nonDividerOptions):d=this._getNextHighlightableOptionIndex(d,this._nonDividerOptions),this._adapter.highlightActiveOption(d)}else if(D)this._open&&(t.preventDefault(),this._adapter.highlightActiveOption(this._nonDividerOptions.findIndex(d=>!d.disabled)));else if(S){if(this._open){t.preventDefault();const d=this._nonDividerOptions;for(let L=d.length-1;L>=0;L--)if(!d[L].disabled){this._adapter.highlightActiveOption(L);break}}}else O&&this._filter(t.key)}_getFirstSelectedOptionIndex(){return this._nonDividerOptions.findIndex(t=>this._selectedValues.includes(t.value))}_getPreviousHighlightableOptionIndex(t,e){let i=t;return i<=0?i=e.length-1:i--,e[i].disabled?this._getPreviousHighlightableOptionIndex(i,e):i}_getNextHighlightableOptionIndex(t,e){let i=t;return i===e.length-1?i=0:i++,e[i].disabled?this._getNextHighlightableOptionIndex(i,e):i}_filter(t){this._filterTimeout&&(window.clearTimeout(this._filterTimeout),this._filterTimeout=void 0),this._filterString+=t,this._filterTimeout=window.setTimeout(()=>{this._filterString="",this._filterTimeout=void 0},300),this._options=this._adapter.getOptions();const e=this._flatOptions.find(({disabled:i,label:n})=>!i&&n.trim().toLowerCase().startsWith(this._filterString.trim().toLowerCase()));if(e){const i=this._flatOptions.indexOf(e);this._open?this._adapter.highlightActiveOption(i):this._multiple||this._onSelect(e,i,!1)}}_onOptionsChanged(t){this._options=t,this._applyValue(this._value)}_onActiveOptionChanged(t){this._adapter.updateActiveDescendant(t)}get value(){return this._multiple?[...this._value]:this._value[0]}set value(t){let e;Array.isArray(t)?e=[...t]:e=t,this._applyValue(e)}get selectedIndex(){return this._multiple?[...this._selectedIndexes]:this._selectedIndexes[0]}set selectedIndex(t){this._options=this._adapter.getOptions();let e;if(Array.isArray(t)?e=[...t]:e=[t],e.sort(),this.multiple)this.value=e.map(i=>this._flatOptions[i]).filter(i=>i).map(i=>i.value);else{const i=this._flatOptions[e[e.length-1]];if(!i)return;this.value=i.value}}get options(){return this._adapter.getOptions()}set options(t){let e;z(t,x.Group)?e=t.map(i=>({...i})):e=t.map(i=>({...i})),this._options=e,this._adapter.setOptions(e),this._initializeValue(),this._open&&this._adapter.setDropdownOptions(e)}get multiple(){return this._multiple}set multiple(t){this._multiple!==t&&(this._multiple=t,this._reset(),this._open&&this._closeDropdown())}get open(){return this._open}set open(t){this._open!==t&&(t?this._openDropdown():this._closeDropdown())}get optionBuilder(){return this._optionBuilder}set optionBuilder(t){this._optionBuilder=t}get selectedTextBuilder(){return this._selectedTextBuilder}set selectedTextBuilder(t){this._selectedTextBuilder=t}get optionLimit(){return this._optionLimit}set optionLimit(t){this._optionLimit=t}get popupClasses(){return this._popupClasses}set popupClasses(t){this._popupClasses=t}get popupHeaderBuilder(){return this._popupHeaderBuilder}set popupHeaderBuilder(t){this._popupHeaderBuilder=t}get popupFooterBuilder(){return this._popupFooterBuilder}set popupFooterBuilder(t){this._popupFooterBuilder=t}get popupElement(){return this._adapter.popupElement}get beforeValueChange(){return this._beforeValueChange}set beforeValueChange(t){this._beforeValueChange=t}}var zt=Object.defineProperty,g=(s,t,e,i)=>{for(var n=void 0,o=s.length-1,a;o>=0;o--)(a=s[o])&&(n=a(t,e,n)||n);return n&&zt(t,e,n),n};class m extends Ct{constructor(){super()}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case y.attributes.MULTIPLE:this.multiple=b(i);break;case y.attributes.VALUE:this.value=i;break}}appendOptions(t){this._core.appendOptions(t)}selectAll(){this._core.selectAll()}deselectAll(){this._core.deselectAll()}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}}g([l()],m.prototype,"value");g([l()],m.prototype,"selectedIndex");g([l()],m.prototype,"options");g([l()],m.prototype,"multiple");g([l()],m.prototype,"open");g([l()],m.prototype,"optionBuilder");g([l()],m.prototype,"selectedTextBuilder");g([l()],m.prototype,"beforeValueChange");g([l({set:!1})],m.prototype,"popupElement");const X=`${w}select`,Wt={FIELD:"#field",SELECTED_TEXT:"#selected-text",LABEL:"#select-label"},J={OPEN:"open",TYPE:"type",VALUE:"value",LABEL:"label",MULTIPLE:"multiple",DISABLED:"disabled",PLACEHOLDER:"placeholder",OBSERVE_SCROLL:"observe-scroll",OBSERVE_SCROLL_THRESHOLD:"observe-scroll-threshold"},$t={...J},Yt={SCROLLED_BOTTOM:`${X}-scrolled-bottom`},u={elementName:X,observedAttributes:J,attributes:$t,selectors:Wt,events:Yt};class jt extends Ft{constructor(t){super(t),this._fieldElement=C(t,u.selectors.FIELD),this._labelElement=C(t,u.selectors.LABEL),this._selectedTextElement=C(t,u.selectors.SELECTED_TEXT),this._fieldElement.setAttribute("exportparts",Object.values(h.parts).join(", ")),this._fieldElement.focusIndicatorTargetElement=this._component}get fieldElement(){return this._fieldElement}initializeAccessibility(){this._component.setAttribute("role","combobox"),this._component.setAttribute("aria-haspopup","true"),this._component.setAttribute("aria-expanded","false"),ct(),U(this._component),this.fieldElement.required&&this.setHostAttribute("aria-required","true"),this.fieldElement.disabled&&this.setHostAttribute("aria-disabled","true"),this.fieldElement.invalid&&this.setHostAttribute("aria-invalid","true"),this._component[G]=!this._component.disabled}setLabel(t){const i=!(this._fieldElement.labelPosition==="inset"&&(this._fieldElement.density==="extra-small"||this._fieldElement.dense))&&!!(t!=null&&t.trim());(!this._component.hasAttribute("aria-label")||this._component.getAttribute("aria-label")===this._labelElement.textContent)&&this._component.setAttribute("aria-label",t),i?(this._labelElement.isConnected||this._fieldElement.insertAdjacentElement("afterbegin",this._labelElement),this._labelElement.textContent=t):this._labelElement.remove()}setPlaceholderText(t){v(this._selectedTextElement,!!(t!=null&&t.trim()),"placeholder",t)}open(t){this._targetElement||(this._targetElement=C(this._fieldElement,h.selectors.POPOVER_TARGET)),super.open(t),this._component.setAttribute("aria-controls",`list-dropdown-popup-${t.id}`),this._component.setAttribute("aria-expanded","true"),this._fieldElement.popoverExpanded=!0}close(){return this._component.setAttribute("aria-expanded","false"),this._component.removeAttribute("aria-activedescendant"),U(this._component),this._fieldElement.popoverExpanded=!1,super.close()}floatLabel(t){this._fieldElement.floatLabel=t}updateActiveDescendant(t){v(this._component,!!t,"aria-activedescendant",t)}setSelectedText(t){this._selectedTextElement.textContent=t}setDisabled(t){this._component[G]=!t,v(this._component,t,"aria-disabled","true")}setRequired(){this._component[N]()}addClickListener(t){this._component.addEventListener("click",t)}removeClickListener(t){this._component.removeEventListener("click",t)}addTargetListener(t,e){this._component.addEventListener(t,e)}removeTargetListener(t,e){this._component.removeEventListener(t,e)}syncValue(t){const i=(Array.isArray(t)?!t.length||!t.some(o=>o!=null):t==null)?null:new FormData,n=JSON.stringify(t);i&&t&&i.append(this._component.name,n),this._component.setFormValue(i,n),this._component[N]()}}class Mt extends Ut{constructor(t){super(t),this._label="",this._required=!1,this._permanentlyFloatLabel=!1,this._mousedownListener=this._onMouseDown.bind(this)}initialize(){this._adapter.tryApplyGlobalConfiguration(["labelPosition","variant"]),super.initialize(),super.initializeTarget(),this._initializeLabel(),this._initializeAccessibility(),this._adapter.addTargetListener("mousedown",this._mousedownListener)}destroy(){super.destroy(),this._adapter.removeTargetListener("mousedown",this._mousedownListener)}syncFloatingLabelState({force:t}={}){t!==void 0&&(this._permanentlyFloatLabel=t),this._updateLabel(),this._tryFloatLabel()}setDisabled(t){this._adapter.setDisabled(t)}_initializeLabel(){this._updateLabel(),this._tryFloatLabel()}_initializeValue(){super._initializeValue(),this._tryFloatLabel()}_initializeAccessibility(){this._adapter.initializeAccessibility()}_onMouseDown(t){t.preventDefault()}_onClick(t){this._adapter.fieldElement.disabled||t.composedPath().find(i=>{var n;return(n=i.matches)==null?void 0:n.call(i,"slot[name=accessory]")})||(this._adapter.focusHost(),super._onClick(t))}_openDropdown(){super._openDropdown(),this._open&&this._adapter.toggleHostAttribute(u.attributes.OPEN,!0)}_closeDropdown(){super._closeDropdown(),this._open||this._adapter.toggleHostAttribute(u.attributes.OPEN,!1)}_onDismiss(){super._onDismiss()}_onDropdownScrollEnd(){this._adapter.emitHostEvent(u.events.SCROLLED_BOTTOM)}async _onSelect(t,e,i=!0){const n=await super._onSelect(t,e,i);return n&&(this._adapter.setSelectedText(this._getSelectedText()),i&&!this._multiple&&this._adapter.focusHost()),this._tryFloatLabel(),this._adapter.syncValue(this._value),n}_reset(){super._reset(),this._adapter.setSelectedText(""),this._tryFloatLabel()}_tryFloatLabel(){if(this._permanentlyFloatLabel){this._adapter.floatLabel(!0);return}const t=!!this._getSelectedText()||!!this._selectedValues.length,e=!!this._placeholder;this._adapter.floatLabel(t||e)}_updateLabel(){this._adapter.setLabel(this._label)}_applyValue(t){super._applyValue(t),this._adapter.syncValue(this._value);const e=this._getSelectedText();this._adapter.setSelectedText(e),this._tryFloatLabel()}get label(){return this._label}set label(t){this._label!==t&&(this._label=t,this._updateLabel(),this._label&&this._initializeLabel(),this._adapter.toggleHostAttribute(u.attributes.LABEL,!!this._label,this._label))}get placeholder(){return this._placeholder}set placeholder(t){this._placeholder!==t&&(this._placeholder=t,this._adapter.setPlaceholderText(this._placeholder),this._initializeLabel())}get multiple(){return super.multiple}set multiple(t){this._multiple!==t&&(super.multiple=t,this._adapter.toggleHostAttribute(u.attributes.MULTIPLE,t))}set required(t){this._required!==t&&this._adapter.setRequired()}}const Kt=`<template>
  <forge-field id="field" popover-icon focus-indicator-allow-focus focus-indicator-focus-mode="focus">
    <label id="select-label" aria-hidden="true" part="label" slot="label"></label>
    <slot slot="start" name="start"></slot>
    <div data-forge-field-input class="selected-text-container" part="text-container" aria-live="assertive" aria-atomic="true">
      <slot name="value">
        <span id="selected-text" class="selected-text" part="text"></span>
      </slot>
    </div>
    <slot slot="end" name="end"></slot>
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
`,Xt=":host{display:block;outline:none}:host([hidden]){display:none}forge-field{--_select-placeholder-color: var(--forge-select-placeholder-color, var(--forge-field-placeholder-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6))))}.selected-text-container{display:grid;align-items:center;cursor:pointer}::slotted([slot=value]),.selected-text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.selected-text:empty:before{content:attr(placeholder);color:var(--_select-placeholder-color);font-size:inherit}:host([disabled]) .selected-text-container{cursor:not-allowed}forge-field{display:contents}";var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,T=(s,t,e,i)=>{for(var n=i>1?void 0:i?Qt(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(n=(i?a(t,e,n):a(n))||n);return i&&n&&Jt(t,e,n),n};let I=class extends lt(ht(at(pt(dt(Tt(m)))))){static get observedAttributes(){return[...Object.values(c.observedAttributes),...Object.values(u.observedAttributes),...Object.values(y.observedAttributes)]}constructor(){var t;super(),ut.define([nt,rt]),Q(this,Kt,Xt);const s=(t=this.shadowRoot)==null?void 0:t.querySelector(h.elementName);this.initializeFieldInstance(s),this[Z]="select",this._core=new Mt(new jt(this))}connectedCallback(){super.connectedCallback(),this[F]({role:"combobox",ariaDisabled:this.disabled?"true":"false",ariaRequired:this.required?"true":"false"})}attributeChangedCallback(s,t,e){switch(s){case u.observedAttributes.OPEN:this.open=b(e);return;case u.observedAttributes.LABEL:this.label=e;return;case u.observedAttributes.PLACEHOLDER:this.placeholder=e;return}super.attributeChangedCallback(s,t,e)}[tt](){return this.value}[N](){this[H].setValidity({valueMissing:this.required&&!this.value},this[et]({required:this.required,value:this.value}))}formResetCallback(){this.value=null}formStateRestoreCallback(s){this.value=JSON.parse(s)}labelClickedCallback(){this.click(),this.focus()}labelChangedCallback(s){this[F]({ariaLabel:s})}setFormValue(s,t){this[H].setFormValue(s,t)}get floatLabel(){return super.floatLabel}set floatLabel(s){this._core.syncFloatingLabelState({force:s})}get density(){return super.density}set density(s){super.density=s,this._core.syncFloatingLabelState()}get dense(){return super.dense}set dense(s){super.dense=s,this._core.syncFloatingLabelState()}get disabled(){return super.disabled}set disabled(s){super.disabled=s,this._core.setDisabled(s)}get required(){return super.required}set required(s){super.required=s,this._core.required=s}get labelPosition(){return super.labelPosition}set labelPosition(s){super.labelPosition=s,this._core.syncFloatingLabelState()}};T([l()],I.prototype,"label",2);T([l()],I.prototype,"placeholder",2);T([l()],I.prototype,"readonly",2);I=T([B({name:u.elementName,dependencies:[_t,p,P,At,gt,ft,ot,bt,Et,It,mt]})],I);export{Ut as B,p as O,I as S,Ft as a,m as b,y as c,P as d};
