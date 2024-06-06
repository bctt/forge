import{x as r,T as s}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{g}from"./utils-CpphmWLJ.js";import{b as u,c as w,d as b,e as v}from"./index-BhA1MhXR.js";import{I as h}from"./icon-Sxf3JEPH.js";import{n as y,e as D}from"./ref-BorTy8X1.js";import"./constants-BMnwgo1j.js";import"./modal-drawer-DJKJJ3SN.js";import"./backdrop-DbPknar2.js";import"./base-drawer-8EkXmosv.js";import"./list-ClnKymlF.js";import"./toolbar-Dw6aU1aA.js";import"./index-Dh0vMUMR.js";import"./scaffold-DzauPux9.js";import"./card-Ca9yr3r0.js";import"./app-bar-profile-button-DU9uNjkU.js";import"./state-layer-DfBT0h4a.js";import"./focus-indicator-WHVXAnYX.js";import"./badge-FNXzhU6r.js";import"./menu-iM5OLZY2.js";import"./linear-progress-CvNwXotY.js";import"./popover-BDS33NIt.js";import"./overlay-BEOKbUF9.js";import"./skeleton-CdDf7LSx.js";import"./profile-card-mluXQO7P.js";import"./avatar-P_6B1uVV.js";import"./icon-button-VlM_yzEM.js";const n="forge-modal-drawer",$=t("forge-modal-drawer-close"),x=t("forge-drawer-after-open"),I=t("forge-drawer-after-close");h.define([u,w,b,v]);const j={title:"Components/Drawer/Modal Drawer",render:o=>{const a=D();function d(){const i=a.value;i.open=!i.open}const c=o.showHeader?r`
      <forge-toolbar slot="header">
        <div>Header</div>
      </forge-toolbar>
    `:s,p=o.showFooter?r`
      <forge-toolbar inverted slot="footer">
        <div>Footer</div>
      </forge-toolbar>
    `:s;return r`
      <forge-scaffold style="--forge-scaffold-height: 300px;">
        <forge-app-bar slot="header" title-text="Modal Drawer Demo">
          <forge-app-bar-menu-button slot="start" @click=${d}></forge-app-bar-menu-button>
        </forge-app-bar>
        <forge-modal-drawer
          ${y(a)}
          slot=${o.direction}
          .open=${o.open}
          .direction=${o.direction}
          @forge-modal-drawer-close=${$}
          @forge-drawer-after-open=${x}
          @forge-drawer-after-close=${I}
          >
          ${c}
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
          ${p}
        </forge-modal-drawer>

        <main slot="body">
          <forge-card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </forge-card>
        </main>
      </forge-scaffold>
    `},component:n,argTypes:{...g({tagName:n,controls:{direction:{control:"select",options:["left","right"]}}}),showHeader:{control:{type:"boolean"}},showFooter:{control:{type:"boolean"}}},args:{showHeader:!1,showFooter:!1,open:!0,direction:"left"}},e={};var f,l,m;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["Demo"],eo=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:S,default:j},Symbol.toStringTag,{value:"Module"}));export{e as D,eo as M};
