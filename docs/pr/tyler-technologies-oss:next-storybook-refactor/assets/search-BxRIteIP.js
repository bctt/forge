import{j as t}from"./jsx-runtime-BXY7fkHv.js";import{u as o}from"./index-B35H-hDJ.js";import{M as n,T as s,C as p}from"./index-BQXqdhD9.js";import{C as m}from"./CustomArgTypes-DVZyxngG.js";import{S as a,D as c}from"./search.stories-BIL3OU3U.js";import"./iframe-DY-Rh9OC.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./utils-d6LfNt4R.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./app-bar-profile-button-BsrQcGgA.js";import"./focus-indicator-By3BQe1w.js";import"./constants-C96o6uhb.js";import"./base-adapter-BIKyOSkq.js";import"./index-Dh0vMUMR.js";import"./state-layer-b0IlkqgO.js";import"./index-Dh2cEqRr.js";import"./icon-V4IE3JYq.js";import"./icon-button-FC5ZAhze.js";import"./base-button-adapter-CNVfabjy.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria-lryJjX2Z.js";import"./event-utils-DC3JW7a-.js";import"./tooltip-ujb0qApC.js";import"./overlay-BAE6BB-F.js";import"./with-longpress-listener-DSRt_cqb.js";import"./dismissible-stack-BU50KYzw.js";import"./badge-COHMqm-e.js";import"./menu-CnvzUvti.js";import"./list-Cu4wzbUs.js";import"./list-dropdown-aware-foundation-BBHpWchY.js";import"./list-dropdown-Cb3YW7mS.js";import"./linear-progress-DMJnsvFA.js";import"./popover-DtkI80cB.js";import"./skeleton-CpWNVcwu.js";import"./event-utils-C1SDeUaq.js";import"./a11y-BxM9_46k.js";import"./profile-card-CBaeRyBD.js";import"./base-component-delegate-BGincMMz.js";import"./button-BDRrw9v7.js";import"./avatar-BXavy-1u.js";import"./toolbar-B2mSDDPY.js";function e(r){const i={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:a}),`
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
