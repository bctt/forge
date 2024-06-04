import{I as p}from"./icon-Cn5siE75.js";import{S as d}from"./split-button-BhH-fWbi.js";import"./button-B9Dk2C52.js";import{k as i,l}from"./index-DqxpuPNu.js";import"./focus-indicator-jd-AY9Jk.js";import"./index-Dh0vMUMR.js";import"./state-layer-DzrxdbUp.js";import{x as c,A as u}from"./lit-html-Bzgct6Ob.js";import{o as f}from"./style-map-D0ILlpbs.js";import{a as g,g as b,G as S}from"./utils-CprCEKh8.js";import"./menu-DLHnI-8t.js";import"./linear-progress-De0XZzjv.js";import"./list-B8boNWcU.js";import"./popover-Dh31glfv.js";import"./overlay-CRRs1KxA.js";import"./skeleton-CbdcwsWz.js";p.define([i,l]);const r="forge-split-button",T={title:"Components/Split Button",render:e=>{const m=[{label:"Schedule send",value:"schedule",leadingIcon:i.name,leadingIconType:"component"},{label:"Save draft",value:"draft",leadingIcon:l.name,leadingIconType:"component"}],o=g(e);return c`
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
    `},component:r,parameters:{actions:{disable:!0}},argTypes:{...b({tagName:r,controls:{variant:{control:{type:"select"},options:["text","outlined","filled","raised"]},theme:{control:{type:"select"},options:S}}})},args:{variant:"raised",theme:d.defaults.DEFAULT_THEME,disabled:!1,dense:!1,pill:!1}},t={};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const y=["Demo"],P=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:y,default:T},Symbol.toStringTag,{value:"Module"}));export{t as D,P as S};
