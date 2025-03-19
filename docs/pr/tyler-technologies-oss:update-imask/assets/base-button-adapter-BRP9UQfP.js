import{c as _,k as L}from"./feature-detection-DRCh51Sa.js";import{c as m,B as T}from"./base-adapter-B6TJxM93.js";import{A as g}from"./index-ByifSpfC.js";import{I as O}from"./icon-CND1_bFA.js";import{s as d,i as A,B as k,l as p}from"./constants-9n5_0r7k.js";import{W as P}from"./with-label-aware-OEbK3wHg.js";import{W as I,a as C}from"./with-default-aria-B0dk5gj8.js";import{t as N}from"./utils-CYJ0zQHl.js";import{a as D}from"./focus-indicator-BjVpbo_K.js";import"./index-CiLSBptl.js";import{a as w}from"./state-layer-DCupnvce.js";const B=["name","value","formaction","formenctype","formmethod","formnovalidate","formtarget"];function J(i,t,o,e=!0){e&&t.some(c=>c.toLowerCase().startsWith("aria-"))&&i.setAttribute("role","presentation");const s=c=>{const l=c.split(":"),v=l.length===2?l[0]:null,S=l.length===2?l[1]:l[0],y=i.getAttribute(c);o.call({},S,y,v)};t.forEach(c=>s(c));const n={attributeFilter:t},a=c=>{c.forEach(l=>s(l.attributeName))},b=new MutationObserver(a);return b.observe(i,n),b}function H(i,t,o){o.forEach(e=>{const s=i.getAttribute(e);s!==null&&t.setAttribute(e,s)})}const E={TYPE:"type",DISABLED:"disabled",POPOVER_ICON:"popover-icon",DENSE:"dense",TABINDEX:"tabindex"},R={...E},x={ROOT:"forge-button",POPOVER_ICON:"forge-button__popover-icon",WITH_ANCHOR:"with-anchor"},F={ROOT:"[part=root]",DEFAULT_SLOT:"slot:not([name])",END_SLOT:"slot[name=end]"},r={observedAttributes:E,attributes:R,selectors:F,classes:x};var W=Object.defineProperty,u=(i,t,o,e)=>{for(var s=void 0,n=i.length-1,a;n>=0;n--)(a=i[n])&&(s=a(t,o,s)||s);return s&&W(t,o,s),s};const f=class f extends I(C(P(k))){constructor(){super(),this.popoverTargetElement=null,this.popoverTargetAction="click",O.define(g)}static get observedAttributes(){return Object.values(r.observedAttributes)}connectedCallback(){super.connectedCallback(),this._core.initialize()}attributeChangedCallback(t,o,e){switch(t){case r.observedAttributes.TYPE:this.type=e;return;case r.observedAttributes.DISABLED:this.disabled=_(e);return;case r.observedAttributes.POPOVER_ICON:this.popoverIcon=_(e);return;case r.observedAttributes.DENSE:this.dense=_(e);return}}labelClickedCallback(){this._core.click({animateStateLayer:!0})}labelChangedCallback(t){this[d]({ariaLabel:t},{setAttribute:!this.hasAttribute("aria-label")})}get form(){return this[A].form}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get value(){return this.getAttribute("value")??""}set value(t){this.setAttribute("value",t)}click(){this._core.click({animateStateLayer:!0})}focus(t){this._core.focus(t)}};f.formAssociated=!0;let h=f;u([m()],h.prototype,"type");u([m()],h.prototype,"disabled");u([m()],h.prototype,"popoverIcon");u([m()],h.prototype,"dense");class Q{constructor(t){this._adapter=t,this._type="button",this._disabled=!1,this._popoverIcon=!1,this._dense=!1,this._clickListener=this._onClick.bind(this),this._keydownListener=this._onKeydown.bind(this),this._slotChangeListener=()=>this._detectSlottedAnchor()}initialize(){this._detectSlottedAnchor(),this._adapter.addDefaultSlotChangeListener(this._slotChangeListener)}click({animateStateLayer:t=!1}={}){this._disabled||(this._adapter.clickHost(),t&&this._adapter.animateStateLayer())}focus(t){this._adapter.focusHost(t),(t==null?void 0:t.focusVisible)!==!1&&this._adapter.forceFocusVisible()}async _onClick(t){const o=this._type==="submit"||this._type==="reset";!o&&this._adapter.hasPopoverTarget()&&this._adapter.managePopover()||(await new Promise(e=>setTimeout(e)),!(t.defaultPrevented||this._disabled)&&o&&this._adapter.clickFormButton(this._type))}async _onKeydown(t){if(t.key===" "){t.preventDefault(),this.click();return}await N(),!(t.defaultPrevented||this._disabled)&&t.key==="Enter"&&this.click()}_detectSlottedAnchor(){this._adapter.hasSlottedAnchor?(this.disabled=!1,this._adapter.removeHostListener("click",this._clickListener),this._adapter.removeHostListener("keydown",this._keydownListener)):(this._adapter.addHostListener("click",this._clickListener),this._adapter.addHostListener("keydown",this._keydownListener)),this._adapter.initialize()}get type(){return this._type}set type(t){this._type!==t&&(this._type=t,this._adapter.setHostAttribute(r.attributes.TYPE,t))}get disabled(){return this._disabled}set disabled(t){t=!!t,this._disabled!==t&&(this._adapter.hasSlottedAnchor&&(t=!1),this._disabled=t,this._adapter.setDisabled(this._disabled),this._adapter.toggleHostAttribute(r.attributes.DISABLED,t))}get popoverIcon(){return this._popoverIcon}set popoverIcon(t){t=!!t,this._popoverIcon!==t&&(this._popoverIcon=t,this._adapter.toggleDefaultPopoverIcon(this._popoverIcon),this._adapter.toggleHostAttribute(r.attributes.POPOVER_ICON,t))}get dense(){return this._dense}set dense(t){t=!!t,this._dense!==t&&(this._dense=t,this._adapter.toggleHostAttribute(r.attributes.DENSE,t))}}class Z extends T{constructor(t){super(t),this._rootElement=p(this._component,r.selectors.ROOT),this._focusIndicatorElement=p(this._component,D.elementName),this._stateLayerElement=p(this._component,w.elementName),this._defaultSlotElement=p(this._component,r.selectors.DEFAULT_SLOT),this._endSlotElement=p(this._component,r.selectors.END_SLOT)}get hasSlottedAnchor(){return!!this.getSlottedAnchor}get getSlottedAnchor(){return this._defaultSlotElement.assignedElements({flatten:!0}).find(t=>t.tagName==="A")}initialize(){const t=this.getSlottedAnchor;this._component[d]({role:t?null:"button"},{setAttribute:!this._component.hasAttribute("role")||!!t}),this._rootElement.classList.toggle(r.classes.WITH_ANCHOR,!!t),t?this._component.removeAttribute("tabindex"):!this._component.disabled&&!this._component.hasAttribute("tabindex")&&this._component.setAttribute("tabindex","0"),this._focusIndicatorElement.targetElement=t||this._component,this._stateLayerElement.targetElement=t||this._component}setDisabled(t){t?(this._focusIndicatorElement.remove(),this._stateLayerElement.remove()):this._rootElement.append(this._focusIndicatorElement,this._stateLayerElement),this.hasSlottedAnchor?(this._component.removeAttribute("tabindex"),this._component[d]({ariaDisabled:null},{setAttribute:!0})):(t?this._component.removeAttribute("tabindex"):this._component.hasAttribute("tabindex")||this._component.setAttribute("tabindex","0"),this._component[d]({ariaDisabled:t?"true":null}))}clickHost(){HTMLElement.prototype.click.call(this._component)}forceFocusVisible(){this._focusIndicatorElement.active=!0}clickFormButton(t){var o;if(this._component.form)if(t==="submit"){this._component[A].setFormValue(this._component.value);const e=document.createElement("button");e.type=t,H(this._component,e,B),this._component.form.addEventListener("submit",s=>{Object.defineProperty(s,"submitter",{configurable:!0,enumerable:!0,get:()=>this._component})},{capture:!0,once:!0}),this._component.insertAdjacentElement("afterend",e),e.click(),e.remove()}else t==="reset"&&((o=this._component.form)==null||o.reset())}hasPopoverTarget(){return this._component.hasAttribute("popovertarget")||!!this._component.popoverTargetElement}managePopover(){if(this._component.form||!this.hasPopoverTarget()||!L())return!1;const t=this._locatePopoverTargetElement();if(!t)return!1;const o=this._component.getAttribute("popovertargetaction")??this._component.popoverTargetAction??"toggle",e=t.matches(":popover-open");switch(o){case"show":return e||t.showPopover(),!0;case"hide":return e&&t.hidePopover(),!1;case"toggle":default:const s=t.togglePopover();if(s&&t.popover!=="manual"){const n=a=>{a.stopPropagation(),t.matches(":popover-open")&&t.hidePopover()};this._component.addEventListener("click",n,{capture:!0,once:!0}),t.addEventListener("beforetoggle",async()=>{await new Promise(a=>setTimeout(a)),this._component.removeEventListener("click",n,{capture:!0})},{once:!0})}return s}}toggleDefaultPopoverIcon(t){if(t){if(!this._endSlotElement.querySelector("forge-icon")){const e=document.createElement("forge-icon");e.classList.add(r.classes.POPOVER_ICON),e.name=g.name,this._endSlotElement.append(e)}}else{const o=this._endSlotElement.querySelector("forge-icon");o==null||o.remove()}}animateStateLayer(){var t;this._stateLayerElement.disabled||!this._stateLayerElement.isConnected||(t=this._stateLayerElement)==null||t.playAnimation()}addDefaultSlotChangeListener(t){this._defaultSlotElement.addEventListener("slotchange",t)}_locatePopoverTargetElement(){let t=this._component.popoverTargetElement??null;if(!t){const o=this._component.ownerDocument.getRootNode();if(!o)return null;const e=this._component.getAttribute("popovertarget");t=o.querySelector(`#${e}`)}return t}}export{Q as B,Z as a,h as b,r as c,J as f};
