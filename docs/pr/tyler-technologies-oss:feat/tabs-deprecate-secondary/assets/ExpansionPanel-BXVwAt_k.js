import{ae as e,af as s,ag as r,ah as o}from"./index-BlHPO2GA.js";import{u as i}from"./index-C82fMyDs.js";import{C as l}from"./CustomArgTypes-CFUMVjC1.js";import{C as p}from"./CssOnlyInformation-DvRcKpwe.js";import{E as c,D as d,W as h,C as x}from"./ExpansionPanel.stories-D036vMcV.js";import"./iframe-DsRP_sey.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-CUtp3IhO.js";import"./lit-element-CgJqSpuc.js";import"./lit-html-paDGiEfB.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./style-map-C9nPWcxA.js";import"./directive-CF8sV3Lr.js";import"./ref-DJjbfkOF.js";import"./directive-helpers-DcB0QpIl.js";import"./class-map-D55lQyt8.js";import"./constants-CFf81ck9.js";import"./expansion-panel-CiYP6XPd.js";import"./base-adapter-Dh44vCkH.js";import"./index-ByifSpfC.js";import"./icon-FszQmWVN.js";import"./index-BmocOEUj.js";import"./card-CgGa1_Bt.js";function a(t){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(r,{}),`
`,e.jsx(n.p,{children:`Expansion panels provide progressive disclosure of content. Use them to group and hide content that is not immediately relevant to the user.
They are useful for organizing information and reducing clutter on the screen.`}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"with-card",children:"With Card"}),`
`,e.jsx(n.p,{children:"It's common to compose an expansion panel with a card component to provide a more visually appealing layout."}),`
`,e.jsx(o,{of:h}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," You can provide a ",e.jsx(n.code,{children:"<forge-open-icon>"})," to show the open state of the expansion panel, and the icon will be rotated when the panel is opened/closed."]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the user is able to click the expansion panel to toggle its state, ensure that a ",e.jsx(n.code,{children:"<button>"})," element is present and clearly labeled to serve as an accessible point of interaction.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"aria-expanded"})," attribute on the button to reflect the state of the component. Update it when the panel opens or closes."]}),`
`,e.jsxs(n.li,{children:["Enclose the expandable content in an element with ",e.jsx(n.code,{children:'role="group"'})," or another non-generic role."]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"aria-controls"})," on the button to reference the id of the expandable content."]}),`
`,e.jsx(n.li,{children:"Do not place complex or interactive elements within a button. If your design requires such content in the expansion panel header, place a button in the header alongside that content instead of enclosing it."}),`
`,e.jsx(n.li,{children:"Ensure that the user can focus on the element which activates and deactivates the expansion panel."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Ensure that the expansion panel can be activated by keyboard.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Here is an example of a properly marked up expansion panel:"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- aria-expanded will be toggled via script to reflect the state of the component -->
<forge-expansion-panel>
  <button slot="header" aria-controls="expandable-content" aria-expanded="false">Toggle panel</button>
  <div id="expandable-content" role="group">Expandable content</div>
</forge-expansion-panel>
`})}),`
`,e.jsx(n.p,{children:"The button can also be placed elsewhere in the document, outside the expansion panel, with the same attributes set:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button slot="header" aria-controls="expandable-content" aria-expanded="false">Toggle panel</button>

<forge-expansion-panel>
  <div id="expandable-content" role="group">Expandable content</div>
</forge-expansion-panel>
`})}),`
`,e.jsx(n.h2,{id:"css-only",children:"CSS-Only"}),`
`,e.jsx(n.p,{children:"The expansion-panel component is also available as a CSS-only component, but it does require a small amount of JavaScript to toggle the expanded state."}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.p,{children:"Below is an example JavaScript snippet that toggles the expanded state of the CSS-only expansion panel:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Get the button element
const button = expansionPanel.querySelector('#my-button');

// Get the expansion panel element
const expansionPanel = document.querySelector('#my-button + .forge-expansion-panel');

// Toggle the expanded state when the button is clicked
button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !expanded);
  expansionPanel.classList.toggle('forge-expansion-panel--open', !expanded);
});
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," This is a simple example. You may need to adjust the JavaScript to fit your specific use case, or to fit framework-specific usage."]}),`
`]}),`
`,e.jsx(p,{})]})}function Y(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{Y as default};
