import{C as l,o as n,B as c,p as h,b}from"./constants-CFf81ck9.js";const g=`${l}divider`,m={VERTICAL:"vertical"},o={elementName:g,attributes:m},p=`<template>
  <div class="forge-divider" part="root"></div>
</template>
`,_=":host{--_divider-margin: var(--forge-divider-margin, 0)}:host{display:block;contain:content;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color: var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width: var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style: var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,C=(r,t,i,d)=>{for(var e=d>1?void 0:d?f(t,i):t,a=r.length-1,s;a>=0;a--)(s=r[a])&&(e=(d?s(t,i,e):s(e))||e);return d&&e&&u(t,i,e),e};let v=class extends c{static get observedAttributes(){return[o.attributes.VERTICAL]}constructor(){super(),h(this,p,_)}attributeChangedCallback(r,t,i){switch(r){case o.attributes.VERTICAL:this.vertical=b(i);break}}get vertical(){return this.hasAttribute(o.attributes.VERTICAL)}set vertical(r){this.toggleAttribute(o.attributes.VERTICAL,r)}};v=C([n({name:o.elementName})],v);export{v as D};
