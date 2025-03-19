import{j as e,M as a,T as r,C as o}from"./index-CTnxpyo3.js";import{useMDXComponents as s}from"./index-Cv-oL1ZD.js";import{C as l}from"./CustomArgTypes-BrHeZrPo.js";import{C as c}from"./CssOnlyInformation-BifT90kC.js";import{E as d,D as p,W as h,a as x,C as u}from"./ExpansionPanel.stories-CyLOoUzC.js";import"./iframe-DwCZ3qBJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-DlykE8tv.js";import"./lit-element-JplMEnZc.js";import"./lit-html-paDGiEfB.js";import"./index-Cf3axooF.js";import"./v4-CQkTLCs1.js";import"./style-map-C9nPWcxA.js";import"./directive-CF8sV3Lr.js";import"./ref-DJjbfkOF.js";import"./directive-helpers-DcB0QpIl.js";import"./class-map-D55lQyt8.js";import"./feature-detection-DRCh51Sa.js";import"./expansion-panel-oNIhRwS4.js";import"./constants-9n5_0r7k.js";import"./base-adapter-B6TJxM93.js";import"./open-icon-jld-uG32.js";import"./index-CbZAylpk.js";import"./icon-B5R9pr_c.js";import"./index-BgGCUUFB.js";import"./utils-CYJ0zQHl.js";import"./card-C10NOeAn.js";function i(t){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(r,{}),`
`,e.jsx(n.p,{children:`Expansion panels provide progressive disclosure of content. Use them to group and hide content that is not immediately relevant to the user.
They are useful for organizing information and reducing clutter on the screen.`}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"with-card",children:"With Card"}),`
`,e.jsx(n.p,{children:"It's common to compose an expansion panel with a card component to provide a more visually appealing layout."}),`
`,e.jsx(o,{of:h}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," You can provide a ",e.jsx(n.code,{children:"<forge-open-icon>"})," to show the open state of the expansion panel, and the icon will be rotated when the panel is opened/closed."]}),`
`]}),`
`,e.jsx(n.h2,{id:"trigger-button",children:"Trigger Button"}),`
`,e.jsxs(n.p,{children:["A button in the header slot of the expansion panel will automatically control toggling the ",e.jsx(n.code,{children:"open"}),` state of the panel.
Setting the `,e.jsx(n.code,{children:"trigger"})," attribute/property of the expansion panel to the button's ",e.jsx(n.code,{children:"id"})," will also manage its ",e.jsx(n.code,{children:"aria-expanded"})," and ",e.jsx(n.code,{children:"aria-controls"}),` attributes.
You can also set `,e.jsx(n.code,{children:"trigger"})," to the ",e.jsx(n.code,{children:"id"})," of a button elsewhere in the document to add the toggling and ARIA attribute functionality to it."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," Make sure the intended trigger element is present in the DOM at the same time the expansion panel initializes or has ",e.jsx(n.code,{children:"trigger"})," set. Alternatively, use the ",e.jsx(n.code,{children:"triggerElement"})," property to directly pass in the trigger element reference, which is less prone to errors related to incremental rendering."]}),`
`]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the user is able to click the expansion panel to toggle its state, ensure that a ",e.jsx(n.code,{children:"<button>"})," element is present and clearly labeled to serve as an accessible point of interaction.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Do not place complex or interactive elements within a button. If your design requires such content in the expansion panel header, place a button in the header alongside that content instead of enclosing it."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Ensure that the user can focus on the element which activates and deactivates the expansion panel."}),`
`,e.jsxs(n.li,{children:["Ensure ",e.jsx(n.code,{children:"aria-expanded"})," is set on the button to reflect the state of the component. Update it when the panel opens or closes."]}),`
`,e.jsxs(n.li,{children:["Ensure ",e.jsx(n.code,{children:"aria-controls"})," is set on the button to reference the id of the expandable content."]}),`
`,e.jsxs(n.li,{children:["Enclose the expandable content in an element with ",e.jsx(n.code,{children:'role="group"'})," or another non-generic role."]}),`
`,e.jsx(n.li,{children:"Ensure that the expansion panel can be activated by keyboard."}),`
`,e.jsx(n.li,{children:"Here is an example of a properly marked up expansion panel:"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," A button associated with the expansion panel via ",e.jsx(n.code,{children:"trigger"})," will automatically have its ",e.jsx(n.code,{children:"aria-expanded"})," and ",e.jsx(n.code,{children:"aria-controls"})," values managed."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-expansion-panel trigger="button-id">
  <button slot="header" id="button-id">Toggle panel</button>
  <div id="expandable-content" role="group">Expandable content</div>
</forge-expansion-panel>
`})}),`
`,e.jsx(n.p,{children:"The button can also be placed elsewhere in the document, outside the expansion panel:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button id="button-id">Toggle panel</button>

<forge-expansion-panel trigger="button-id">
  <div role="group">Expandable content</div>
</forge-expansion-panel>
`})}),`
`,e.jsx(n.h2,{id:"css-only",children:"CSS-Only"}),`
`,e.jsx(n.p,{children:"The expansion-panel component is also available as a CSS-only component, but it does require a small amount of JavaScript to toggle the expanded state."}),`
`,e.jsx(o,{of:u}),`
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
`,e.jsx(c,{})]})}function G(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{G as default};
