import"./lit-element-Dk2-kgKT.js";import{k as g,D as d}from"./lit-html-DZH-Jm0H.js";import{a as m}from"./chunk-454WOBUV-CM0pFb8Z.js";import{b as u,g as S,s as v}from"./utils-CRuDW25z.js";import{s as x}from"./style-map-DxfbqtuX.js";import"./constants-DjE6emXm.js";import"./stepper-DIpqpFgV.js";import"./state-layer-DTKAXCUq.js";const s="forge-stepper",y=m("forge-step-select"),$={title:"Components/Stepper",render:e=>{const r=u(e),f=r?x(r):d;return g`
      <forge-stepper
        .alternative=${e.alternative}
        .layoutMode=${e.layoutMode}
        .layoutAlign=${e.layoutAlign}
        .disabled=${e.disabled}
        .vertical=${e.vertical}
        .linear=${e.linear}
        style=${f}
        @forge-step-select=${y}>
        <forge-step>Step 1</forge-step>
        <forge-step>
          Step 2
          <span slot="optional">Optional</span>
        </forge-step>
        <forge-step>
          <div slot="expansion-content">Expansion Content</div>
          ${e.vertical?"Expand me":"Step 3"}
        </forge-step>
        <forge-step>Step 4</forge-step>
      </forge-stepper>
    `},component:s,subcomponents:{Step:"forge-step"},argTypes:{...S({tagName:s,exclude:["steps","selectedIndex"],controls:{layoutMode:{control:"select",options:["fixed","clustered"]},layoutAlign:{control:"select",options:["left","center","right"]}}})},args:{layoutMode:"fixed"}},t={},o={...v,render:e=>g`
    <forge-stepper vertical="true">
      <forge-step>Step 1</forge-step>
      <forge-step>
        Step 2
        <span slot="optional">Optional</span>
      </forge-step>
      <forge-step>
        <div slot="expansion-content">Expansion Content</div>
        ${e.vertical?"Expand me":"Step 3"}
      </forge-step>
      <forge-step>Step 4</forge-step>
    </forge-stepper>
  `};var p,a,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,i,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: args => html\`
    <forge-stepper vertical="true">
      <forge-step>Step 1</forge-step>
      <forge-step>
        Step 2
        <span slot="optional">Optional</span>
      </forge-step>
      <forge-step>
        <div slot="expansion-content">Expansion Content</div>
        \${args.vertical ? 'Expand me' : 'Step 3'}
      </forge-step>
      <forge-step>Step 4</forge-step>
    </forge-stepper>
  \`
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Demo","Vertical"],P=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,Vertical:o,__namedExportsOrder:b,default:$},Symbol.toStringTag,{value:"Module"}));export{t as D,P as S,o as V};
