import"./lit-element-B3QVTycr.js";import{x as r,E as s}from"./lit-html-CuBe1DX_.js";import{a as g}from"./index-B-lxVbXh.js";import{g as w,s as h}from"./utils-DwiQLFey.js";import{j as y,k as I,l as S,m as D}from"./index-RsKXMDm2.js";import{I as $}from"./icon-DNSPAaK0.js";import{n as x,e as j}from"./ref-BHdy32Cl.js";import"./feature-detection-C61kIZu7.js";import"./drawer-Cli5cLb8.js";import"./list-BEAQdsdb.js";import"./toolbar-CM1YCrRV.js";import"./index-CiLSBptl.js";import"./scaffold-CWDbFKLY.js";import"./card-DnHcCLR_.js";import"./app-bar-profile-button-Db9vmw9L.js";import"./state-layer-Y8UVngaT.js";import"./focus-indicator-DydcbRnf.js";import"./menu-BIp0gSDi.js";import"./linear-progress-Brg7kVg_.js";import"./popover-DlgaZ2F2.js";import"./overlay-C2J-mFMD.js";import"./skeleton-Cfb12itF.js";import"./avatar-CawfXDqL.js";import"./icon-button-DJSm0po0.js";const n="forge-drawer",L=g("forge-drawer-after-open"),O=g("forge-drawer-after-close");$.define([y,I,S,D]);const C={title:"Components/Drawer",render:e=>{const a=j();function u(){const i=a.value;i.open=!i.open}const b=e.showHeader?r`
          <forge-toolbar slot="header">
            <div>Header</div>
          </forge-toolbar>
        `:s,v=e.showFooter?r`
          <forge-toolbar inverted slot="footer">
            <div>Footer</div>
          </forge-toolbar>
        `:s;return r`
      <forge-scaffold style="--forge-scaffold-height: 300px;">
        <forge-app-bar slot="header" title-text="Drawer Demo">
          <forge-app-bar-menu-button slot="start" @click=${u}></forge-app-bar-menu-button>
        </forge-app-bar>
        <forge-drawer
          ${x(a)}
          slot=${`body-${e.direction}`}
          .open=${e.open}
          .direction=${e.direction}
          @forge-drawer-after-open=${L}
          @forge-drawer-after-close=${O}>
          ${b}
          <aside>
            <forge-list navlist>
              <forge-list-item selected>
                <forge-icon slot="start" name="inbox"></forge-icon>
                <a href="javascript: void(0)">Inbox</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="send"></forge-icon>
                <a href="javascript: void(0)">Outgoing</a>
              </forge-list-item>
              <forge-list-item indented>
                <a href="javascript: void(0)">Pending</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="drafts"></forge-icon>
                <a href="javascript: void(0)">Drafts</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="send"></forge-icon>
                <a href="javascript: void(0)">Sent</a>
              </forge-list-item>
            </forge-list>
          </aside>
          ${v}
        </forge-drawer>

        <main slot="body" style="padding: 16px; background-color: var(--forge-theme-surface-dim);">
          <forge-card>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </forge-card>
        </main>
      </forge-scaffold>
    `},component:n,argTypes:{...w({tagName:n,controls:{direction:{control:"select",options:["left","right"]}}}),showHeader:{control:{type:"boolean"}},showFooter:{control:{type:"boolean"}}},args:{showHeader:!1,showFooter:!1,open:!0,direction:"left"}},o={},t={...h,render:()=>r`
      <aside class="forge-drawer">
        <ul class="forge-list forge-list--navlist">
          <li class="forge-list-item">
            <button>List Item</button>
          </li>
          <li class="forge-list-item">
            <button>List Item</button>
          </li>
          <li class="forge-list-item">
            <button>List Item</button>
          </li>
        </ul>
      </aside>
    `};var l,f,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(f=o.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    return html\`
      <aside class="forge-drawer">
        <ul class="forge-list forge-list--navlist">
          <li class="forge-list-item">
            <button>List Item</button>
          </li>
          <li class="forge-list-item">
            <button>List Item</button>
          </li>
          <li class="forge-list-item">
            <button>List Item</button>
          </li>
        </ul>
      </aside>
    \`;
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const _=["Demo","CSSOnly"],oe=Object.freeze(Object.defineProperty({__proto__:null,CSSOnly:t,Demo:o,__namedExportsOrder:_,default:C},Symbol.toStringTag,{value:"Module"}));export{t as C,oe as D,o as a};
