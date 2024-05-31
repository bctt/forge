import{j as t}from"./jsx-runtime-IuVmv4yo.js";import{u as o}from"./index-OEF1KRNU.js";import{M as n,T as s,C as p}from"./index-D25BhKj7.js";import{C as m}from"./CustomArgTypes-C-XmJPQG.js";import{S as a,D as c}from"./search.stories-BrZMSY0u.js";import"./iframe-D73s2_vs.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./constants-BRRACkdW.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./app-bar-profile-button-BT2j2tu9.js";import"./utils-_KxxXSob.js";import"./base-adapter-CgsLSdpx.js";import"./state-layer-BIkysl34.js";import"./focus-indicator-BOXpNU3y.js";import"./index-Dh0vMUMR.js";import"./index-Co64lOVc.js";import"./icon-CGITV3Tv.js";import"./icon-button-BTrLobRs.js";import"./base-button-adapter-W1aGMgMa.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria-BhTYz4bg.js";import"./event-utils-CtHj37Lc.js";import"./tooltip-DKDNb63Y.js";import"./overlay-BnvMA_ov.js";import"./with-longpress-listener-8IlPEDv-.js";import"./dismissible-stack-CQalC8SW.js";import"./badge-3gjAE-Ko.js";import"./menu-C40LUDKr.js";import"./list-NdK9R_Xe.js";import"./list-dropdown-aware-foundation-BaPZd7x0.js";import"./list-dropdown-_Whl88mL.js";import"./linear-progress-Bz-xHcLZ.js";import"./popover-T5JuakTK.js";import"./skeleton-CXw2-0vf.js";import"./event-utils-C1SDeUaq.js";import"./a11y-BxM9_46k.js";import"./profile-card-BVu7Zwr4.js";import"./base-component-delegate-BeSfeuv4.js";import"./button-BliJ43uT.js";import"./avatar-BWEjFJTf.js";import"./toolbar-BD1_F9Be.js";function e(r){const i={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:a}),`
`,t.jsx(s,{}),`
`,t.jsxs(i.p,{children:["The app-bar search component is essentially just a strictly-styled ",t.jsx(i.code,{children:"<input>"})," element that fits in with the app-bar ecosystem. It provides some additional functionality through its public API, but at the very least it gives a common component to use for a familiar search experience for users."]}),`
`,t.jsx(i.h2,{id:"default",children:"Default"}),`
`,t.jsx(p,{of:c}),`
`,t.jsx(i.h2,{id:"api",children:"API"}),`
`,t.jsx(m,{}),`
`,t.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(i.ul,{children:[`
`,t.jsxs(i.li,{children:["Ensure that you provide a placeholder attribute for the ",t.jsx(i.code,{children:"<input>"})," element to help give users an idea of what to enter."]}),`
`,t.jsxs(i.li,{children:["Ensure that you add an aria-label or aria-labelledby attribute to the ",t.jsx(i.code,{children:"<input>"}),"."]}),`
`,t.jsx(i.li,{children:"If using a custom theme, make sure proper color contrast ratios are met and adjust using CSS custom properties if not."}),`
`]}),`
`,t.jsx(i.h2,{id:"types",children:"Types"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-typescript",children:`interface IAppBarSearchEventData {
  value: string;
  combined: boolean;
  context: string;
}
`})})]})}function ot(r={}){const{wrapper:i}={...o(),...r.components};return i?t.jsx(i,{...r,children:t.jsx(e,{...r})}):e(r)}export{ot as default};
