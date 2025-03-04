import{h as L}from"./constants-9n5_0r7k.js";import{t as v}from"./feature-detection-DRCh51Sa.js";class A{constructor(e){this.get=!0,this.set=!0,e&&Object.assign(this,e)}}const d="_core",H=(r,e)=>`${r}'s core does not contain the property "${e}"`,P=r=>`${r} does not have a core`;function E(r,e,t){if(r[d]){if(e in r[d])return t();throw new Error(H(r.localName,e))}else throw new Error(P(r.localName))}function R(r){const e=new A(r);return(t,n,o)=>{let s,a;const l=n,c=(r&&r.name||n).toString();if(o)s=o.get,a=o.set,o.configurable=!0,o.enumerable=!0,e.set&&(o.set=function(i){return y(this,c,u=>{const f=Object.getOwnPropertyDescriptor(t,c);f.set=u.set,Reflect.defineProperty(t,l,f),u.set(i)},a)}),e.get&&(o.get=function(){return _(this,c,i=>{const u=Object.getOwnPropertyDescriptor(t,c);return u.get=i.get,Reflect.defineProperty(t,l,u),i.get()},s)});else if(e.set||e.get){const i={configurable:!0,enumerable:!0},u={get(){const b=this;return _(b,c,m=>{let h;return e.set&&(h={...f}),Reflect.defineProperty(b,c,{configurable:!0,enumerable:!0,...m,...h}),m.get()})}},f={set(b){const m=this;return y(m,c,h=>{let g;e.get&&(g={...u}),Reflect.defineProperty(m,c,{configurable:!0,enumerable:!0,...h,...g}),h.set(b)})}};e.get&&Object.assign(i,{...u}),e.set&&Object.assign(i,{...f}),Reflect.defineProperty(t,l,i)}}}function p(r,e,t){r[d][t]=e}function w(r,e){return r[d][e]}function y(r,e,t,n){let o;return n?o={set(s){n.call(r,s),p(r,s,e)}}:o={set(s){p(r,s,e)}},E(r,e,()=>t(o))}function _(r,e,t,n){let o;return n?o={get(){return n.call(r),w(r,e)}}:o={get(){return w(r,e)}},E(r,e,()=>t(o))}class O{constructor(){}static get(e){var n;const t=(n=window.TylerForgeGlobalConfiguration)==null?void 0:n[e];return t?{has(o){return o in t},valueOf(o){return t[o]}}:null}}class j{constructor(e){this._component=e}get hostElement(){return this._component}hasHostAttribute(e){return this._component.hasAttribute(e)}getHostAttribute(e){return this._component.getAttribute(e)}setHostAttribute(e,t=""){this._component.setAttribute(e,t)}removeHostAttribute(e){this._component.removeAttribute(e)}toggleHostAttribute(e,t,n){v(this._component,t,e,n)}redispatchEvent(e,t){var l;const n=!(((l=e.target)==null?void 0:l.getRootNode())instanceof ShadowRoot);e.bubbles&&(e.composed||n)&&e.stopPropagation();const o={...e,detail:e.detail??null,bubbles:(t==null?void 0:t.bubbles)??e.bubbles,cancelable:(t==null?void 0:t.cancelable)??e.cancelable,composed:(t==null?void 0:t.composed)??e.composed},s=Reflect.construct(e.constructor,[e.type,o]),a=!this._component.dispatchEvent(s);return a&&e.preventDefault(),!a}emitHostEvent(e,t=null,n=!0,o){return L(this._component,e,t,n,o)}dispatchHostEvent(e){return!this._component.dispatchEvent(e)}toggleHostListener(e,t,n,o){n?this.addHostListener(e,t,o):this.removeHostListener(e,t,o)}addHostListener(e,t,n){this._component.addEventListener(e,t,n)}removeHostListener(e,t,n){this._component.removeEventListener(e,t,n)}addWindowListener(e,t,n){window.addEventListener(e,t,n)}removeWindowListener(e,t,n){window.removeEventListener(e,t,n)}addDocumentListener(e,t,n){this._component.ownerDocument.addEventListener(e,t,n)}removeDocumentListener(e,t,n){this._component.ownerDocument.removeEventListener(e,t,n)}getScreenWidth(){return window.innerWidth}setBodyAttribute(e,t){this._component.ownerDocument.body.setAttribute(e,t)}removeBodyAttribute(e){this._component.ownerDocument.body.removeAttribute(e)}focusHost(e){HTMLElement.prototype.focus.call(this._component,e)}clickHost(){HTMLElement.prototype.click.call(this._component)}get isConnected(){return this._component.isConnected}tryApplyGlobalConfiguration(e){const t=this._component.tagName.toLowerCase(),n=O.get(t);if(n){for(const o of e)if(n.has(o)){const s=n.valueOf(o);s&&(this._component[o]=s)}}}}export{j as B,R as c};
