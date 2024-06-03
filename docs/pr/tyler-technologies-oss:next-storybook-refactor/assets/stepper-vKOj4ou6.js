import{C as g,F as L,Q as S,S as f,T,J as b,a4 as R,D as y,B as I,E as m,a5 as C,l as E}from"./constants-DbwyRGxi.js";import{S as r,a as O}from"./step-DqlSY3ON.js";import{B as N,F as d}from"./base-adapter-CpHyUcoj.js";import"./state-layer-BEljX9QG.js";import{g as v}from"./event-utils-C1SDeUaq.js";const D=`${g}stepper`,A={STEPPER:"forge-stepper",LINEAR:"linear",ALTERNATIVE:"alternative",CLUSTERED:"clustered",FIXED:"fixed",ALIGN_LEFT:"align-left",ALIGN_CENTER:"align-center",ALIGN_RIGHT:"align-right",VERTICAL:"vertical",FOCUSED:"focused"},x={STEPPER:`.${A.STEPPER}`},Y={SELECTED_INDEX:"selected-index",LINEAR:"linear",ALTERNATIVE:"alternative",LAYOUT_MODE:"layout-mode",LAYOUT_ALIGN:"layout-align",DISABLED:"disabled",VERTICAL:"vertical"},n={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",ARROW_DOWN_KEY:"ArrowDown",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_KEY:"Tab"},_={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,HOME_KEYCODE:36,ENTER_KEYCODE:13,SPACE_KEYCODE:32},K=[n.ARROW_LEFT_KEY,n.ARROW_RIGHT_KEY,n.ARROW_DOWN_KEY,n.ARROW_UP_KEY,n.END_KEY,n.HOME_KEY,n.ENTER_KEY,n.SPACE_KEY,n.TAB_KEY],F={[_.ARROW_LEFT_KEYCODE]:n.ARROW_LEFT_KEY,[_.ARROW_RIGHT_KEYCODE]:n.ARROW_RIGHT_KEY,[_.END_KEYCODE]:n.END_KEY,[_.HOME_KEYCODE]:n.HOME_KEY,[_.ENTER_KEYCODE]:n.ENTER_KEY,[_.SPACE_KEYCODE]:n.SPACE_KEY},s={elementName:D,classes:A,selectors:x,attributes:Y,numbers:_,strings:n,ACCEPTABLE_KEYS:K,KEYCODE_MAP:F};class h{static createStepElement(t,e,i){const a=document.createElement(r.elementName);return a.index=e,a.completed=t.completed||!1,a.editable=t.editable||!1,a.selected=i.selectedIndex===e,a.alternative=i.alternative,a.error=t.error||!1,a.disabled=t.disabled||!1,a.vertical=t.vertical??i.vertical??!1,a.ignoreUserExpansion=t.ignoreUserExpansion||!1,a.expanded=t.expanded||!1,i.linear&&e>i.selectedIndex&&(a.tabIndex=-1),a.textContent=t.label,t.optionalLabel&&a.appendChild(this.createStepOptionalLabel(t.optionalLabel)),a}static createStepOptionalLabel(t){const e=document.createElement("span");return e.slot="optional",e.textContent=t||"",e}static setLinearState(t,e){let i=t.classList.contains(s.classes.LINEAR);i&&!e&&(t.classList.remove(s.classes.LINEAR),i=!1),!i&&e&&t.classList.add(s.classes.LINEAR)}static setAlternativeState(t,e){let i=t.classList.contains(s.classes.ALTERNATIVE);i&&!e&&(t.classList.remove(s.classes.ALTERNATIVE),i=!1),!i&&e&&t.classList.add(s.classes.ALTERNATIVE)}static setLayoutMode(t,e){switch(e){case"clustered":t.classList.contains(s.classes.FIXED)&&t.classList.remove(s.classes.FIXED),t.classList.add(s.classes.CLUSTERED);break;case"fixed":t.classList.contains(s.classes.CLUSTERED)&&t.classList.remove(s.classes.CLUSTERED),t.classList.add(s.classes.FIXED);break}}static setLayoutAlign(t,e){switch(t.classList.contains(s.classes.ALIGN_LEFT)&&t.classList.remove(s.classes.ALIGN_LEFT),t.classList.contains(s.classes.ALIGN_CENTER)&&t.classList.remove(s.classes.ALIGN_CENTER),t.classList.contains(s.classes.ALIGN_RIGHT)&&t.classList.remove(s.classes.ALIGN_RIGHT),e){case"left":t.classList.add(s.classes.ALIGN_LEFT);break;case"center":t.classList.add(s.classes.ALIGN_CENTER);break;case"right":t.classList.add(s.classes.ALIGN_RIGHT);break}}static createSteps(t){const e=[];return t.steps.forEach((i,a)=>{const o=h.createStepElement(i,a,t);e.push(o)}),e[0].setAttribute(r.attributes.FIRST,""),e[e.length-1].setAttribute(r.attributes.LAST,""),e}}class P extends N{constructor(t){super(t),this._rootElement=L(t,s.selectors.STEPPER),this._slotElement=this._rootElement.querySelector("slot")}initializeAccessibility(){this._component.hasAttribute("role")||this._component.setAttribute("role","tablist")}patchSafari(){this._applyToSteps(t=>t.setAttribute("safari",""))}addSlotChangeListener(t){this._slotElement.addEventListener("slotchange",t)}removeSlotChangeListener(t){this._slotElement.addEventListener("slotchange",t)}getLastStep(){const t=this._getSteps();return t.item(t.length-1)}setSelected(t){this._getSteps().forEach(e=>{e===t?e.selected=!0:e.selected=!1})}assignIndices(){this._getSteps().forEach((e,i)=>{e.index=i})}assignFirstLastStep(){const t=this._getSteps();t&&t.length>1&&(t[0].setAttribute("first",""),t[t.length-1].setAttribute("last",""))}setLayoutAlign(t){h.setLayoutAlign(this._rootElement,t)}setLayoutMode(t){h.setLayoutMode(this._rootElement,t),this._applyToSteps(e=>e.setAttribute(r.attributes.CLUSTERED,""))}setAlternativeState(t){h.setAlternativeState(this._rootElement,t),this._applyToSteps(e=>e.alternative=t)}setVertical(t){S(this._rootElement,t,s.classes.VERTICAL),this._applyToSteps(e=>e.vertical=t)}setLinearState(t){h.setLinearState(this._rootElement,t)}removeRootListener(t,e){this._rootElement.removeEventListener("click",e)}addRootListener(t,e){this._rootElement.addEventListener(t,e)}setSelectedByIndex(t){this._applyToSteps(e=>{e.selected&&e.index!==t&&(e.selected=!1),e.index===t&&(e.selected=!0)})}applyConfiguredSteps(t){this._component.querySelectorAll(r.elementName).forEach(e=>{this._component.removeChild(e)}),t.forEach(e=>this._component.appendChild(e))}tryGetFocusedStep(){let t;const e=f(this._component.ownerDocument);return this._applyToSteps(i=>{e===L(i,r.selectors.STEP)&&(t=i)}),t}getFocusedOrSelectedStep(){let t=this.tryGetFocusedStep();return t||(t=this._getSteps()[0],t.focus()),t}getStep(t){let e=0;const i=this._getSteps();return t<0?i.item(i.length-1):(i.length>t&&(e=t),i.item(e))}toggleDisabled(t){this._applyToSteps(e=>e.disabled=t)}toggleRootClass(t,e){S(this._rootElement,e,t)}isStepperFocused(){return this._rootElement.classList.contains(s.classes.FOCUSED)}setStepsListener(t,e){this._applyToSteps(i=>i.addEventListener(t,e))}removeStepsListener(t,e){this._applyToSteps(i=>i.removeEventListener(t,e))}_applyToSteps(t){this._getSteps().forEach(t)}_getSteps(){return this._component.querySelectorAll(r.elementName)}}class M{constructor(t){this._adapter=t,this._steps=[],this._selectedIndex=0,this._linear=!1,this._alternative=!1,this._layoutMode="fixed",this._layoutAlign="center",this._initialize=!1,this._clickListener=e=>this._handleClick(e),this._keyListener=e=>this._onKeydown(e),this._stepFocusListener=()=>this._onStepFocus(),this._stepBlurListener=()=>this._onStepBlur(),this._stepExpandedContentFocusInListener=e=>this._onStepExpandedContentFocusIn(e),this._stepExpandedContentFocusOutListener=e=>this._onStepExpandedContentFocusOut(e),this._slotChangeListener=e=>this._onSlotChange(e)}initialize(){this._adapter.initializeAccessibility(),this._adapter.assignIndices(),this._adapter.setLinearState(this._linear),this._adapter.setAlternativeState(this._alternative),this._adapter.setLayoutAlign(this._layoutAlign),this._adapter.setLayoutMode(this._layoutMode),this._adapter.addRootListener("click",this._clickListener),this._adapter.addHostListener("keydown",this._keyListener),this._adapter.assignFirstLastStep(),this._adapter.addRootListener(r.events.EXPANDED_CONTENT_FOCUSIN,this._stepExpandedContentFocusInListener),this._adapter.addRootListener(r.events.EXPANDED_CONTENT_FOCUSOUT,this._stepExpandedContentFocusOutListener),this._applySelectedIndex(),this._patchBrowser(),this._adapter.setStepsListener("blur",this._stepBlurListener),this._adapter.setStepsListener("focus",this._stepFocusListener),this._initialize||this._adapter.addSlotChangeListener(this._slotChangeListener),this._initialize=!0}disconnect(){this._adapter.removeRootListener("click",this._clickListener),this._adapter.removeHostListener("keydown",this._keyListener),this._adapter.removeSlotChangeListener(this._slotChangeListener),this._adapter.removeStepsListener("blur",this._stepBlurListener),this._adapter.removeStepsListener("focus",this._stepFocusListener)}get steps(){return this._steps.map(t=>({...t}))}set steps(t){if(Array.isArray(t)&&t.length>0)this._steps=[...t.map(e=>({...e}))];else{this._steps=[];return}this._renderConfiguration()}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){if(!b(t))t=0;else if(!R(t)){const e=Number(t);t=isNaN(e)?0:e}this._selectedIndex!==t&&(this._selectedIndex=t,this._adapter.setHostAttribute(s.attributes.SELECTED_INDEX,this._selectedIndex.toString()),this._applySelectedIndex())}get linear(){return this._linear}set linear(t){t=!!t,this._linear!==t&&(this._linear=t,this._adapter.setLinearState(this._linear),this._adapter.setHostAttribute(s.attributes.LINEAR,this._linear.toString()))}get alternative(){return this._alternative}set alternative(t){t=!!t,this._alternative!==t&&(this._alternative=t,this._adapter.setAlternativeState(this._alternative),this._adapter.setHostAttribute(s.attributes.ALTERNATIVE,this._alternative.toString()))}get layoutMode(){return this._layoutMode}set layoutMode(t){/^(fixed|clustered)$/.test(t)&&this._layoutMode!==t&&(this._layoutMode=t,this._adapter.setHostAttribute(s.attributes.LAYOUT_MODE,this._layoutMode),this._adapter.setLayoutMode(this._layoutMode))}get layoutAlign(){return this._layoutAlign}set layoutAlign(t){/^(left|center|right)$/.test(t)&&this._layoutAlign!==t&&(this._layoutAlign=t,this._adapter.setLayoutAlign(this._layoutAlign),this._adapter.setHostAttribute(s.attributes.LAYOUT_ALIGN,this._layoutAlign))}get disabled(){return this._disabled}set disabled(t){t!==this._disabled&&(this._disabled=t,this._applyDisabled())}get vertical(){return this._vertical}set vertical(t){t!==this._vertical&&(this._vertical=t,this._applyVertical(),this._adapter.toggleHostAttribute(s.attributes.VERTICAL,this._vertical))}_applyVertical(){this._adapter.setVertical(this._vertical)}_applyDisabled(){this._disabled?this._adapter.setHostAttribute(s.attributes.DISABLED,"disabled"):this._adapter.removeHostAttribute(s.attributes.DISABLED),this._adapter.toggleDisabled(this._disabled)}_applySelectedIndex(){this._adapter.setSelectedByIndex(this._selectedIndex)}_handleClick(t){if(t.preventDefault(),this._linear)return;const e=v(t),i=e.find(o=>o.classList&&o.classList.contains(r.classes.STEP)),a=e.find(o=>o.localName===r.elementName);i&&a&&!a.selected&&!a.disabled&&this._adapter.emitHostEvent(r.events.SELECT,a.index,!0,!0)&&(this._adapter.setSelected(a),this.selectedIndex=a.index)}_renderConfiguration(){const t=h.createSteps({steps:this._steps,vertical:this._vertical,selectedIndex:this._selectedIndex,alternative:this._alternative,layoutAlign:this._layoutAlign,layoutMode:this._layoutMode,linear:this._linear});this.disconnect(),this._adapter.applyConfiguredSteps(t),this.initialize()}_onKeydown(t){if(this._linear)return;const e=this._getKeyFromEvent(t);if(!this._adapter.isStepperFocused()||!e)return;[r.strings.HOME_KEY,r.strings.END_KEY,r.strings.ARROW_DOWN_KEY,s.strings.ARROW_UP_KEY].includes(e)&&t.preventDefault();const i=this._vertical?this._determineVerticalMoveTarget(e):this._determineMoveTarget(e);i&&this._moveFocusTo(i)}_moveFocusTo(t){L(t,r.selectors.STEP).focus()}_getKeyFromEvent(t){return s.ACCEPTABLE_KEYS.includes(t.key)?t.key:s.KEYCODE_MAP[t.keyCode]}_determineMoveTarget(t){const e=this._adapter.getFocusedOrSelectedStep();if(e)switch(t){case s.strings.ARROW_RIGHT_KEY:return this._adapter.getStep(e.index+1);case s.strings.ARROW_LEFT_KEY:return this._adapter.getStep(e.index-1);case s.strings.HOME_KEY:return this._adapter.getStep(0);case s.strings.END_KEY:return this._adapter.getLastStep()}return e}_determineVerticalMoveTarget(t){const e=this._adapter.getFocusedOrSelectedStep();if(e)switch(t){case s.strings.ARROW_DOWN_KEY:return this._adapter.getStep(e.index+1);case s.strings.ARROW_UP_KEY:return this._adapter.getStep(e.index-1);case s.strings.HOME_KEY:return this._adapter.getStep(0);case s.strings.END_KEY:return this._adapter.getLastStep()}return e}_onSlotChange(t){this.disconnect(),this.initialize()}_onStepExpandedContentFocusIn(t){const e=this._adapter.getStep(t.detail.index+1);e&&e.setStepTabIndex(0),t.detail.setStepTabIndex(0)}_onStepExpandedContentFocusOut(t){const e=t.target,i=this._adapter.getStep(e.index+1);i&&i.setStepTabIndex(-1),e.setStepTabIndex(-1)}_onStepFocus(){this._adapter.toggleRootClass(s.classes.FOCUSED,!0)}_onStepBlur(){this._adapter.toggleRootClass(s.classes.FOCUSED,!1)}_patchBrowser(){new T().SAFARI()&&this._adapter.patchSafari()}}const H=`<template>
  <div class="forge-stepper" part="root">
    <slot></slot>
  </div>
</template>`,k=":host{display:block}:host([hidden]){display:none}:host([vertical]) .forge-stepper{display:unset;align-items:unset;white-space:unset;overflow:unset}.forge-stepper{display:flex;align-items:center;white-space:nowrap;overflow:hidden}.forge-stepper:not(.vertical) ::slotted(*){display:flex;align-items:center;position:relative;min-width:112px}.forge-stepper.fixed ::slotted(*){flex:1}.forge-stepper.alternative{align-items:flex-start}.forge-stepper.alternative ::slotted(*){min-width:160px}.forge-stepper.align-left{justify-content:flex-start}.forge-stepper.align-center{justify-content:center}.forge-stepper.align-right{justify-content:flex-end}";var G=Object.defineProperty,U=Object.getOwnPropertyDescriptor,c=(p,t,e,i)=>{for(var a=i>1?void 0:i?U(t,e):t,o=p.length-1,u;o>=0;o--)(u=p[o])&&(a=(i?u(t,e,a):u(a))||a);return i&&a&&G(t,e,a),a};let l=class extends I{static get observedAttributes(){return[s.attributes.SELECTED_INDEX,s.attributes.LINEAR,s.attributes.ALTERNATIVE,s.attributes.LAYOUT_MODE,s.attributes.LAYOUT_ALIGN,s.attributes.DISABLED,s.attributes.VERTICAL]}constructor(){super(),m(this,H,k),this._foundation=new M(new P(this))}async connectedCallback(){await C(this),this._foundation.initialize()}disconnectedCallback(){this._foundation.disconnect()}attributeChangedCallback(p,t,e){switch(p){case s.attributes.SELECTED_INDEX:this.selectedIndex=Number(e)||0;break;case s.attributes.LINEAR:this.linear=E(e);break;case s.attributes.ALTERNATIVE:this.alternative=E(e);break;case s.attributes.LAYOUT_MODE:this.layoutMode=e;break;case s.attributes.LAYOUT_ALIGN:this.layoutAlign=e;break;case s.attributes.DISABLED:this.disabled=E(e);break;case s.attributes.VERTICAL:this.vertical=E(e);break}}};c([d()],l.prototype,"steps",2);c([d()],l.prototype,"selectedIndex",2);c([d()],l.prototype,"linear",2);c([d()],l.prototype,"alternative",2);c([d()],l.prototype,"layoutMode",2);c([d()],l.prototype,"layoutAlign",2);c([d()],l.prototype,"disabled",2);c([d()],l.prototype,"vertical",2);l=c([y({name:s.elementName,dependencies:[O]})],l);
