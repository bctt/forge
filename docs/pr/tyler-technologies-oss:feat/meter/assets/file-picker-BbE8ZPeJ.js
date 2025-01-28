import{C as f,l as g,j as _,B as b,k as m}from"./constants-BjnHqKgS.js";import{B as v,c as p}from"./base-adapter-CQdYccXX.js";import{c as h,b as u}from"./feature-detection-ONR9WHvu.js";import{B as y}from"./button-vPgaRyW5.js";import"./focus-indicator-R2otSvsR.js";import"./index-BmocOEUj.js";import"./state-layer-B7GOb8iB.js";const d=`${f}file-picker`,k={ACCEPT:"accept",MAX_SIZE:"max-size",CAPTURE:"capture",MULTIPLE:"multiple",DISABLED:"disabled",COMPACT:"compact",BORDERLESS:"borderless"},L={HIGHLIGHT:"highlight",DISABLED:"disabled",COMPACT:"compact",BORDERLESS:"borderless"},E={CONTAINER:"container",BUTTON:"button",INPUT:"input"},C={CONTAINER:"#container",BUTTON:"#button",INPUT:"#input",BUTTON_SLOT:"#button-slot"},D={FILES_CHANGED:`${d}-change`},r={elementName:d,attributes:k,classes:L,ids:E,selectors:C,events:D};class x extends v{constructor(e){super(e),this._container=g(e,r.selectors.CONTAINER),this._buttonSlot=g(e,r.selectors.BUTTON_SLOT),this._input=g(e,r.selectors.INPUT),this._inputEventListener=()=>{this._input.value="",this._input.click()},this._container.addEventListener("click",this._inputEventListener)}registerButtonSlotListener(e){this._buttonSlot.addEventListener("slotchange",e)}registerInputChangeListener(e){this._input.addEventListener("change",e)}registerDragEnterListener(e){this._container.addEventListener("dragenter",e)}registerDragLeaveListener(e){this._container.addEventListener("dragleave",e)}registerDragOverListener(e){this._container.addEventListener("dragover",e)}registerDropListener(e){this._container.addEventListener("drop",e)}removeDragEnterListener(e){this._container.removeEventListener("dragenter",e)}removeDragLeaveListener(e){this._container.removeEventListener("dragleave",e)}removeDragOverListener(e){this._container.removeEventListener("dragover",e)}removeDropListener(e){this._container.removeEventListener("drop",e)}initializeButton(){const e=this._component.querySelector("forge-button");this._button=e||void 0}setHighlightState(e){this._container.classList.contains(r.classes.HIGHLIGHT)!==e&&this._container.classList.toggle(r.classes.HIGHLIGHT)}setAccept(e){e?this._input.setAttribute("accept",e):this._input.removeAttribute("accept")}setCapture(e){e?this._input.setAttribute("capture",e):this._input.removeAttribute("capture")}setMultiple(e){e?this._input.setAttribute("multiple",""):this._input.removeAttribute("multiple")}setDisabled(e){var t,i;e?(this._container.removeEventListener("click",this._inputEventListener),(t=this._button)==null||t.setAttribute("disabled",""),this._container.setAttribute("disabled","")):(this._container.addEventListener("click",this._inputEventListener),(i=this._button)==null||i.removeAttribute("disabled"),this._container.removeAttribute("disabled"))}setCompact(e){this._container.classList.contains(r.classes.COMPACT)!==e&&this._container.classList.toggle(r.classes.COMPACT)}setBorderless(e){this._container.classList.contains(r.classes.BORDERLESS)!==e&&this._container.classList.toggle(r.classes.BORDERLESS)}}class S{constructor(e){this._adapter=e,this._isInitialized=!1,this._accept=null,this._maxSize=null,this._capture=null,this._multiple=!1,this._disabled=!1,this._compact=!1,this._borderless=!1,this._buttonSlotListener=t=>this._onButtonSlotChanged(t),this._inputChangeListener=t=>this._onInputChange(t),this._dragEnterListener=t=>this._onDragEnter(t),this._dragLeaveListener=t=>this._onDragLeave(t),this._dragOverListener=t=>this._onDragOver(t),this._dropListener=t=>this._onDrop(t),this._adapter.registerButtonSlotListener(this._buttonSlotListener),this._adapter.registerInputChangeListener(this._inputChangeListener),this._compact||this._registerDragListeners()}initialize(){this._adapter.initializeButton(),this._adapter.setDisabled(this._disabled),this._isInitialized=!0}destroy(){this._isInitialized=!1}_onButtonSlotChanged(e){this._adapter.initializeButton()}_onInputChange(e){const t=e.target.files;t&&this._handleFiles(t)}_onDragEnter(e){this._handleDragEvent(e,!0)}_onDragLeave(e){this._handleDragEvent(e,!1)}_onDragOver(e){this._handleDragEvent(e,!0)}_onDrop(e){if(this._handleDragEvent(e,!1),!this._disabled){const t=e.dataTransfer;if(t){const i=t.files;this._handleFiles(i)}}}_registerDragListeners(){this._adapter.registerDragEnterListener(this._dragEnterListener),this._adapter.registerDragLeaveListener(this._dragLeaveListener),this._adapter.registerDragOverListener(this._dragOverListener),this._adapter.registerDropListener(this._dropListener)}_removeDragListeners(){this._adapter.removeDragEnterListener(this._dragEnterListener),this._adapter.removeDragLeaveListener(this._dragLeaveListener),this._adapter.removeDragOverListener(this._dragOverListener),this._adapter.removeDropListener(this._dropListener)}_handleFiles(e){let t={};if(e){const i=this._sortFiles(e);let a=i.legalFiles||null;!this._multiple&&a&&a.length>1&&(a=a.splice(1)),t=i}this._adapter.emitHostEvent(r.events.FILES_CHANGED,t)}_sortFiles(e){let t=[];const i=[];if(!this._accept&&!this.maxSize)return t=Array.from(e),{legalFiles:t,illegalFiles:i};const a=this._accept?this._accept.split(",").map(s=>s.trim().toLowerCase()):[""];for(let s=0;s<e.length;s++)!a.some(c=>e[s].type.toLowerCase().match(c)||e[s].name.toLowerCase().match("\\"+c))||this._maxSize&&e[s].size>this._maxSize?i.push(e[s]):t.push(e[s]);return{legalFiles:t,illegalFiles:i}}_handleDragEvent(e,t){this._disabled||(e.preventDefault(),e.stopPropagation(),this._adapter.setHighlightState(t))}get accept(){return this._accept}set accept(e){this._accept!==e&&(this._accept=e,this._adapter.setAccept(e),this._adapter.toggleHostAttribute(r.attributes.ACCEPT,!!e,String(e)))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize!==e&&(this._maxSize=e,this._adapter.toggleHostAttribute(r.attributes.MAX_SIZE,!!e,String(e)))}get capture(){return this._capture}set capture(e){this._capture!==e&&(this._capture=e,this._adapter.setCapture(e),this._adapter.toggleHostAttribute(r.attributes.CAPTURE,!!e,String(e)))}get multiple(){return this._multiple}set multiple(e){this._multiple!==e&&(this._multiple=e,this._adapter.setMultiple(e),this._adapter.toggleHostAttribute(r.attributes.MULTIPLE,e))}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._isInitialized&&this._adapter.setDisabled(e),this._adapter.toggleHostAttribute(r.attributes.DISABLED,e))}get compact(){return this._compact}set compact(e){this._compact!==e&&(this._compact=e,this._adapter.setCompact(e),e?this._removeDragListeners():this._registerDragListeners(),this._adapter.toggleHostAttribute(r.attributes.COMPACT,e))}get borderless(){return this._borderless}set borderless(e){this._borderless!==e&&(this._borderless=e,this._adapter.setBorderless(e),this._adapter.toggleHostAttribute(r.attributes.BORDERLESS,e))}}const A=`<template>
  <form class="forge-file-picker" id="container" part="form">
    <div class="primary" id="primary" part="primary">
      <slot name="primary"></slot>
    </div>
    <slot id="button-slot"></slot>
    <div class="secondary" id="secondary" part="secondary">
      <slot name="secondary"></slot>
    </div>
    <input type="file" class="input" id="input" part="input" />
  </form>
  <div class="helper-text" part="helper-text-container">
    <slot name="helper-text"></slot>
  </div>
</template>
`,w=':host{--_file-picker-background: var(--forge-file-picker-background, var(--forge-theme-surface-dim, #fafafa));--_file-picker-width: var(--forge-file-picker-width, auto);--_file-picker-height: var(--forge-file-picker-height, auto);--_file-picker-max-width: var(--forge-file-picker-max-width, auto);--_file-picker-border-width: var(--forge-file-picker-border-width, var(--forge-border-thin, 1px));--_file-picker-border-style: var(--forge-file-picker-border-style, dashed);--_file-picker-border-color: var(--forge-file-picker-border-color, var(--forge-theme-outline-low, #9e9e9e));--_file-picker-gap: var(--forge-file-picker-gap, var(--forge-spacing-medium, 16px));--_file-picker-padding: var(--forge-file-picker-padding, var(--forge-spacing-medium, 16px));--_file-picker-padding-block: var(--forge-file-picker-padding-block, 0);--_file-picker-padding-inline: var(--forge-file-picker-padding-inline, var(--_file-picker-padding));--_file-picker-disabled-opacity: var(--forge-file-picker-disabled-opacity, .38);--_file-picker-highlight-background: var(--forge-file-picker-highlight-background, var(--forge-theme-primary-container-minimum, #f7f8fc));--_file-picker-highlight-border-color: var(--forge-file-picker-highlight-border-color, var(--forge-theme-primary, #3f51b5))}:host{display:block;height:100%;width:100%}:host([hidden]){display:none}:host([compact]){display:inline-block}.forge-file-picker{--_file-picker-background: var(--forge-file-picker-background, var(--forge-theme-surface-dim, #fafafa));--_file-picker-width: var(--forge-file-picker-width, auto);--_file-picker-height: var(--forge-file-picker-height, auto);--_file-picker-max-width: var(--forge-file-picker-max-width, auto);--_file-picker-border-width: var(--forge-file-picker-border-width, var(--forge-border-thin, 1px));--_file-picker-border-style: var(--forge-file-picker-border-style, dashed);--_file-picker-border-color: var(--forge-file-picker-border-color, var(--forge-theme-outline-low, #9e9e9e));--_file-picker-gap: var(--forge-file-picker-gap, var(--forge-spacing-medium, 16px));--_file-picker-padding: var(--forge-file-picker-padding, var(--forge-spacing-medium, 16px));--_file-picker-padding-block: var(--forge-file-picker-padding-block, 0);--_file-picker-padding-inline: var(--forge-file-picker-padding-inline, var(--_file-picker-padding));--_file-picker-disabled-opacity: var(--forge-file-picker-disabled-opacity, .38);--_file-picker-highlight-background: var(--forge-file-picker-highlight-background, var(--forge-theme-primary-container-minimum, #f7f8fc));--_file-picker-highlight-border-color: var(--forge-file-picker-highlight-border-color, var(--forge-theme-primary, #3f51b5))}.forge-file-picker{display:grid;justify-content:center;align-content:center;gap:var(--_file-picker-gap);box-sizing:border-box;padding:var(--_file-picker-padding);height:var(--_file-picker-height);width:var(--_file-picker-width);max-width:var(--_file-picker-max-width);text-align:center;background:var(--_file-picker-background);cursor:pointer;border-width:var(--_file-picker-border-width);border-style:var(--_file-picker-border-style);border-color:var(--_file-picker-border-color)}.forge-file-picker[disabled]{opacity:var(--_file-picker-disabled-opacity);cursor:unset}.forge-file-picker:not(.compact).highlight{--_file-picker-border-color: var(--_file-picker-highlight-border-color);--_file-picker-background: var(--_file-picker-highlight-background)}.primary{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:var(--forge-theme-text-high, rgba(0, 0, 0, .87));max-width:var(--_file-picker-max-width)}.secondary{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);color:var(--forge-theme-text-high, rgba(0, 0, 0, .87));max-width:var(--_file-picker-max-width)}.input{display:none}.helper-text ::slotted([slot=helper-text]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);text-align:start}.borderless{--_file-picker-width: var(--forge-file-picker-width, 100%);border:none}.borderless:not(.compact).highlight{border:none}.borderless+.helper-text{display:none}.compact{--_file-picker-height: var(--forge-file-picker-height, fit-content);--_file-picker-width: var(--forge-file-picker-width, fit-content);--_file-picker-background-color: var(--forge-file-picker-background-color, transparent);--_file-picker-padding: var(--forge-file-picker-padding, 0);border:none}.compact .primary,.compact .secondary{display:none}.compact .button{--_file-picker-width: var(--forge-file-picker-width, auto);background-color:transparent}';var T=Object.defineProperty,z=Object.getOwnPropertyDescriptor,n=(l,e,t,i)=>{for(var a=i>1?void 0:i?z(e,t):e,s=l.length-1,c;s>=0;s--)(c=l[s])&&(a=(i?c(e,t,a):c(a))||a);return i&&a&&T(e,t,a),a};let o=class extends b{static get observedAttributes(){return[r.attributes.ACCEPT,r.attributes.MAX_SIZE,r.attributes.CAPTURE,r.attributes.MULTIPLE,r.attributes.DISABLED,r.attributes.COMPACT,r.attributes.BORDERLESS]}constructor(){super(),m(this,A,w),this._core=new S(new x(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(l,e,t){switch(l){case r.attributes.ACCEPT:this.accept=t;break;case r.attributes.MAX_SIZE:this.maxSize=u(t);break;case r.attributes.CAPTURE:this.capture=t;break;case r.attributes.MULTIPLE:this.multiple=h(t);break;case r.attributes.DISABLED:this.disabled=h(t);break;case r.attributes.COMPACT:this.compact=h(t);break;case r.attributes.BORDERLESS:this.borderless=h(t);break}}};n([p()],o.prototype,"accept",2);n([p()],o.prototype,"maxSize",2);n([p()],o.prototype,"capture",2);n([p()],o.prototype,"multiple",2);n([p()],o.prototype,"disabled",2);n([p()],o.prototype,"compact",2);n([p()],o.prototype,"borderless",2);o=n([_({name:r.elementName,dependencies:[y]})],o);
