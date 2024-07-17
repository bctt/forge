import{x as t}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{c as x,g as T,s as n,G as P}from"./utils-BJOK626P.js";import{a as v}from"./index-CIZ3m0iD.js";import{I as E}from"./icon-DjINFoyU.js";import"./constants-DjE6emXm.js";import"./badge-BtnA6UF5.js";import"./icon-button-B2LQlK1e.js";import"./focus-indicator-BPFZRBe9.js";import"./index-Dh0vMUMR.js";import"./state-layer-D8bHAvjj.js";const g="forge-badge",_={title:"Components/Badge",render:s=>{const d=x(g,s);return d.innerHTML=s.text,d},component:g,parameters:{actions:{disable:!0}},argTypes:{...T({tagName:g,controls:{theme:{control:"select",options:["default",...P,"info-primary","info-secondary"]}}})},args:{text:"Status"}},e={},r={...n,render:()=>t`
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
    `},a={...n,render:()=>(E.define(v),t`
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
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,S,I;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const W=["Demo","Themed","Strong","WithIconButton"],G=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,Strong:o,Themed:r,WithIconButton:a,__namedExportsOrder:W,default:_},Symbol.toStringTag,{value:"Module"}));export{G as B,e as D,o as S,r as T,a as W};
