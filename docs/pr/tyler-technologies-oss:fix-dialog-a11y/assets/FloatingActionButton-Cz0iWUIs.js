import{j as n,M as s,T as a,C as i}from"./index-DGiLoEOe.js";import{useMDXComponents as r}from"./index-DIIthN_C.js";import{C as c}from"./CustomArgTypes-Czg8vgeE.js";import{C as l}from"./CssOnlyInformation-FdR9DlAy.js";import{F as d,D as h,E as p,W as m,C as x}from"./FloatingActionButton.stories-ButRYWZb.js";import"./iframe-BMC9xaFJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-CRqZ3wfJ.js";import"./lit-element-JplMEnZc.js";import"./lit-html-paDGiEfB.js";import"./style-map-C9nPWcxA.js";import"./directive-CF8sV3Lr.js";import"./class-map-D55lQyt8.js";import"./index-ByifSpfC.js";import"./icon-B5S0VGIT.js";import"./constants-BjnHqKgS.js";import"./feature-detection-ONR9WHvu.js";import"./base-adapter-CQdYccXX.js";import"./index-BmocOEUj.js";import"./floating-action-button-DIOVAjUZ.js";import"./base-button-adapter-OmzAW3c3.js";import"./with-label-aware-DAaZnhel.js";import"./with-default-aria-BcIvJ7-x.js";import"./a11y-utils-BOPvdiVn.js";import"./focus-indicator-R2otSvsR.js";import"./state-layer-B7GOb8iB.js";import"./button-vPgaRyW5.js";function o(t){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(a,{}),`
`,n.jsx(e.p,{children:"Use floating action buttons to represent the primary action on a screen within an application. It's recommended to only use one floating action button per screen."}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h2,{id:"positioning",children:"Positioning"}),`
`,n.jsx(e.p,{children:"Typically you will position floating action buttons manually on the screen, for example to apply a fixed position in the bottom-right you could use this CSS:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.bottom-right {
  position: fixed;
  bottom: var(--forge-spacing-medium);
  right: var(--forge-spacing-medium);
}
`})}),`
`,n.jsx(e.h2,{id:"extended",children:"Extended"}),`
`,n.jsx(e.p,{children:"Extended floating action buttons are larger and have a text label."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h2,{id:"with-anchor",children:"With Anchor"}),`
`,n.jsxs(e.p,{children:["You can nest an ",n.jsx(e.code,{children:"<a>"})," element inside the floating action button to create a link."]}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Buttons containing only icons should be given a meaningful label via ",n.jsx(e.code,{children:"aria-label"})," or ",n.jsx(e.code,{children:"aria-labelledby"}),"."]}),`
`,n.jsxs(e.li,{children:["Avoid using capitalized text because screen readers will read the text character-by-character. Instead use ",n.jsx(e.code,{children:"text-transform: uppercase"}),"."]}),`
`,n.jsx(e.li,{children:"Ensure the FAB can be reached by keyboard navigation."}),`
`,n.jsx(e.li,{children:"Ensure that there is a distinct visual cue when the FAB is in focus."}),`
`,n.jsx(e.li,{children:"Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements."}),`
`,n.jsx(e.li,{children:"Ensure that buttons placed above other content on the page have proper contrast ratio."}),`
`]}),`
`,n.jsx(e.h2,{id:"css-only",children:"CSS-Only"}),`
`,n.jsx(e.p,{children:"The floating action button component is also available as a CSS-only component without the need for JavaScript."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(l,{})]})}function R(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{R as default};
