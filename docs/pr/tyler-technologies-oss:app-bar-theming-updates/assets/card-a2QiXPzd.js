import{r as _,a as g}from"./lit-element-B3QVTycr.js";import{x as u}from"./lit-html-CuBe1DX_.js";import{n as w,t as x}from"./property-2VT-dgmE.js";import{a as b}from"./utils-CRxrUqQD.js";import{C as m}from"./feature-detection-CY6TVbRZ.js";const y=":host{display:block}:host([hidden]){display:none}.forge-card{--_card-background: var(--forge-card-background, var(--forge-theme-surface, #ffffff));--_card-height: var(--forge-card-height, 100%);--_card-width: var(--forge-card-width, 100%);--_card-outline-color: var(--forge-card-outline-color, var(--forge-theme-outline, #e0e0e0));--_card-outline-width: var(--forge-card-outline-width, var(--forge-border-thin, 1px));--_card-outline-style: var(--forge-card-outline-style, solid);--_card-elevation: var(--forge-card-elevation, none);--_card-padding: var(--forge-card-padding, var(--forge-spacing-medium, 16px));--_card-shape: var(--forge-card-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_card-overflow: var(--forge-card-overflow, initial);--_card-raised-elevation: var(--forge-card-raised-elevation, 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12));--_card-raised-outline-width: var(--forge-card-raised-outline-width, 0)}.forge-card{background:var(--_card-background);border-color:var(--_card-outline-color);border-width:var(--_card-outline-width);border-style:var(--_card-outline-style);border-radius:var(--_card-shape);box-shadow:var(--_card-elevation);box-sizing:border-box;padding:var(--_card-padding);overflow:var(--_card-overflow);height:var(--_card-height);width:var(--_card-width);-webkit-tap-highlight-color:transparent}:host(:where([raised],:state(raised))) .forge-card{--_card-elevation: var(--_card-raised-elevation);--_card-outline-width: var(--_card-raised-outline-width)}:host([no-padding]) .forge-card{--_card-padding: var(--forge-card-padding, 0)}";var C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,l=r=>{throw TypeError(r)},v=(r,a,e,t)=>{for(var o=t>1?void 0:t?E(a,e):a,c=r.length-1,s;c>=0;c--)(s=r[c])&&(o=(t?s(a,e,o):s(o))||o);return t&&o&&C(a,e,o),o},p=(r,a,e)=>a.has(r)||l("Cannot "+e),O=(r,a,e)=>(p(r,a,"read from private field"),e?e.call(r):a.get(r)),P=(r,a,e)=>a.has(r)?l("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(r):a.set(r,e),A=(r,a,e,t)=>(p(r,a,"write to private field"),a.set(r,e),e),f,n,i;const h="forge-card";let d=class extends(n=g,f=m,n){constructor(){super(),P(this,i),this.raised=!1,A(this,i,this.attachInternals())}willUpdate(r){r.has("raised")&&b(O(this,i),"raised",this.raised)}render(){return u`<div class="forge-card" part="root"><slot></slot></div>`}};i=new WeakMap;d.styles=_(y);d[f]=h;v([w({type:Boolean,reflect:!0})],d.prototype,"raised",2);d=v([x(h)],d);
