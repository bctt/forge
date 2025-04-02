import{j as e,M as s,T as c,C as o}from"./index-Cyf37mg0.js";import{useMDXComponents as r}from"./index-C56jts5a.js";import{C as a}from"./CustomArgTypes-DyWox6lo.js";import{M as d,D as l,C as h,G as p}from"./Menu.stories-wGTAW_0C.js";import"./iframe-BMJJLdX5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./utils-DXeqrvgL.js";import"./lit-element-B3QVTycr.js";import"./lit-html-CuBe1DX_.js";import"./style-map-CeP1Mntv.js";import"./directive-CJw_OlP2.js";import"./ref-BHdy32Cl.js";import"./directive-helpers-CJ-qmK0k.js";import"./feature-detection-CY6TVbRZ.js";import"./menu-D9NLnmlg.js";import"./constants-D2tqnpVB.js";import"./base-adapter-BD6-QDkX.js";import"./index-RsKXMDm2.js";import"./icon-D5yjdXv8.js";import"./index-CiLSBptl.js";import"./list-DOSD_vEq.js";import"./state-layer-sxQMIn2c.js";import"./utils-CRxrUqQD.js";import"./focus-indicator-NbLDNrYT.js";import"./with-default-aria-DEjfFCHL.js";import"./a11y-utils-DGb1vALN.js";import"./list-dropdown-aware-core-OeLCwz1n.js";import"./list-dropdown-Dxk6J0VC.js";import"./event-utils-C1SDeUaq.js";import"./linear-progress-BTmLtQyy.js";import"./popover-DBZ1E3cM.js";import"./overlay-8j8D8Fh1.js";import"./with-longpress-listener-DC7alanv.js";import"./dismissible-stack-BOibH_v8.js";import"./skeleton-DtUhqb6H.js";import"./a11y-BxM9_46k.js";import"./tooltip-BgQLBWUo.js";import"./button-CutPPNni.js";import"./base-button-adapter-cyf2Ayfh.js";import"./with-label-aware-DMDMR_5T.js";function i(t){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(c,{}),`
`,e.jsx(n.p,{children:"Menus are used to provide a list of options/actions to a user, and are typically anchored dynamically to a button or other similar trigger element."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-menu>"}),` component is a "decorator" style component which means it wraps around a trigger element and will attach itself to automatically open
and close when the trigger element is interacted with.`]}),`
`,e.jsx(n.p,{children:`Menus can be used in a variety of ways, such as a simple list of options, a list of actions, or a hierarchical/cascading list of options. Menus do not
hold selection state.`}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"javascript",children:"JavaScript"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-menu>"})," currently requires the use of JavaScript to set the options to display in the menu dropdown. The ",e.jsx(n.code,{children:"options"}),` property is an array of objects
where each object represents a menu item, and each object can have various configuration supplied for things like the label, icon, custom templates, and more.`]}),`
`,e.jsx(n.p,{children:"Below is an example of a basic array of menu options:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const options: IMenuOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
];
`})}),`
`,e.jsxs(n.p,{children:["This options array can then be set (or bound via framework) to the ",e.jsx(n.code,{children:"options"})," property of the ",e.jsx(n.code,{children:"<forge-menu>"})," component."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you need to render icons in the menu, you can use the ",e.jsx(n.code,{children:"icon"}),"/",e.jsx(n.code,{children:"leadingIcon"})," and/or ",e.jsx(n.code,{children:"trailingIcon"}),` properties on the menu option object.
There are also corresponding `,e.jsx(n.code,{children:"leadingIconType"})," and ",e.jsx(n.code,{children:"trailingIconType"}),` properties to specify the element type that will be rendered. Set these
to `,e.jsx(n.code,{children:"'component'"})," to render a ",e.jsx(n.code,{children:"<forge-icon>"})," element."]}),`
`]}),`
`,e.jsx(n.h2,{id:"cascading",children:"Cascading"}),`
`,e.jsx(n.p,{children:"Cascading menus are used to display a hierarchical list of options. When a menu item is hovered, a child menu will open next of the parent menu item."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"menu-groups",children:"Menu Groups"}),`
`,e.jsxs(n.p,{children:["Grouping menu items can be useful to visually separate different types of options. The menu options use the ",e.jsx(n.code,{children:"IMenuOptionGroup"}),` interface to define the group
and its options.`]}),`
`,e.jsx(n.p,{children:"Below is an example of a basic array of menu options with groups:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let optionGroup: IMenuOptionGroup[] = [
      {
        text: 'Group 1',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]
      },
      {
        text: 'Group 2',
        options: [
          { label: 'Option 3', value: 'option3' },
          { label: 'Option 4', value: 'option4' }
        ]
      }
    ];
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"keyboard-shortcuts",children:"Keyboard shortcuts"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Menu open"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"space / escape"})}),e.jsx(n.td,{children:"Closes the menu."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enter / arrow right"})}),e.jsx(n.td,{children:"Opens and closes child menu of the focused menu item."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"arrow left"})}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Mode is Cascade"}),": Closes the menu."]})]})]})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Menu closed"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"space"})}),e.jsx(n.td,{children:"Opens the menu."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enter"})}),e.jsx(n.td,{children:"Opens the menu and Opens and closes child menu of the focused menu item."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"arrow down"})}),e.jsx(n.td,{children:"Opens the menu and focuses the first menu item."})]})]})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Verify that the trigger element used to open and close the menu can be focused and activated by keyboard.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure that there is a visual cue that the trigger element is currently in focus."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Verify that pressing the space bar or enter key while focused on the trigger element will activate the menu in the same manner as if it had been clicked with a mouse."}),`
`,e.jsx(n.li,{children:"Ensure each menu item can be selected by using arrow-up and arrow-down."}),`
`]})]})}function ne(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ne as default};
