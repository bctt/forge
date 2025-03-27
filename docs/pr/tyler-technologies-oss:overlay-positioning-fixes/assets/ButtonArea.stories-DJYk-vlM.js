import"./lit-element-B3QVTycr.js";import{E as c,x as m}from"./lit-html-CuBe1DX_.js";import{o as d}from"./style-map-CeP1Mntv.js";import{a as g}from"./index-B-lxVbXh.js";import{g as p,b as l}from"./utils-DAdTVAL1.js";import"./feature-detection-C61kIZu7.js";import{I as f}from"./icon-DNSPAaK0.js";import"./index-CiLSBptl.js";import{n as u,B as b}from"./index-RsKXMDm2.js";import"./card-DnHcCLR_.js";import"./button-area-h-qKNwB7.js";import"./focus-indicator-DydcbRnf.js";import"./state-layer-Y8UVngaT.js";import"./icon-button-DJSm0po0.js";import"./tooltip-CuraUvU8.js";import"./overlay-CLYkgEZv.js";import{s as v}from"./decorators-CBntP_d2.js";const y="forge-card{--forge-card-padding: 0;width:320px;max-width:100%}.content{display:flex;align-items:center;gap:8px;padding:16px}.content>:first-child{margin-inline-end:auto}",r="forge-button-area";f.define([u,b]);const h=g("click"),x={title:"Components/Button Area",render:t=>{const e=l(t),s=e?d(e):c;return m`
      <forge-card>
        <forge-button-area ?disabled=${t.disabled} @click=${h} style=${s}>
          <button slot="button" aria-labelledby="button-heading"></button>
          <div class="content">
            <div>
              <div id="button-heading">Heading</div>
              <div>Content</div>
            </div>
            <forge-icon-button forge-ignore>
              <forge-icon role="img" name="favorite" aria-label="A heart graphic"></forge-icon>
            </forge-icon-button>
            <forge-tooltip>Favorite</forge-tooltip>
            <forge-icon name="chevron_right"></forge-icon>
          </div>
        </forge-button-area>
      </forge-card>
    `},component:r,decorators:[v(y)],parameters:{actions:{disable:!0}},argTypes:{...p({tagName:r})},args:{}},o={};var i,a,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const A=["Demo"],H=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:A,default:x},Symbol.toStringTag,{value:"Module"}));export{H as B,o as D};
