import{j as R,x as P}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as l}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{v as k}from"./index-CWt9cj6R.js";import{I as z}from"./icon-CiIDkczu.js";import{c as M,g as Y}from"./utils-D8HxbzAZ.js";import"./constants-BMnwgo1j.js";import"./icon-button-HggojrXv.js";import"./focus-indicator-WHVXAnYX.js";import"./index-Dh0vMUMR.js";import"./state-layer-CoXZFfb6.js";import"./button-CvtGTUrx.js";import{D as o}from"./dialog-DQZDuNnn.js";import"./backdrop-Cvi97NEF.js";import"./scaffold-BBmmvCn_.js";import"./toolbar-ByH3IRVo.js";import{s as j}from"./decorators-CJfHUot4.js";const F=l("forge-dialog-close"),G=l("forge-dialog-before-close"),q=l("forge-dialog-move-start"),w=l("forge-dialog-move"),B=l("forge-dialog-move-end"),$=I=>{z.define(k);const d=document.createElement("div"),c=document.createElement("forge-button");c.variant="raised",c.innerText="Open dialog",c.addEventListener("click",()=>e.open=!0),d.appendChild(c);const e=M("forge-dialog",I);e.setAttribute("aria-labelledby","dialog-title"),e.setAttribute("aria-describedby","dialog-message"),e.addEventListener("forge-dialog-close",N=>{F(N),e.open=!1}),e.addEventListener("forge-dialog-before-close",G),e.addEventListener("forge-dialog-move-start",q),e.addEventListener("forge-dialog-move",w),e.addEventListener("forge-dialog-move-end",B),d.appendChild(e);const x=P`
    <forge-scaffold>
      <forge-toolbar slot="header" no-divider>
        <h1 class="forge-typography--heading4" id="dialog-title" slot="start">Title text</h1>
        <forge-icon-button slot="end" aria-label="Close dialog" @click=${()=>e.open=!1}>
          <forge-icon name="close"></forge-icon>
        </forge-icon-button>
      </forge-toolbar>
      <p slot="body" id="dialog-message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed pariatur error repellendus eos! Quas, optio esse ad illum quis blanditiis rerum quia.
        Corrupti, ad hic velit praesentium voluptatum dolores?
      </p>
      <forge-toolbar slot="footer" no-divider>
        <forge-button slot="end" variant="raised" @click=${()=>e.open=!1}>Close</forge-button>
      </forge-toolbar>
    </forge-scaffold>
  `;return R(x,e),d},Q="forge-dialog:not([fullscreen]) forge-scaffold{--forge-scaffold-width: 500px}forge-dialog forge-scaffold{height:auto}forge-dialog forge-scaffold h1{margin:0}forge-dialog forge-scaffold>[slot=body]{padding:var(--forge-spacing-medium)}",Z="forge-dialog",H={title:"Components/Dialog",render:$,component:"forge-dialog",decorators:[j(Q)],argTypes:{...Y({tagName:Z,exclude:["trigger","triggerElement"],controls:{mode:{control:"select",options:["modal","inline-modal","nonmodal"]},type:{control:"select",options:["dialog","alertdialog"]},animationType:{control:"select",options:["none","zoom","fade","slide"]},preset:{control:"select",options:["dialog","left-sheet","right-sheet","top-sheet","bottom-sheet"]},sizeStrategy:{control:"select",options:["content","container-inline","container-block"]},positionStrategy:{control:"select",options:["viewport","container"]},placement:{control:"select",options:["custom","center","top","right","bottom","left","top-right","top-left","bottom-right","bottom-left"]}}})},args:{open:!1,persistent:!1,fullscreen:!1,moveable:!1,mode:o.defaults.MODE,type:o.defaults.TYPE,animationType:o.defaults.ANIMATION_TYPE,preset:o.defaults.PRESET,sizeStrategy:o.defaults.SIZE_STRATEGY,positionStrategy:o.defaults.POSITION_STRATEGY,placement:o.defaults.PLACEMENT}},t={},r={args:{preset:"right-sheet"}},s={args:{preset:"left-sheet"}},a={args:{preset:"top-sheet"}},n={args:{preset:"bottom-sheet"}},i={args:{fullscreen:!0}};var g,p,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,u,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    preset: 'right-sheet'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,v,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    preset: 'left-sheet'
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var E,y,T;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    preset: 'top-sheet'
  }
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var A,C,L;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    preset: 'bottom-sheet'
  }
}`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var O,_,D;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    fullscreen: true
  }
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const J=["Demo","RightSheet","LeftSheet","TopSheet","BottomSheet","Fullscreen"],pe=Object.freeze(Object.defineProperty({__proto__:null,BottomSheet:n,Demo:t,Fullscreen:i,LeftSheet:s,RightSheet:r,TopSheet:a,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{pe as D,t as a};
