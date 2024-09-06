import{j as e}from"./jsx-runtime-Bv2ai_Cm.js";import{u as r}from"./index-lbyvYBNQ.js";import{ae as s,af as a,ag as i}from"./index-CWPAzIi9.js";import{C as p}from"./CustomArgTypes-oNR2MpXO.js";import{P as l,D as d,N as h}from"./Popover.stories-CKDIRQWj.js";import"./iframe-CUIXUagH.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./utils-CmNCmodr.js";import"./lit-element-Dk2-kgKT.js";import"./lit-html-DZH-Jm0H.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./style-map-DxfbqtuX.js";import"./directive-Ctav8iJK.js";import"./ref-9TtedaQt.js";import"./directive-helpers-DnQ__Q7V.js";import"./constants-DjE6emXm.js";import"./toast-Cjha_ejP.js";import"./base-adapter-F7QHxK2H.js";import"./index-ByifSpfC.js";import"./button-DJU3J9XV.js";import"./icon-DHpZ4R73.js";import"./index-Dh0vMUMR.js";import"./focus-indicator-BpCDYqsq.js";import"./state-layer-DkOkOFSZ.js";import"./base-button-adapter-O0rbh8zo.js";import"./with-label-aware-CLWydNrR.js";import"./with-default-aria-DCLjqsVH.js";import"./dialog-CSWDxFC2.js";import"./backdrop-BKmy5m9d.js";import"./dismissible-stack-DUAAgggE.js";import"./icon-button-DSVS47IC.js";import"./overlay-oQigVWsx.js";import"./popover-DMO_rraq.js";import"./with-longpress-listener-D-8wsf8o.js";import"./scaffold-R2qvsZCm.js";import"./toolbar-SJpnF1yY.js";import"./text-field-By0mC--H.js";import"./base-field-CfB2Uzg4.js";import"./label-kORtmqyo.js";import"./button-toggle-group-BMiaMm6c.js";import"./with-form-associated-DjPnTr_x.js";import"./checkbox-7ZtPo8kA.js";import"./switch-BDI72jLc.js";import"./tooltip-CB-SMzj2.js";function n(o){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:`Popovers are used to display content on top of other content. They are used to show additional information related to the content that is currently
displayed on the screen, and is typically anchored to a specific element or area on the screen that triggered it to open.`}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h2,{id:"semantics",children:"Semantics"}),`
`,e.jsx(t.p,{children:`Popovers do not have any semantic meaning by default. This means that it's up to the developer to ensure that the content inside the popover is
accessible if it needs to be. This can be done by adding the appropriate ARIA attributes to the popover itself, or the content within it.`}),`
`,e.jsx(t.h2,{id:"popovers-vs-dialogs",children:"Popovers vs Dialogs"}),`
`,e.jsx(t.p,{children:`There is a lot of overlap between popovers and dialogs, and it can be difficult to know when to use one over the other. Here are some guidelines to help
you decide:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Popovers"}),` are used to display additional information related to the content that is currently displayed on the screen. They are typically anchored to
a specific element or area on the screen. Popovers are transient and non-modal, meaning that they do not block the user from interacting with the rest
of the page.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dialogs"}),` are used to display content that requires the user's immediate attention. They are typically modal (but can be non-modal), meaning that they
block the user from interacting with the rest of the page until they are dismissed. Dialogs are typically used for things like confirmation messages,
alerts, and forms.`]}),`
`]}),`
`,e.jsx(t.p,{children:`There are some cases where you may need to blur these lines a bit (and you can use either component), especially if the design of your application calls
for it. Just be sure to consider the user experience and accessibility implications.`}),`
`,e.jsx(t.h2,{id:"non-modal-popoverdialog",children:"Non-modal Popover/Dialog"}),`
`,e.jsxs(t.p,{children:[`If you need to create a popover that behaves like a dialog (i.e. it is non-modal and does not block the user from interacting with the rest of the page),
you can use the `,e.jsx(t.code,{children:"<forge-popover>"})," and add the proper ARIA attributes to make it behave like a dialog."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(t.p,{children:["In this example, the popover is presented with the ",e.jsx(t.code,{children:'role="dialog"'})," and ",e.jsx(t.code,{children:'aria-modal="false"'}),` attributes. This tells screen readers that the popover is a
dialog, but it is not modal. This specific example will gracefully handle user entry into a form, by ensuring that the user does not lose valuable data
by accidentally closing the popover.`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(p,{})]})}function ae(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{ae as default};
