import{x as c,T as l}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as n,g as m}from"./utils-CpphmWLJ.js";import"./constants-BMnwgo1j.js";import"./file-picker-YSUmVd1n.js";import"./index-Dh0vMUMR.js";import{o as d}from"./style-map-D0ILlpbs.js";const o="forge-file-picker",u={title:"Components/File Picker",render:e=>{const t=n(e),i=t?d(t):l;return c`
  <forge-file-picker
    .accept=${e.accept}
    .maxSize=${e.maxSize}
    .multiple=${e.multiple}
    .disabled=${e.disabled}
    .compact=${e.compact}
    .borderless=${e.borderless}
    .capture=${e.capture}
    style=${i}>
    <span slot="primary">Drag files here or</span>
    <span slot="secondary">Secondary text here</span>
    <forge-button variant="outlined">
      Select files
    </forge-button>
    <span slot="helper-text">Helper text goes here</span>
  </forge-file-picker>
  `},component:o,parameters:{actions:{disable:!0}},argTypes:{...m({tagName:o,controls:{maxSize:{control:{type:"number"}}}})},args:{maxSize:0}},r={};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const f=["Demo"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{r as D,k as F};
