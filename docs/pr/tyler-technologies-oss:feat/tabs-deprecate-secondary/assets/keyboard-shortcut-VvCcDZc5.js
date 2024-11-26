import{C as g,z as p,o as b,B as m,b as c}from"./constants-CFf81ck9.js";import{B as E,c as l}from"./base-adapter-Dh44vCkH.js";const d=`${g}keyboard-shortcut`,u={KEY:"key",TARGET:"target",GLOBAL:"global",ALLOW_WHILE_TYPING:"allow-while-typing",USE_CODE:"use-code",PREVENT_DEFAULT:"prevent-default",CAPTURE:"capture",DISABLED:"disabled"},y={...u},f={TOOLTIP:"forge-tooltip"},T={ACTIVATE:`${d}-activate`},r={elementName:d,observedAttributes:u,attributes:y,selectors:f,events:T},C=["date","datetime","datetime-local","email","month","number","password","search","tel","text","time","url","week"];class A extends E{constructor(t){super(t),this.component=t}hasTargetElement(){return!!this._targetElement}destroy(){this._targetElement=null}addTargetEventListener(t,s,i){var a;(a=this._targetElement)==null||a.addEventListener(t,s,{capture:i})}removeTargetEventListener(t,s,i){var a;(a=this._targetElement)==null||a.removeEventListener(t,s,{capture:i})}setHostStyles(){this.component.style.display="none"}setTargetElement(t,s){if(s){const i=this._component.ownerDocument||document;this._targetElement=i.documentElement;return}if(t){if(this._component.parentElement){if(p(this._component.parentElement,t)){this._targetElement=this._component.parentElement;return}this._targetElement=this._component.parentElement.querySelector(t);return}}else{let i=this._component.previousElementSibling;for(;i;){if(!p(i,r.selectors.TOOLTIP)){this._targetElement=i;return}i=i.previousElementSibling}this._targetElement=this._component.parentElement;return}}}function k(e){return e instanceof HTMLInputElement?C.includes(e.type):!1}function L(e,t=!1){return!e||!e.length?[]:e.split(" ").map(i=>i.trim()).map(i=>{const a=i.split("+"),h=t?a.pop()||"":w((a.pop()||"").toLowerCase()),_=a.sort().join("").toLowerCase();return{key:h,modifier:_}})}function v(e,t,s=!1){const i=s?e.code:e.key.toLowerCase(),a=D(e);return t.some(h=>i===h.key&&a===h.modifier)}function D(e){let t="";return e.altKey&&(t+="alt"),e.ctrlKey&&(t+="control"),e.metaKey&&(t+="meta"),e.shiftKey&&(t+="shift"),t}function w(e){switch(e){case"plus":return"+";case"space":return" ";default:return e}}class K{constructor(t){this._adapter=t,this._global=!1,this._allowWhileTyping=!1,this._preventDefault=!0,this._capture=!1,this._useCode=!1,this._disabled=!1,this._keyCombinations=[],this._keyDownListener=s=>this._onKeyDown(s)}initialize(){this._initializeTargetElement(),this._adapter.setHostStyles()}destroy(){this._disconnectTargetElement(),this._adapter.destroy()}_initializeTargetElement(){if(this._disconnectTargetElement(),this._adapter.setTargetElement(this._target,this._global),!this._adapter.hasTargetElement())throw new Error("Unable to locate the target element.");this._disabled||this._connectTargetElement()}_connectTargetElement(){this._adapter.hasTargetElement&&this._adapter.addTargetEventListener("keydown",this._keyDownListener,this._capture)}_disconnectTargetElement(){this._adapter.hasTargetElement&&this._adapter.removeTargetEventListener("keydown",this._keyDownListener,this._capture)}_onKeyDown(t){var s;!this._allowWhileTyping&&k(t.target)||v(t,this._keyCombinations,this._useCode)&&(this._preventDefault&&t.preventDefault(),this._adapter.emitHostEvent(r.events.ACTIVATE,t),(s=this._activateCallback)==null||s.call(null,t))}_setKeyCombinations(){this._keyCombinations=L(this._key,this._useCode)}get key(){return this._key}set key(t){this._key!==t&&(this._key=t,this._adapter.toggleHostAttribute(r.attributes.KEY,!!this.key,this._key||""),this._setKeyCombinations())}get target(){return this._target}set target(t){this._target!==t&&(this._target=t,this._adapter.setHostAttribute(r.attributes.TARGET,this._target),this._adapter.isConnected&&this._initializeTargetElement())}get global(){return this._global}set global(t){this._global!==t&&(this._global=t,this._adapter.toggleHostAttribute(r.attributes.GLOBAL,this._global),this._adapter.isConnected&&this._initializeTargetElement())}get allowWhileTyping(){return this._allowWhileTyping}set allowWhileTyping(t){this._allowWhileTyping!==t&&(this._allowWhileTyping=t,this._adapter.toggleHostAttribute(r.attributes.ALLOW_WHILE_TYPING,this._allowWhileTyping))}get preventDefault(){return this._preventDefault}set preventDefault(t){this._preventDefault!==t&&(this._preventDefault=t,this._adapter.toggleHostAttribute(r.attributes.PREVENT_DEFAULT,this._preventDefault))}get capture(){return this._capture}set capture(t){this._capture!==t&&(this._disconnectTargetElement(),this._capture=t,this._adapter.toggleHostAttribute(r.attributes.CAPTURE,this.capture),this._connectTargetElement())}get useCode(){return this._useCode}set useCode(t){this._useCode!==t&&(this._useCode=t,this._adapter.toggleHostAttribute(r.attributes.USE_CODE,this._useCode),this._setKeyCombinations())}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.toggleHostAttribute(r.attributes.DISABLED,this._disabled),this._disabled?this._disconnectTargetElement():this._connectTargetElement())}get activateCallback(){return this._activateCallback}set activateCallback(t){this._activateCallback=t}}var O=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(e,t,s,i)=>{for(var a=i>1?void 0:i?S(t,s):t,h=e.length-1,_;h>=0;h--)(_=e[h])&&(a=(i?_(t,s,a):_(a))||a);return i&&a&&O(t,s,a),a};let n=class extends m{static get observedAttributes(){return Object.values(r.observedAttributes)}constructor(){super(),this._core=new K(new A(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(e,t,s){switch(e){case r.observedAttributes.KEY:this.key=s;break;case r.observedAttributes.TARGET:this.target=s;break;case r.observedAttributes.GLOBAL:this.global=c(s);break;case r.observedAttributes.ALLOW_WHILE_TYPING:this.allowWhileTyping=c(s);break;case r.observedAttributes.PREVENT_DEFAULT:this.preventDefault=c(s);break;case r.observedAttributes.CAPTURE:this.capture=c(s);break;case r.observedAttributes.USE_CODE:this.useCode=c(s);break;case r.observedAttributes.DISABLED:this.disabled=c(s);break}}get keyBinding(){return this.key}set keyBinding(e){this.key=e}};o([l()],n.prototype,"key",2);o([l()],n.prototype,"target",2);o([l()],n.prototype,"global",2);o([l()],n.prototype,"allowWhileTyping",2);o([l()],n.prototype,"preventDefault",2);o([l()],n.prototype,"capture",2);o([l()],n.prototype,"useCode",2);o([l()],n.prototype,"disabled",2);o([l()],n.prototype,"activateCallback",2);n=o([b({name:r.elementName})],n);
