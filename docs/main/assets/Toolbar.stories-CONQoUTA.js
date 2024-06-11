import{x as v}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{g as m}from"./utils-K-xB8EYC.js";import"./constants-BMnwgo1j.js";import"./toolbar-ByH3IRVo.js";const t="forge-toolbar",c={title:"Components/Toolbar",render:l=>v`
    <forge-toolbar .inverted=${l.inverted}>
      <div slot="before-start">Before start</div>
      <div slot="start">Start</div>
      <div slot="center">Center</div>
      <div slot="end">End</div>
      <div slot="after-end">After end</div>
    </forge-toolbar>
  `,component:t,parameters:{actions:{disable:!0}},argTypes:{...m({tagName:t})},args:{}},e={},r={render:()=>v`
    <forge-toolbar inverted>
      <div slot="before-start">Before start</div>
      <div slot="start">Start</div>
      <div slot="center">Center</div>
      <div slot="end">End</div>
      <div slot="after-end">After end</div>
    </forge-toolbar>
  `};var o,d,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var a,n,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <forge-toolbar inverted>
      <div slot="before-start">Before start</div>
      <div slot="start">Start</div>
      <div slot="center">Center</div>
      <div slot="end">End</div>
      <div slot="after-end">After end</div>
    </forge-toolbar>
  \`
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["Demo","Inverted"],T=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,Inverted:r,__namedExportsOrder:f,default:c},Symbol.toStringTag,{value:"Module"}));export{e as D,r as I,T};
