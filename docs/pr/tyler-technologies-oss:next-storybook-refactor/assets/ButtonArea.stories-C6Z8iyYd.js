import{x as c,T as m}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{o as d}from"./style-map-D0ILlpbs.js";import{a as p}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as g,g as l}from"./constants-DbwyRGxi.js";import{I as f}from"./icon-PWjbsU_w.js";import"./index-Dh0vMUMR.js";import{f as u,l as v}from"./index-BAkJIYVL.js";import"./card-POs-7Bxy.js";import"./button-area-Dht5MZDV.js";import"./focus-indicator-CzUu7vMj.js";import"./state-layer-BEljX9QG.js";import"./icon-button-IV8Ys-9G.js";import"./tooltip-uy8owTjf.js";import"./overlay-BNZZCk6W.js";import{s as b}from"./decorators-B79PnA5z.js";const y="forge-card{--forge-card-padding: 0;width:320px;max-width:100%}.content{display:flex;align-items:center;gap:8px;padding:16px}.content>:first-child{margin-inline-end:auto}",r="forge-button-area";f.define([u,v]);const h=p("click"),x={title:"Components/Button Area",render:t=>{const e=g(t),s=e?d(e):m;return c`
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
    `},component:r,decorators:[b(y)],parameters:{actions:{disable:!0}},argTypes:{...l({tagName:r})},args:{}},o={};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const A=["Demo"],z=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:A,default:x},Symbol.toStringTag,{value:"Module"}));export{z as B,o as D};
