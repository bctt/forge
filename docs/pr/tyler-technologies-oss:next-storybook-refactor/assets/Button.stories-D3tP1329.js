import{x as c}from"./lit-element-Co407TGG.js";import"./lit-html-Cxzf5Fb2.js";import{c as W,g as A,s as B,I as E,G as k}from"./icon-DXSQMaWm.js";import{t as C}from"./circular-progress-4nnvVKAN.js";import"./button-BIgwrNZR.js";import"./base-button-adapter-CfyBDUp6.js";const u="forge-button",R={title:"Components/Button",render:r=>{const t=W(u,r);return t.textContent=r.text,t},component:u,argTypes:{...A({tagName:u,exclude:["form","name","value"],controls:{variant:{control:{type:"select"},options:["text","outlined","filled","raised","link"]},theme:{control:{type:"select"},options:k}}}),text:{control:"text"}},args:{text:"Button",variant:"text",pill:!1,theme:"primary",type:"button",disabled:!1,popoverIcon:!1,dense:!1,fullWidth:!1}},e={},n={...B,render:()=>c`
      <forge-button>Text</forge-button>
      <forge-button variant="outlined">Outlined</forge-button>
      <forge-button variant="filled">Filled</forge-button>
      <forge-button variant="raised">Raised</forge-button>
      <forge-button variant="link">Link</forge-button>
    `},o={parameters:{controls:{include:["variant"]}},args:{variant:"raised"},render:({variant:r})=>c`
      <forge-button .variant=${r}>
        <a href="javascript: void(0);">
          Anchor button
          <forge-icon slot="end" name="open_in_new"></forge-icon>
        </a>
      </forge-button>
    `},a={parameters:{controls:{include:["variant"]}},args:{variant:"raised"},render:({variant:r})=>c`
      <forge-button variant=${r}>Primary</forge-button>
      <forge-button variant=${r} theme="secondary">Secondary</forge-button>
      <forge-button variant=${r} theme="tertiary">Tertiary</forge-button>
      <forge-button variant=${r} theme="success">Success</forge-button>
      <forge-button variant=${r} theme="warning">Warning</forge-button>
      <forge-button variant=${r} theme="error">Error</forge-button>
      <forge-button variant=${r} theme="info">Info</forge-button>
    `},s={parameters:{controls:{include:["variant","iconSlot"]}},argTypes:{iconSlot:{options:["start","end"],control:{type:"select"}}},args:{variant:"raised",iconSlot:"start"},render:({variant:r,iconSlot:t})=>(E.define(C),c`
      <forge-button .variant=${r}>
        <forge-icon slot=${t} name="forge_logo"></forge-icon>
        Button
      </forge-button>
    `)},i={parameters:{controls:{include:["variant","theme","disabled"]}},args:{variant:"raised"},render:({variant:r,theme:t,disabled:P})=>c`
      <forge-button .variant=${r} .theme=${t} ?disabled=${P}>
        Loading...
        <forge-circular-progress slot="end" aria-label="Loading something important"></forge-circular-progress>
      </forge-button>
    `};var g,l,d;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var f,m,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    return html\`
      <forge-button>Text</forge-button>
      <forge-button variant="outlined">Outlined</forge-button>
      <forge-button variant="filled">Filled</forge-button>
      <forge-button variant="raised">Raised</forge-button>
      <forge-button variant="link">Link</forge-button>
    \`;
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,v,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['variant']
    }
  },
  args: {
    variant: 'raised'
  },
  render: ({
    variant
  }) => {
    return html\`
      <forge-button .variant=\${variant}>
        <a href="javascript: void(0);">
          Anchor button
          <forge-icon slot="end" name="open_in_new"></forge-icon>
        </a>
      </forge-button>
    \`;
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,$,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['variant']
    }
  },
  args: {
    variant: 'raised'
  },
  render: ({
    variant
  }) => {
    return html\`
      <forge-button variant=\${variant}>Primary</forge-button>
      <forge-button variant=\${variant} theme="secondary">Secondary</forge-button>
      <forge-button variant=\${variant} theme="tertiary">Tertiary</forge-button>
      <forge-button variant=\${variant} theme="success">Success</forge-button>
      <forge-button variant=\${variant} theme="warning">Warning</forge-button>
      <forge-button variant=\${variant} theme="error">Error</forge-button>
      <forge-button variant=\${variant} theme="info">Info</forge-button>
    \`;
  }
}`,...(S=($=a.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var T,_,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['variant', 'iconSlot']
    }
  },
  argTypes: {
    iconSlot: {
      options: ['start', 'end'],
      control: {
        type: 'select'
      }
    }
  },
  args: {
    variant: 'raised',
    iconSlot: 'start'
  },
  render: ({
    variant,
    iconSlot
  }) => {
    IconRegistry.define(tylIconForgeLogo);
    return html\`
      <forge-button .variant=\${variant}>
        <forge-icon slot=\${iconSlot} name="forge_logo"></forge-icon>
        Button
      </forge-button>
    \`;
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var I,L,O;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['variant', 'theme', 'disabled']
    }
  },
  args: {
    variant: 'raised'
  },
  render: ({
    variant,
    theme,
    disabled
  }) => {
    return html\`
      <forge-button .variant=\${variant} .theme=\${theme} ?disabled=\${disabled}>
        Loading...
        <forge-circular-progress slot="end" aria-label="Loading something important"></forge-circular-progress>
      </forge-button>
    \`;
  }
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const j=["Demo","Variants","Anchor","Themed","WithIcon","WithCircularProgress"],N=Object.freeze(Object.defineProperty({__proto__:null,Anchor:o,Demo:e,Themed:a,Variants:n,WithCircularProgress:i,WithIcon:s,__namedExportsOrder:j,default:R},Symbol.toStringTag,{value:"Module"}));export{o as A,N as B,e as D,a as T,n as V,s as W,i as a};
