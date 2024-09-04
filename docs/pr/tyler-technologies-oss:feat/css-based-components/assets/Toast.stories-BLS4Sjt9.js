import{x as f,T as b}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import{b as T,g,O as $,G as x}from"./utils-CDvvFDpw.js";import{o as O}from"./style-map-D0ILlpbs.js";import{n as _,e as h}from"./ref-BorTy8X1.js";import"./constants-DjE6emXm.js";import"./toast-BSVZPaQw.js";import"./overlay-DasBtrG-.js";import"./button-CoZ69e4-.js";import"./focus-indicator-BpCDYqsq.js";import"./index-Dh0vMUMR.js";import"./state-layer-DkOkOFSZ.js";const r="forge-toast",A=d("forge-toast-action"),L=d("forge-toast-close"),S={title:"Components/Toast",render:t=>{const i=T(t),u=i?O(i):b,s=h();return f`
      <forge-button variant="raised" @click=${()=>s.value.open=!s.value.open}>Show Toast</forge-button>
      <forge-toast
        ${_(s)}
        .open=${t.open}
        .duration=${t.duration}
        .placement=${t.placement}
        .actionText=${t.actionText}
        .dismissible=${t.dismissible}
        .dismissLabel=${t.dismissLabel}
        .theme=${t.theme}
        style=${u}
        @forge-toast-action=${A}
        @forge-toast-close=${L}>
        ${t.text}
      </forge-toast>
    `},component:r,argTypes:{...g({tagName:r,controls:{placement:{control:"select",options:$},theme:{control:"select",options:["default",...x]}}}),text:{control:"text"}},args:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",open:!1,duration:2750,placement:"bottom",actionText:"",dismissible:!1,dismissLabel:"Dismiss toast",theme:"default"}},e={},o={args:{dismissible:!0,text:"This toast is dismissible!"}};var a,n,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    dismissible: true,
    text: 'This toast is dismissible!'
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const E=["Demo","Dismissible"],z=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,Dismissible:o,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{e as D,z as T,o as a};
