import{j as t,M as n,T as s,C as p}from"./index-5RP3f3z-.js";import{useMDXComponents as o}from"./index-pGllwBrH.js";import{C as a}from"./CustomArgTypes-ITtaNNPL.js";import{S as m,D as c}from"./search.stories-jxGWJO1C.js";import"./iframe-DyxU3mHA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-DzhRrs8R.js";import"./lit-element-JplMEnZc.js";import"./lit-html-paDGiEfB.js";import"./feature-detection-ONR9WHvu.js";import"./app-bar-profile-button-Bso0FNWk.js";import"./constants-BjnHqKgS.js";import"./base-adapter-CQdYccXX.js";import"./focus-indicator-I_IrwQSK.js";import"./index-BgGCUUFB.js";import"./state-layer-CxIpCmDW.js";import"./index-CbZAylpk.js";import"./icon-Ctzrqx63.js";import"./icon-button-D5fTQ0k5.js";import"./base-button-adapter-BUcmIwIL.js";import"./with-label-aware-DAaZnhel.js";import"./with-default-aria-BcIvJ7-x.js";import"./a11y-utils-BOPvdiVn.js";import"./tooltip-CTpoJPTH.js";import"./overlay-D8lPnEIG.js";import"./with-longpress-listener-S3ft74cg.js";import"./dismissible-stack-Dx1UJAF9.js";import"./badge-CzgFSHGZ.js";import"./menu-C6Z4JBtb.js";import"./list-DjbLwyYT.js";import"./list-dropdown-aware-core-BdubphoD.js";import"./list-dropdown-D4ar2DiO.js";import"./event-utils-C1SDeUaq.js";import"./linear-progress-DPUjJFYN.js";import"./popover-C6QnYMTq.js";import"./skeleton-Dfdgg-pt.js";import"./a11y-BxM9_46k.js";import"./base-component-delegate-D9tVS5jC.js";import"./avatar-Du1LPt_G.js";import"./button-ClwhnaJK.js";import"./toolbar-Lhya2ayG.js";function r(i){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:m}),`
`,t.jsx(s,{}),`
`,t.jsxs(e.p,{children:["The app-bar search component is essentially just a strictly-styled ",t.jsx(e.code,{children:"<input>"})," element that fits in with the app-bar ecosystem. It provides some additional functionality through its public API, but at the very least it gives a common component to use for a familiar search experience for users."]}),`
`,t.jsx(e.h2,{id:"default",children:"Default"}),`
`,t.jsx(p,{of:c}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(a,{}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Ensure that you provide a placeholder attribute for the ",t.jsx(e.code,{children:"<input>"})," element to help give users an idea of what to enter."]}),`
`,t.jsxs(e.li,{children:["Ensure that you add an aria-label or aria-labelledby attribute to the ",t.jsx(e.code,{children:"<input>"}),"."]}),`
`,t.jsx(e.li,{children:"If using a custom theme, make sure proper color contrast ratios are met and adjust using CSS custom properties if not."}),`
`]}),`
`,t.jsx(e.h2,{id:"types",children:"Types"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-typescript",children:`interface IAppBarSearchEventData {
  value: string;
  combined: boolean;
  context: string;
}
`})})]})}function et(i={}){const{wrapper:e}={...o(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(r,{...i})}):r(i)}export{et as default};
