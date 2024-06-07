import{x as g}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{c as q,g as v,s as b}from"./utils-B8pUMLAO.js";import"./constants-BMnwgo1j.js";import{I as y}from"./icon-CiIDkczu.js";import"./index-Dh0vMUMR.js";import{u as h}from"./index-BhA1MhXR.js";import"./card-Cja0MT5V.js";import"./icon-button-Dqh4j6OB.js";import"./focus-indicator-WHVXAnYX.js";import"./state-layer-CoXZFfb6.js";import"./button-CMTVobr-.js";import"./scaffold-BBmmvCn_.js";import"./toolbar-ByH3IRVo.js";import{s as x}from"./decorators-CJfHUot4.js";const S=".demo-card{max-width:400px}.demo-card .forge-card-header-container{display:flex;justify-content:space-between;align-items:center}.demo-card .forge-card-header-container h3{margin:0}.demo-card .forge-card-footer{display:flex;justify-content:flex-end;gap:var(--forge-spacing-medium)}.scaffold-card{width:400px;--forge-card-padding: 0;--forge-card-height: 300px}.card-content{padding:16px;margin:0}",r="forge-card",M={title:"Components/Card",render:i=>{const a=q(r,i);return a.textContent=i.text,a},component:r,decorators:[x(S)],parameters:{actions:{disable:!0}},argTypes:{...v({tagName:r})},args:{raised:!1,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas sed aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero necessitatibus enim sint nesciunt provident excepturi dolorum pariatur illum?"}},e={},t={...b,render:()=>(y.define([h]),g`
      <div class="demo-card">
        <forge-card>
          <div class="forge-card-header-container">
            <h3 class="forge-typography--heading4">This is the card title</h3>
            <forge-icon-button aria-label="View more actions">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </div>

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem doloremque dolorem ullam, nesciunt quia velit necessitatibus
              numquam quasi voluptates impedit earum dolores repudiandae facilis totam non quo labore itaque?
            </p>
          </div>

          <div class="forge-card-footer">
            <forge-button variant="outlined">Cancel</forge-button>
            <forge-button variant="raised">OK</forge-button>
          </div>
        </forge-card>
      </div>
    `)},o={...b,render:()=>g`
      <forge-card class="scaffold-card">
        <forge-scaffold>
          <forge-toolbar slot="header">
            <h1 slot="start">Lorem ipsum</h1>
          </forge-toolbar>

          <p slot="body" tabindex="0" class="card-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas sed aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero
            necessitatibus enim sint nesciunt provident excepturi dolorum pariatur illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quas sed aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero necessitatibus enim sint nesciunt provident excepturi dolorum pariatur
            illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas sed aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero
            necessitatibus enim sint nesciunt provident excepturi dolorum pariatur illum?
          </p>

          <forge-toolbar slot="footer" inverted>
            <forge-button type="outlined" slot="end"> Cancel </forge-button>
            <forge-button type="unelevated" slot="end" style="margin-left: 8px;"> Ok </forge-button>
          </forge-toolbar>
        </forge-scaffold>
      </forge-card>
    `};var s,n,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,u,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    IconRegistry.define([tylIconMoreVert]);
    return html\`
      <div class="demo-card">
        <forge-card>
          <div class="forge-card-header-container">
            <h3 class="forge-typography--heading4">This is the card title</h3>
            <forge-icon-button aria-label="View more actions">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </div>

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem doloremque dolorem ullam, nesciunt quia velit necessitatibus
              numquam quasi voluptates impedit earum dolores repudiandae facilis totam non quo labore itaque?
            </p>
          </div>

          <div class="forge-card-footer">
            <forge-button variant="outlined">Cancel</forge-button>
            <forge-button variant="raised">OK</forge-button>
          </div>
        </forge-card>
      </div>
    \`;
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    return html\`
      <forge-card class="scaffold-card">
        <forge-scaffold>
          <forge-toolbar slot="header">
            <h1 slot="start">Lorem ipsum</h1>
          </forge-toolbar>

          <p slot="body" tabindex="0" class="card-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas sed aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero
            necessitatibus enim sint nesciunt provident excepturi dolorum pariatur illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quas sed aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero necessitatibus enim sint nesciunt provident excepturi dolorum pariatur
            illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas sed aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero
            necessitatibus enim sint nesciunt provident excepturi dolorum pariatur illum?
          </p>

          <forge-toolbar slot="footer" inverted>
            <forge-button type="outlined" slot="end"> Cancel </forge-button>
            <forge-button type="unelevated" slot="end" style="margin-left: 8px;"> Ok </forge-button>
          </forge-toolbar>
        </forge-scaffold>
      </forge-card>
    \`;
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const L=["Demo","Styled","Scaffold"],z=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,Scaffold:o,Styled:t,__namedExportsOrder:L,default:M},Symbol.toStringTag,{value:"Module"}));export{z as C,e as D,t as S};
