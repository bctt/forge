import{x as i}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{b as a}from"./index-ByifSpfC.js";import{s}from"./decorators-EVhofM2Q.js";import{I as n}from"./icon-DHpZ4R73.js";import"./constants-DjE6emXm.js";import"./card-AhK8i1VF.js";import"./button-CoZ69e4-.js";import"./focus-indicator-BpCDYqsq.js";import"./index-Dh0vMUMR.js";import"./state-layer-DkOkOFSZ.js";import"./label-value-VHPgDnZj.js";const d="forge-card{--forge-card-padding: 0;max-width:768px}.grid-container{display:grid;grid-template-columns:repeat(12,1fr);gap:var(--forge-spacing-medium);align-items:center;border-left:4px solid var(--forge-theme-primary);padding:8px}.illustration-container{display:flex}.illustration-container img{max-width:64px;grid-column:1/2}.date-request{grid-column:2/9}.view-all{grid-column:9/13;justify-self:end}";n.define(a);const l={title:"Recipes/Card/Request",decorators:[s(d)],render:()=>i`
    <forge-card>
      <div class="grid-container">
        <div class="illustration-container">
          <img src="https://cdn.forge.tylertech.com/v1/images/spot/land-zoning-spot.png" alt="Land Zoning" />
        </div>
        <div class="date-request">
          <forge-label-value>
            <div slot="label">07/18/2019</div>
            <div slot="value">2 Pending requests to approve</div>
          </forge-label-value>
        </div>
        <div class="view-all">
          <forge-button>
            <a href="javascript: void(0);">
              View all
              <forge-icon name="open_in_new"></forge-icon>
            </a>
          </forge-button>
        </div>
      </div>
    </forge-card>
  `,parameters:{controls:{disable:!0},actions:{disable:!0}}},e={};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const c=["Demo"],q=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{e as D,q as R};
