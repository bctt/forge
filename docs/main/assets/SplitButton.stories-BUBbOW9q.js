import{I as p}from"./icon-DB7kP3Ec.js";import"./feature-detection-DRCh51Sa.js";import{S as d}from"./split-button-Qx3xPT4D.js";import"./button-s6uPnjdF.js";import{u as i,v as l}from"./index-ByifSpfC.js";import"./focus-indicator-6buR07aw.js";import"./index-BmocOEUj.js";import"./state-layer-CajKShBb.js";import{x as c,E as u}from"./lit-html-paDGiEfB.js";import{o as f}from"./style-map-C9nPWcxA.js";import{b as g,g as b,G as S}from"./utils-ColNTF5W.js";import"./menu-_Me2lw8b.js";import"./linear-progress-CqfIuBkR.js";import"./list-CpSCpOXb.js";import"./popover-CvqbaTJt.js";import"./overlay-DpaCc3Uf.js";import"./skeleton-D2S3-1Sc.js";p.define([i,l]);const r="forge-split-button",T={title:"Components/Split Button",render:e=>{const m=[{label:"Schedule send",value:"schedule",leadingIcon:i.name,leadingIconType:"component"},{label:"Save draft",value:"draft",leadingIcon:l.name,leadingIconType:"component"}],o=g(e);return c`
      <forge-split-button
        variant=${e.variant}
        theme=${e.theme}
        ?disabled=${e.disabled}
        ?dense=${e.dense}
        ?pill=${e.pill}
        style=${o?f(o):u}>
        <forge-button style="min-width: 100px;">Send</forge-button>
        <forge-menu .options=${m}>
          <forge-button aria-label="Show menu" popover-icon></forge-button>
        </forge-menu>
      </forge-split-button>
    `},component:r,parameters:{actions:{disable:!0}},argTypes:{...b({tagName:r,controls:{variant:{control:{type:"select"},options:["text","outlined","filled","raised"]},theme:{control:{type:"select"},options:S}}})},args:{variant:"raised",theme:d.defaults.DEFAULT_THEME,disabled:!1,dense:!1,pill:!1}},t={};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const y=["Demo"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:y,default:T},Symbol.toStringTag,{value:"Module"}));export{t as D,k as S};
