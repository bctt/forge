import{j as e,M as s,T as r,C as a}from"./index-OukP47iL.js";import{useMDXComponents as i}from"./index-Ck7gG3J8.js";import{C as l}from"./CustomArgTypes-D-ao3rJS.js";import{A as p,D as c}from"./Accordion.stories-D8GAJj2e.js";import"./iframe-BPbU5xgl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./utils-wd6cBJ9K.js";import"./lit-element-CYrSCkDY.js";import"./lit-html-CuBe1DX_.js";import"./decorators-CS5VvIVh.js";import"./feature-detection-CY6TVbRZ.js";import"./accordion-BWIJbHcz.js";import"./constants-D2tqnpVB.js";import"./base-adapter-BD6-QDkX.js";import"./expansion-panel-CfpWKCH7.js";import"./index-RsKXMDm2.js";import"./icon-D5yjdXv8.js";import"./index-CiLSBptl.js";import"./utils-CRxrUqQD.js";import"./divider-Cb0KSfcl.js";function t(o){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(r,{}),`
`,e.jsxs(n.p,{children:["This component does not provide any visual appearance. It is just an orchestrator of child ",e.jsx(n.code,{children:"<forge-expansion-panel>"})," components."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-accordion>"}),` will ensure that only one child expansion panel, at most, is open at any given time. If you need to allow for multiple panels to be opened
simultaneously, you should opt for using just multiple `,e.jsx(n.code,{children:"<forge-expansion-panel>"})," components together without an accordion wrapper."]}),`
`,e.jsx(n.p,{children:"See the expansion panel component for information on how to use that component separately."}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Verify that you can tab to each panel in the accordion.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure that there is a visual cue that the panel is selected."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Verify that pressing the space bar or enter key while focusing on a panel will toggle it open and closed."}),`
`,e.jsx(n.li,{children:"If any open panel contains a link, button, or other navigation element, ensure that those tab stops are included while tabbing through the accordion."}),`
`,e.jsx(n.li,{children:"If any closed panel contains a link, button, or other navigation element, ensure those tab stops are skipped while tabbing through the accordion."}),`
`]})]})}function V(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{V as default};
