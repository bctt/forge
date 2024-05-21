import{x as k}from"./lit-element-CiOxWxgJ.js";import{c as O,t as R,s as z}from"./utils-DeKcpcPg.js";import{C as w,k as L,l as f,r as B,m as N,n as P,F as m,a as D,B as F,b as M,o as W,I as j,t as X}from"./base-button-adapter-DdgENYzW.js";import"./icon-button-D3QUQ_Vk.js";const G=`${w}avatar`,H={IMAGE_URL:"image-url",TEXT:"text",LETTER_COUNT:"letter-count"},$={DEFAULT_LETTER_COUNT:2},K={ROOT:".forge-avatar",DEFAULT_SLOT:".forge-avatar > slot:not([name])"},V={BACKGROUND_VARNAME:"--forge-avatar-background"},a={elementName:G,attributes:H,numbers:$,selectors:K,strings:V};class q extends L{constructor(t){super(t),this._root=f(this._component,a.selectors.ROOT),this._defaultSlot=f(this._component,a.selectors.DEFAULT_SLOT)}async setBackgroundImageUrl(t){return this._root.classList.add("forge-avatar--image"),new Promise(e=>{const r=new Image;r.onload=()=>{this._root.style.backgroundImage=`url(${r.src})`,e(!0)},r.onerror=()=>{this._root.classList.remove("forge-avatar--image"),e(!1)},r.src=t})}removeBackgroundImage(){this._root.style.removeProperty("background-image"),this._root.classList.remove("forge-avatar--image")}setText(t){this._defaultSlot.textContent=t}clearText(){B(this._defaultSlot)}}class J{constructor(t){this._adapter=t,this._text="",this._letterCount=a.numbers.DEFAULT_LETTER_COUNT,this._initialized=!1}initialize(){this._render(),this._initialized=!0}disconnect(){this._initialized=!1}_render(){this._setText(),this._setBackgroundImageUrl()}async _setBackgroundImageUrl(){this._imageUrl?await this._adapter.setBackgroundImageUrl(this._imageUrl)&&this._adapter.clearText():this._adapter.removeBackgroundImage()}_setText(){const t=this._getTextContent(this._text,this._letterCount);t?this._adapter.setText(t):this._adapter.clearText()}_getTextContent(t,e){if(!t||!N(t)||e<=0)return"";let r;return e===1?r=t[0].toUpperCase():r=(t.match(/\S+/g)||[]).slice(0,e).reduce((s,i)=>s+=i[0].toUpperCase(),""),r}get text(){return this._text}set text(t){this._text!==t&&(this._text=t||"",this._adapter.setHostAttribute(a.attributes.TEXT,this._text),this._initialized&&this._render())}get letterCount(){return this._letterCount}set letterCount(t){this._letterCount!==t&&(this._letterCount=t,this._adapter.setHostAttribute(a.attributes.LETTER_COUNT,P(this._letterCount)?this._letterCount.toString():""),this._initialized&&this._render())}get imageUrl(){return this._imageUrl}set imageUrl(t){this._imageUrl!==t&&(this._imageUrl=t,this._initialized&&this._render())}}const Q=`<template>
  <div class="forge-avatar" aria-hidden="true" part="root">
    <slot></slot>
  </div>
</template>`,Y=':host{contain:content;display:inline-block}:host([hidden]){display:none}.forge-avatar{--_avatar-size: var(--forge-avatar-size, 40px);--_avatar-background: var(--forge-avatar-background, var(--forge-theme-tertiary, #3d5afe));--_avatar-color: var(--forge-avatar-color, var(--forge-theme-on-tertiary, #ffffff));--_avatar-transition-duration: var(--forge-avatar-transition-duration, var(--forge-animation-duration-short4, .2s));--_avatar-transition-timing: var(--forge-avatar-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_avatar-shape: var(--forge-avatar-shape, var(--forge-shape-round, 50%))}.forge-avatar{display:flex;align-items:center;justify-content:center;overflow:hidden;transition:height var(--_avatar-transition-duration) var(--_avatar-transition-timing),width var(--_avatar-transition-duration) var(--_avatar-transition-timing);border-radius:var(--_avatar-shape);box-sizing:border-box;width:var(--_avatar-size);height:var(--_avatar-size);background-color:var(--_avatar-background);background-position:center;background-repeat:no-repeat;background-size:cover;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-subheading2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-subheading2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-font-size-scale, 1)));font-weight:var(--forge-typography-subheading2-font-weight, 400);line-height:var(--forge-typography-subheading2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-subheading2-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-subheading2-letter-spacing, normal);text-transform:var(--forge-typography-subheading2-text-transform, inherit);text-decoration:var(--forge-typography-subheading2-text-decoration, inherit);color:var(--_avatar-color)}.forge-avatar--image{background-color:inherit}';var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,u=(o,t,e,r)=>{for(var n=r>1?void 0:r?tt(t,e):t,s=o.length-1,i;s>=0;s--)(i=o[s])&&(n=(r?i(t,e,n):i(n))||n);return r&&n&&Z(t,e,n),n};let h=class extends F{static get observedAttributes(){return[a.attributes.TEXT,a.attributes.LETTER_COUNT,a.attributes.IMAGE_URL]}constructor(){super(),M(this,Q,Y),this._foundation=new J(new q(this))}connectedCallback(){this._foundation.initialize()}disconnectedCallback(){this._foundation.disconnect()}attributeChangedCallback(o,t,e){switch(o){case a.attributes.TEXT:this.text=e;break;case a.attributes.LETTER_COUNT:this.letterCount=W(e);break;case a.attributes.IMAGE_URL:this.imageUrl=e;break}}};u([m()],h.prototype,"text",2);u([m()],h.prototype,"letterCount",2);u([m()],h.prototype,"imageUrl",2);h=u([D({name:a.elementName})],h);const et={title:"Components/Avatar",render:o=>O("forge-avatar",o),component:"forge-avatar",parameters:{controls:{exclude:/^root/i},actions:{disable:!0}},argTypes:{...R("forge-avatar")},args:{text:"Tyler Forge",letterCount:2}},c={},p="https://cdn.forge.tylertech.com/v1/icons/svg/custom/forge_logo.svg",g={parameters:{controls:{disable:!0}},args:{"image-url":p,imageUrl:p}},l={...z,render:()=>(j.define(X),k`
      <forge-avatar>
        <forge-icon name="person"></forge-icon>
      </forge-avatar>
    `)},d={...z,render:o=>{const t=document.createElement("forge-icon-button");t.setAttribute("aria-label","Icon button with avatar");const e=O("forge-avatar",o);return t.appendChild(e),t}};var _,v,b;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,T,C;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    'image-url': imageUrl,
    imageUrl
  }
}`,...(C=(T=g.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var x,E,U;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    IconRegistry.define(tylIconPerson);
    return html\`
      <forge-avatar>
        <forge-icon name="person"></forge-icon>
      </forge-avatar>
    \`;
  }
}`,...(U=(E=l.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var A,I,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: args => {
    const iconButton = document.createElement('forge-icon-button');
    iconButton.setAttribute('aria-label', 'Icon button with avatar');
    const el = customElementStoryRenderer('forge-avatar', args);
    iconButton.appendChild(el);
    return iconButton;
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const rt=["Default","WithImage","WithIcon","WithIconButton"],it=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithIcon:l,WithIconButton:d,WithImage:g,__namedExportsOrder:rt,default:et},Symbol.toStringTag,{value:"Module"}));export{it as A,c as D,l as W,g as a,d as b};
