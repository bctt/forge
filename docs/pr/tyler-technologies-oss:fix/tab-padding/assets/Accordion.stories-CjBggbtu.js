import{x as t}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{s as d}from"./decorators-EVhofM2Q.js";import{c as p,g as s}from"./utils-BJOK626P.js";import"./constants-DjE6emXm.js";import"./accordion-DftUkcay.js";import"./expansion-panel-BAlKgDPC.js";import"./divider-V8nRRqMS.js";const c="forge-accordion{width:200px;display:inline-block}forge-accordion forge-expansion-panel>div{display:flex;justify-content:space-between;align-items:center}",n="forge-accordion",l={title:"Components/Accordion",render:a=>p(n,a),component:n,decorators:[d(c)],parameters:{actions:{disable:!0}},argTypes:{...s({tagName:n,exclude:["panelSelector"]})}},e={render:()=>t`
      <forge-accordion>
        <forge-expansion-panel>
          <div slot="header">
            Panel One
            <forge-open-icon></forge-open-icon>
          </div>
          <div>Panel One Content</div>
        </forge-expansion-panel>
        <forge-divider></forge-divider>
        <forge-expansion-panel>
          <div slot="header">
            Panel Two
            <forge-open-icon></forge-open-icon>
          </div>
          <div>Panel Two Content</div>
        </forge-expansion-panel>
        <forge-divider></forge-divider>
        <forge-expansion-panel>
          <div slot="header">
            Panel Three
            <forge-open-icon></forge-open-icon>
          </div>
          <div>Panel Three Content</div>
        </forge-expansion-panel>
      </forge-accordion>
    `};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-accordion>
        <forge-expansion-panel>
          <div slot="header">
            Panel One
            <forge-open-icon></forge-open-icon>
          </div>
          <div>Panel One Content</div>
        </forge-expansion-panel>
        <forge-divider></forge-divider>
        <forge-expansion-panel>
          <div slot="header">
            Panel Two
            <forge-open-icon></forge-open-icon>
          </div>
          <div>Panel Two Content</div>
        </forge-expansion-panel>
        <forge-divider></forge-divider>
        <forge-expansion-panel>
          <div slot="header">
            Panel Three
            <forge-open-icon></forge-open-icon>
          </div>
          <div>Panel Three Content</div>
        </forge-expansion-panel>
      </forge-accordion>
    \`;
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const g=["Demo"],T=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:g,default:l},Symbol.toStringTag,{value:"Module"}));export{T as A,e as D};
