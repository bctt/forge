import"./lit-element-Dk2-kgKT.js";import{k as r,D as s}from"./lit-html-DZH-Jm0H.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g}from"./utils-D1kchwVb.js";import{f as u,g as w,h as b,i as h}from"./index-ByifSpfC.js";import{I as v}from"./icon-DHpZ4R73.js";import{K as y,i as D}from"./ref-9TtedaQt.js";import"./constants-DjE6emXm.js";import"./modal-drawer-B7ahOApf.js";import"./backdrop-BKmy5m9d.js";import"./base-drawer-CHX_xDf6.js";import"./list-C2bUECg8.js";import"./toolbar-CtEd8mqT.js";import"./index-Dh0vMUMR.js";import"./scaffold-R2qvsZCm.js";import"./card-DdiAyW6J.js";import"./app-bar-profile-button-cFxi-9cE.js";import"./state-layer-DTKAXCUq.js";import"./focus-indicator-_fDu4ZqT.js";import"./badge-CO5a_--I.js";import"./menu-B7aO8sYr.js";import"./linear-progress-CcMix19v.js";import"./popover-tgjxHp7t.js";import"./overlay-DWm8nYOy.js";import"./skeleton-Cs99PVGD.js";import"./avatar-Cja6atCs.js";import"./icon-button-XdSjYqUR.js";const n="forge-modal-drawer",$=t("forge-modal-drawer-close"),I=t("forge-drawer-after-open"),j=t("forge-drawer-after-close");v.define([u,w,b,h]);const x={title:"Components/Drawer/Modal Drawer",render:o=>{const a=D();function d(){const i=a.value;i.open=!i.open}const c=o.showHeader?r`
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
          @forge-drawer-after-open=${I}
          @forge-drawer-after-close=${j}>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </forge-card>
        </main>
      </forge-scaffold>
    `},component:n,argTypes:{...g({tagName:n,controls:{direction:{control:"select",options:["left","right"]}}}),showHeader:{control:{type:"boolean"}},showFooter:{control:{type:"boolean"}}},args:{showHeader:!1,showFooter:!1,open:!0,direction:"left"}},e={};var f,l,m;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["Demo"],oo=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{e as D,oo as M};
