import{x as c,T as m}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{o as p}from"./style-map-D0ILlpbs.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{a as g,g as l}from"./utils-CpphmWLJ.js";import"./constants-BMnwgo1j.js";import{I as f}from"./icon-Sxf3JEPH.js";import"./index-Dh0vMUMR.js";import{f as u,s as v}from"./index-BhA1MhXR.js";import"./card-Ca9yr3r0.js";import"./button-area-D4eGUMFQ.js";import"./focus-indicator-WHVXAnYX.js";import"./state-layer-DfBT0h4a.js";import"./icon-button-VlM_yzEM.js";import"./tooltip-Bv5qMFTK.js";import"./overlay-BEOKbUF9.js";import{s as b}from"./decorators-B79PnA5z.js";const y="forge-card{--forge-card-padding: 0;width:320px;max-width:100%}.content{display:flex;align-items:center;gap:8px;padding:16px}.content>:first-child{margin-inline-end:auto}",e="forge-button-area";f.define([u,v]);const h=d("click"),x={title:"Components/Button Area",render:t=>{const r=g(t),s=r?p(r):m;return c`
      <forge-card>
        <forge-button-area ?disabled=${t.disabled} @click=${h} style=${s}>
          <div class="content">
            <div>
              <div>Heading</div>
              <div>Content</div>
            </div>
            <forge-icon-button>
              <forge-icon role="img" name="favorite" aria-label="A heart graphic"></forge-icon>
              </forge-icon-button>
              <forge-tooltip>Favorite</forge-tooltip>
            <forge-icon name="chevron_right"></forge-icon>
          </div>
        </forge-button-area>
      </forge-card>
    `},component:e,decorators:[b(y)],parameters:{actions:{disable:!0}},argTypes:{...l({tagName:e})},args:{}},o={};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const A=["Demo"],H=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:A,default:x},Symbol.toStringTag,{value:"Module"}));export{H as B,o as D};
