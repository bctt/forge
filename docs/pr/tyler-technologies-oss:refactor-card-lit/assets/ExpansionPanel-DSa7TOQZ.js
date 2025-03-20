import{j as e,M as s,T as r,C as o}from"./index-_rEa7b7e.js";import{useMDXComponents as a}from"./index-B-BfIMxA.js";import{C as l}from"./CustomArgTypes-B8DAnPEN.js";import{C as c}from"./CssOnlyInformation-BrkvDjqX.js";import{E as d,D as p,W as h,a as x,C as u}from"./ExpansionPanel.stories-D-vMqkY1.js";import"./iframe-Czd1Z2DY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./utils-BeTmMhVX.js";import"./lit-element-B3QVTycr.js";import"./lit-html-CuBe1DX_.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./style-map-CeP1Mntv.js";import"./directive-CJw_OlP2.js";import"./ref-BHdy32Cl.js";import"./directive-helpers-CJ-qmK0k.js";import"./class-map-CuXcqkpw.js";import"./feature-detection-C61kIZu7.js";import"./expansion-panel-ZfR_eNfd.js";import"./constants-DHnR0122.js";import"./base-adapter-B_B1W7NX.js";import"./index-RsKXMDm2.js";import"./icon-DNSPAaK0.js";import"./index-CiLSBptl.js";import"./utils-DXGAA5XK.js";import"./card-DBphJo-Y.js";import"./property-2VT-dgmE.js";function i(t){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
`,e.jsxs(n.h2,{id:"using-the-forge-ignore-attribute",children:["Using the ",e.jsx(n.code,{children:"forge-ignore"})," attribute"]}),`
`,e.jsxs(n.p,{children:[`It is common to place multiple interactive elements within an expansion panel "header" slot. However, you may want to prevent the expansion panel from expanding/collapsing
when a specific element is clicked. To do this you can either listen for the click event yourself on the specific elements you care about and call `,e.jsx(n.code,{children:"stopPropagation()"}),`
on the event, or you can use the `,e.jsx(n.code,{children:"forge-ignore"}),` attribute for convenience. This attribute is used to prevent the expansion panel from expanding/collapsing when the
element (or any children of the element) is clicked.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-expansion-panel>
  <div slot="header" style="display: flex; justify-content: space-between;">
    <button type="button">Toggle Panel</button>

    <!--
      Using the forge-ignore attribute allows this element to be placed within the
      expansion panel header without causing the panel to expand/collapse when clicked.
    -->
    <forge-icon-button forge-ignore>
      <forge-icon name="forge_logo"></forge-icon>
    </forge-icon-button>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</forge-expansion-panel>
`})}),`
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
`,e.jsx(c,{})]})}function z(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{z as default};
