import{j as e,M as s}from"./index-CClmGlc0.js";import{useMDXComponents as r}from"./index-CwPAg1S0.js";import"./iframe-Bm1ZZVGW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function t(d){const n={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Design Tokens/Layering"}),`
`,e.jsx(n.h1,{id:"layering-tokens",children:"Layering Tokens"}),`
`,e.jsx(n.p,{children:"Layering tokens define the order in which elements are stacked on top of each other."}),`
`,e.jsxs(n.p,{children:["This is implemented using the ",e.jsx(n.code,{children:"z-index"})," CSS property."]}),`
`,e.jsx(n.p,{children:`It's important to note that these values are not fixed and can be adjusted as needed. If you need to integrate Forge with a
another library that uses different z-index values, you can override these tokens to match the other library's values, and
Forge will automatically adjust to use the new values across all components.`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token"}),e.jsx(n.th,{children:"Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--forge-z-index-surface"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--forge-z-index-header"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"4"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--forge-z-index-backdrop"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"7"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--forge-z-index-dialog"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"8"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--forge-z-index-notification"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"9"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--forge-z-index-popup"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"10"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--forge-z-index-tooltip"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"11"})})]})]})]})]})}function a(d={}){const{wrapper:n}={...r(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(t,{...d})}):t(d)}export{a as default};
