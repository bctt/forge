import{j as e,M as r,T as a,C as s}from"./index-eJZpSeX7.js";import{useMDXComponents as o}from"./index-LuR-ePbK.js";import{C as l}from"./CustomArgTypes-Bhk1gu9-.js";import{B as c,D as h}from"./ButtonArea.stories-DjGY02Kj.js";import"./iframe-BfJethNl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./utils-CXSdATrE.js";import"./lit-element-CYrSCkDY.js";import"./lit-html-CuBe1DX_.js";import"./style-map-CeP1Mntv.js";import"./directive-CJw_OlP2.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./feature-detection-CY6TVbRZ.js";import"./icon-D5yjdXv8.js";import"./constants-D2tqnpVB.js";import"./base-adapter-BD6-QDkX.js";import"./index-CiLSBptl.js";import"./index-RsKXMDm2.js";import"./card-yIs7HpNo.js";import"./base-lit-element-uNvk-qx4.js";import"./utils-CRxrUqQD.js";import"./button-area-D5z4Qv2i.js";import"./focus-indicator-NbLDNrYT.js";import"./state-layer-sxQMIn2c.js";import"./event-utils-C1SDeUaq.js";import"./icon-button-4fx-LScl.js";import"./base-button-adapter-cyf2Ayfh.js";import"./with-label-aware-DMDMR_5T.js";import"./with-default-aria-DEjfFCHL.js";import"./a11y-utils-DGb1vALN.js";import"./tooltip-BgQLBWUo.js";import"./overlay-8j8D8Fh1.js";import"./with-longpress-listener-DC7alanv.js";import"./dismissible-stack-BOibH_v8.js";import"./decorators-CS5VvIVh.js";function i(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:`The button area is a container element for an interactive "area" of the page. It's common to make larger sections of the page (such as individual cards)
interactive and respond to user pointer events. The button area provides an accessible way to do this.`}),`
`,e.jsxs(t.p,{children:[`It works by wrapping the content you want to visually appear interactive, and then provide a slotted button element that will be used to control the
interactive behavior while the state layer fills the parent container size. The `,e.jsx(t.code,{children:"<button>"}),` is visually hidden from the page, but it can still receive
focus which the button area will handle and make it appear as if the full content is interactive to the user. When clicking anywhere in the button area,
the component will dispatch a `,e.jsx(t.code,{children:"click"})," event to the slotted ",e.jsx(t.code,{children:"<button>"})," itself, allowing you to listen for the event and respond accordingly."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsxs(t.h2,{id:"using-the-forge-ignore-attribute",children:["Using the ",e.jsx(t.code,{children:"forge-ignore"})," attribute"]}),`
`,e.jsxs(t.p,{children:["It is common to place multiple interactive elements within a ",e.jsx(t.code,{children:"<forge-button-area>"}),`. In these cases you will likely want to prevent the button area from
responding when clicking those elements (or any elements within). To do this you can either listen for the click event yourself on the specific elements you care about
and call `,e.jsx(t.code,{children:"stopPropagation()"})," on the event, or you can use the ",e.jsx(t.code,{children:"forge-ignore"})," attribute for convenience."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-button-area id="button-area">
  <button slot="button" aria-labelledby="button-area-heading"></button>
  <div style="display: flex; justify-content: space-between;">
    <div>
      <div class="forge-typography--heading4" id="button-area-heading">Heading</div>
      <div>Content</div>
    </div>

    <!--
      Using the forge-ignore attribute allows this element to be placed within the
      button area content without interfering or triggering the main button interaction.
    -->
    <forge-icon-button forge-ignore>
      <forge-icon name="favorite"></forge-icon>
    </forge-icon-button>
  </div>
</forge-button-area>
`})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Always include a slotted ",e.jsx(t.code,{children:"<button>"})," element."]}),`
`,e.jsxs(t.li,{children:["Add a concise, descriptive description of the button area's action as the text content of the slotted button.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The button's text content should preferably be the same as the visible text within the button area to reduce confusion. This can a portion of the content if long."}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Set any accessible attributes on the slotted button.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Set ",e.jsx(t.code,{children:"aria-controls"})," if the button controls another element on the page."]}),`
`,e.jsxs(t.li,{children:["Set ",e.jsx(t.code,{children:"aria-expanded"})," to reflect the state of the controlled element if appropriate."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Verify that you can reach every nested button by keyboard navigation.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Ensure that there is a visual cue that the nested button is currently in focus."}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"Verify that pressing the space bar or enter key while focused on a button will activate the button area in the same manner as if it had been clicked with a mouse."}),`
`,e.jsx(t.li,{children:"Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements."}),`
`]})]})}function O(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{O as default};
