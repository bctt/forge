import{x as c,A as n}from"./lit-html-Bzgct6Ob.js";import{o as d}from"./style-map-D0ILlpbs.js";import{a as m,g as l}from"./utils-Bo5WgmOW.js";import"./backdrop-BPLpOU6H.js";const t="forge-backdrop",g={title:"Components/Backdrop",render:r=>{const o=m(r),p=o?d(o):n;return c`
      <div style="height: 256px; width: 320px; position: relative;">
        <forge-backdrop
          .visible=${r.visible}
          .fixed=${r.fixed}
          style=${p}>
        </forge-backdrop>
      </div>
    `},component:t,parameters:{layout:"centered",actions:{disable:!0}},argTypes:{...l({tagName:t})},args:{visible:!0,fixed:!1}},e={};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Demo"],v=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{v as B,e as D};
