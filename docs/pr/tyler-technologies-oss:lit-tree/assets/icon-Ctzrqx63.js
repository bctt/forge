import{C as v,o as g,j as A,B as x,k as w}from"./constants-BjnHqKgS.js";import{B as I,c as _}from"./base-adapter-CQdYccXX.js";import{c as m}from"./feature-detection-ONR9WHvu.js";import"./index-BgGCUUFB.js";function T(s,e){const t=document.createElement("div");t.innerHTML=s;for(let o=t.childNodes.length-1;o>=0;o--)t.childNodes[o].nodeName.toLowerCase()!=="svg"&&t.removeChild(t.childNodes[o]);const r=t.firstElementChild;return(r==null?void 0:r.nodeName.toLowerCase())==="svg"&&b(r)?(e&&r.setAttribute("viewBox",e),!r.hasAttribute("viewBox")&&e&&r.setAttribute("viewBox",e),r.removeAttribute("height"),r.removeAttribute("width"),r):null}function b(s){if(s.nodeType!==1)return!0;if(s.nodeName.toLowerCase()==="script"||s.querySelector("script"))return!1;const e=Array.from(s.attributes);for(const r of e)if(typeof r.name=="string"&&r.name.toLowerCase().startsWith("on"))return!1;const t=Array.from(s.childNodes);for(const r of t)if(!b(r))return!1;return!0}const E=`${v}icon`,y={NAME:"name",SRC:"src",LAZY:"lazy",EXTERNAL:"external",EXTERNAL_TYPE:"external-type",VIEWBOX:"viewbox",THEME:"theme"},L={...y},C={LAZY_ROOT_MARGIN:50,DEFAULT_WIDTH:24,DEFAULT_HEIGHT:24},N={DEFAULT_NETWORK_BASE_URL:`${g}v1/icons/svg`},n={elementName:E,observedAttributes:y,attributes:L,numbers:C,strings:N},f="forgeIcons";class z extends I{constructor(e){super(e)}canLazyLoad(){return!!window.IntersectionObserver}observeVisibility(e){this._observer=new IntersectionObserver(t=>{t.some(r=>r.isIntersecting)&&(this.destroyVisibilityObserver(),e())},{rootMargin:`${n.numbers.LAZY_ROOT_MARGIN}px`}),this._observer.observe(this._component)}destroyVisibilityObserver(){this._observer&&(this._observer.disconnect(),this._observer=void 0)}setContent(e){const t=this._component.shadowRoot;t.querySelectorAll(":not(style)").forEach(r=>r.remove()),e&&(this._component.viewbox&&e.setAttribute("viewBox",this._component.viewbox),e.setAttribute("aria-hidden","true"),t.appendChild(e))}setViewBox(e){var r;const t=(r=this._component.shadowRoot)==null?void 0:r.querySelector("svg");t==null||t.setAttribute("viewBox",e)}}const i=class i{static get _icons(){return window[f]||(window[f]=new Map),window[f]}static define(e,t){if(Array.isArray(e))return e.filter(l=>i._isIconObject(l)).forEach(l=>i._register(l.name,l.data));const{name:r,data:o}=i._parseIcon(e,t);i._register(r,o)}static remove(e){const t=i._isIconObject(e)?e.name:e;i._icons.delete(t)}static removeListener(e,t){const r=i._listeners.get(e);Array.isArray(r)&&r.includes(t)&&r.splice(r.indexOf(t),1)}static clear(){i._icons.clear(),i._listeners.clear()}static get(e){return i._icons.get(e)}static setNode(e,t){const r=i.get(e);r&&(r.node=t)}static getIconNames(){return Array.from(i._icons.keys())}static awaitIcon(e,t){if(i._icons.has(e)){t();return}const r=i._listeners.get(e)??[];i._listeners.set(e,[...r,t])}static get size(){return i._icons.size}static _register(e,t){i._icons.set(e,{raw:t,node:void 0}),i._invalidateListeners(e)}static _invalidateListeners(e){const t=i._listeners.get(e);Array.isArray(t)&&t.length&&(t.forEach(r=>r()),i._listeners.delete(e))}static _parseIcon(e,t=""){return i._isIconObject(e)?e:{name:e,data:t}}static _isIconObject(e){return typeof e=="object"&&e.hasOwnProperty("name")&&e.hasOwnProperty("data")}};i._listeners=new Map;let c=i;const p=new Map;function u(s,e,t=!0){if(!s||!s.includes("svg"))return null;!e&&!s.includes("viewBox")&&(e=`0 0 ${n.numbers.DEFAULT_WIDTH} ${n.numbers.DEFAULT_HEIGHT}`);const r=T(s,e);return t&&r&&r.setAttribute("part","svg"),r}function O(s){return c.get(s)}function R(s,e){c.awaitIcon(s,e)}function B(s,e){c.removeListener(s,e)}function U(s,e){let t=p.get(s);if(!t)if(typeof fetch<"u"&&typeof document<"u")t=fetch(s).then(async r=>{if(r.ok){const o=await r.text()||"";return c.define({name:e,data:o}),p.delete(s),o}return c.define({name:e,data:""}),""}),p.set(s,t);else return c.define({name:e,data:""}),Promise.resolve("");return t||Promise.resolve("")}function S(s){return["standard","extended","custom"].includes(s)?s:""}class H{constructor(e){this._adapter=e,this._lazy=!1,this._external=!1,this._externalType="standard",this._lazyListener=this._loadIcon.bind(this)}initialize(){this._applyIcon()}destroy(){this._adapter.destroyVisibilityObserver(),this._clearIconQueue(),this._tryRemoveListener()}_safeApplyIcon(){this._adapter.isConnected&&(this._clearIconQueue(),this._queueIconUpdate())}_tryRemoveListener(){this._registrationListener&&this._name&&B(this._name,this._registrationListener)}_applyIcon(){this._lazy&&this._adapter.canLazyLoad()?this._adapter.observeVisibility(this._lazyListener):this._loadIcon()}_clearIconQueue(){this._applyTimer&&(clearTimeout(this._applyTimer),this._applyTimer=void 0)}_queueIconUpdate(){this._applyTimer=window.setTimeout(()=>{this._applyTimer=void 0,this._applyIcon()})}async _loadIcon(){try{if(this._src){const e=u(this._src,this._viewbox);this._setIconContent(e)}else if(this._name){const e=this._tryGetIcon(this._name);if(e!=null&&e.node){this._setIconContent(e.node);return}let t=null;if(e)e.raw&&(t=u(e.raw,this._viewbox));else{if(!this._external){this._registrationListener=()=>this._applyIcon(),R(this._name,this._registrationListener),this._adapter.setContent(null);return}this._externalType||(this._externalType="standard");const r=this._getExternalUrl(this._name,this._externalType);if(r){const o=await U(r,this._name);o&&(t=u(o,this._viewbox))}}t&&(e!=null&&e.node||c.setNode(this._name,t),this._setIconContent(t))}else this._adapter.setContent(null)}catch(e){throw this._adapter.setContent(null),e}}_setIconContent(e){const t=e?e.cloneNode(!0):null;t&&this._adapter.setContent(t)}_tryGetIcon(e){return O(e)}_getExternalUrl(e,t){if(typeof this._externalUrlBuilder=="function")return this._externalUrlBuilder(e,t);const r=S(this._externalType);return`${n.strings.DEFAULT_NETWORK_BASE_URL}${r?`/${r}`:""}/${e}.svg`}get name(){return this._name}set name(e){this._name!==e&&(this._registrationListener&&this._tryRemoveListener(),this._name=(e||"").replace(/\s+/,""),this._safeApplyIcon(),this._adapter.toggleHostAttribute(n.attributes.NAME,!!this._name,this._name))}get src(){return this._src}set src(e){this._src!==e&&(this._src=e,this._adapter.isConnected&&this._applyIcon(),this._adapter.toggleHostAttribute(n.attributes.SRC,!!this._src,this._src))}get lazy(){return this._lazy}set lazy(e){this._lazy!==e&&(this._lazy=e,this._safeApplyIcon(),this._adapter.toggleHostAttribute(n.attributes.LAZY,this._lazy))}get external(){return this._external}set external(e){this._external!==e&&(this._external=e,this._safeApplyIcon(),this._adapter.toggleHostAttribute(n.attributes.EXTERNAL,this._external))}get externalType(){return this._externalType}set externalType(e){this._externalType!==e&&(this._externalType=e,this._safeApplyIcon(),this._adapter.setHostAttribute(n.attributes.EXTERNAL_TYPE,`${this._externalType}`))}get externalUrlBuilder(){return this._externalUrlBuilder}set externalUrlBuilder(e){this._externalUrlBuilder!==e&&(this._externalUrlBuilder=e,this._safeApplyIcon())}get viewbox(){return this._viewbox}set viewbox(e){this._viewbox!==e&&(this._viewbox=e,this._adapter.setViewBox(this._viewbox),this._adapter.setHostAttribute(n.attributes.VIEWBOX,`${this.viewbox}`))}get theme(){return this._theme}set theme(e){this._theme!==e&&(this._theme=e,this._adapter.setHostAttribute(n.attributes.THEME,this._theme))}layout(){this._adapter.isConnected&&this._applyIcon()}}const M=`<template></template>
`,P=":host{--_icon-color: var(--forge-icon-color, currentColor);--_icon-size: var(--forge-icon-size, 1em);--_icon-width: var(--forge-icon-width, var(--_icon-size));--_icon-height: var(--forge-icon-height, var(--_icon-size));--_icon-font-size: var(--forge-icon-font-size, calc(var(--forge-typography-font-size, 1rem) * 1.5))}:host{display:inline-block;box-sizing:content-box;contain:content;font-size:var(--_icon-font-size)}:host([hidden]){display:none}svg{width:var(--_icon-width);height:var(--_icon-height);display:block;fill:var(--_icon-color);stroke:var(--_icon-color);stroke-width:0}:host([theme=primary]){--_icon-color: var(--forge-icon-color, var(--forge-theme-primary, #3f51b5))}:host([theme=secondary]){--_icon-color: var(--forge-icon-color, var(--forge-theme-secondary, #ffc107))}:host([theme=tertiary]){--_icon-color: var(--forge-icon-color, var(--forge-theme-tertiary, #3d5afe))}:host([theme=success]){--_icon-color: var(--forge-icon-color, var(--forge-theme-success, #2e7d32))}:host([theme=error]){--_icon-color: var(--forge-icon-color, var(--forge-theme-error, #b00020))}:host([theme=warning]){--_icon-color: var(--forge-icon-color, var(--forge-theme-warning, #d14900))}:host([theme=text-medium]){--_icon-color: var(--forge-icon-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)))}:host([theme=text-low]){--_icon-color: var(--forge-icon-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)))}";var D=Object.defineProperty,$=Object.getOwnPropertyDescriptor,h=(s,e,t,r)=>{for(var o=r>1?void 0:r?$(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(o=(r?d(e,t,o):d(o))||o);return r&&o&&D(e,t,o),o};let a=class extends x{static get observedAttributes(){return Object.values(n.observedAttributes)}constructor(){super(),w(this,M,P),this._core=new H(new z(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(s,e,t){switch(s){case n.observedAttributes.NAME:this.name=t;break;case n.observedAttributes.SRC:this.src=t;break;case n.observedAttributes.LAZY:this.lazy=m(t);break;case n.observedAttributes.EXTERNAL:this.external=m(t);break;case n.observedAttributes.EXTERNAL_TYPE:this.externalType=t;break;case n.observedAttributes.VIEWBOX:this.viewbox=t;break;case n.observedAttributes.THEME:this.theme=t;break}}layout(){this._core.layout()}};h([_()],a.prototype,"name",2);h([_()],a.prototype,"src",2);h([_()],a.prototype,"lazy",2);h([_()],a.prototype,"external",2);h([_()],a.prototype,"externalType",2);h([_()],a.prototype,"externalUrlBuilder",2);h([_()],a.prototype,"viewbox",2);h([_()],a.prototype,"theme",2);a=h([A({name:n.elementName})],a);export{c as I,a,n as b};
