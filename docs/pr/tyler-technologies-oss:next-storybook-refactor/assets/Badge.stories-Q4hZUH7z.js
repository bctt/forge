import{x as t}from"./lit-element-Co407TGG.js";import"./lit-html-Cxzf5Fb2.js";import{c as x,a as T,s as n,G as P}from"./constants-DyS6XWk2.js";import{I as v,t as E}from"./icon-n7YxJaRC.js";import"./badge-CZumGzwj.js";import"./icon-button-D_Kz_KJT.js";import"./focus-indicator-DEXc5aaB.js";import"./index-kxh4SYdw.js";import"./state-layer-Cw24Ee-e.js";const g="forge-badge",_={title:"Components/Badge",render:s=>{const d=x(g,s);return d.innerHTML=s.text,d},component:g,parameters:{actions:{disable:!0}},argTypes:{...T({tagName:g,controls:{theme:{control:"select",options:["default",...P,"info-primary","info-secondary"]}}})},args:{text:"Status"}},e={},r={...n,render:()=>t`
    <div style="display: flex; gap: 8px;">
      <forge-badge theme="default">default</forge-badge>
      <forge-badge theme="primary">Primary</forge-badge>
      <forge-badge theme="secondary">Secondary</forge-badge>
      <forge-badge theme="tertiary">Tertiary</forge-badge>
      <forge-badge theme="success">Success</forge-badge>
      <forge-badge theme="error">Error</forge-badge>
      <forge-badge theme="warning">Warning</forge-badge>
      <forge-badge theme="info">Info</forge-badge>
      <forge-badge theme="info-secondary">Info (secondary)</forge-badge>
    </div>
    `},o={...n,args:{strong:!0},render:()=>t`
    <div style="display: flex; gap: 8px;">
      <forge-badge strong theme="default">default</forge-badge>
      <forge-badge strong theme="primary">Primary</forge-badge>
      <forge-badge strong theme="secondary">Secondary</forge-badge>
      <forge-badge strong theme="tertiary">Tertiary</forge-badge>
      <forge-badge strong theme="success">Success</forge-badge>
      <forge-badge strong theme="error">Error</forge-badge>
      <forge-badge strong theme="warning">Warning</forge-badge>
      <forge-badge strong theme="info">Info</forge-badge>
      <forge-badge strong theme="info-secondary">Info (secondary)</forge-badge>
    </div>
    `},a={...n,render:()=>(v.define(E),t`
    <forge-icon-button>
      <forge-icon name="notifications" style="position: absolute;"></forge-icon>
      <forge-badge slot="badge">1</forge-badge>
    </forge-icon-button>
    `)};var f,i,m;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,b,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    return html\`
    <div style="display: flex; gap: 8px;">
      <forge-badge theme="default">default</forge-badge>
      <forge-badge theme="primary">Primary</forge-badge>
      <forge-badge theme="secondary">Secondary</forge-badge>
      <forge-badge theme="tertiary">Tertiary</forge-badge>
      <forge-badge theme="success">Success</forge-badge>
      <forge-badge theme="error">Error</forge-badge>
      <forge-badge theme="warning">Warning</forge-badge>
      <forge-badge theme="info">Info</forge-badge>
      <forge-badge theme="info-secondary">Info (secondary)</forge-badge>
    </div>
    \`;
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    strong: true
  },
  render: () => {
    return html\`
    <div style="display: flex; gap: 8px;">
      <forge-badge strong theme="default">default</forge-badge>
      <forge-badge strong theme="primary">Primary</forge-badge>
      <forge-badge strong theme="secondary">Secondary</forge-badge>
      <forge-badge strong theme="tertiary">Tertiary</forge-badge>
      <forge-badge strong theme="success">Success</forge-badge>
      <forge-badge strong theme="error">Error</forge-badge>
      <forge-badge strong theme="warning">Warning</forge-badge>
      <forge-badge strong theme="info">Info</forge-badge>
      <forge-badge strong theme="info-secondary">Info (secondary)</forge-badge>
    </div>
    \`;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,S,I;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    IconRegistry.define(tylIconNotifications);
    return html\`
    <forge-icon-button>
      <forge-icon name="notifications" style="position: absolute;"></forge-icon>
      <forge-badge slot="badge">1</forge-badge>
    </forge-icon-button>
    \`;
  }
}`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const W=["Demo","Themed","Strong","WithIconButton"],A=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,Strong:o,Themed:r,WithIconButton:a,__namedExportsOrder:W,default:_},Symbol.toStringTag,{value:"Module"}));export{A as B,e as D,o as S,r as T,a as W};
