import{j as e,M as s,T as a,C as i}from"./index-0M6pRx7h.js";import{useMDXComponents as r}from"./index-cYch_GcU.js";import{C as p}from"./CustomArgTypes-Bcq8L5dJ.js";import{P as l,D as d,N as h}from"./Popover.stories-BMn--QKa.js";import"./iframe-DcBzH2dI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./utils-BeTmMhVX.js";import"./lit-element-B3QVTycr.js";import"./lit-html-CuBe1DX_.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./style-map-CeP1Mntv.js";import"./directive-CJw_OlP2.js";import"./ref-BHdy32Cl.js";import"./directive-helpers-CJ-qmK0k.js";import"./feature-detection-C61kIZu7.js";import"./toast-77GARm9c.js";import"./constants-DHnR0122.js";import"./base-adapter-B_B1W7NX.js";import"./index-RsKXMDm2.js";import"./button-Cye3g7s2.js";import"./icon-DNSPAaK0.js";import"./index-CiLSBptl.js";import"./focus-indicator-B_9E-jM6.js";import"./utils-DXGAA5XK.js";import"./state-layer-DA2sYK0k.js";import"./base-button-adapter-Diqkx89j.js";import"./with-label-aware-CbEUrhML.js";import"./with-default-aria-COlelyab.js";import"./a11y-utils-CCSbmmS7.js";import"./dialog-BZ1rPOET.js";import"./backdrop-UaagznG1.js";import"./dismissible-stack-2hc7GWs9.js";import"./icon-button-BgvK8Gih.js";import"./overlay-CFvbk99I.js";import"./popover-0XUukIs4.js";import"./with-longpress-listener-D4mCqU-o.js";import"./scaffold-CWDbFKLY.js";import"./toolbar-CM1YCrRV.js";import"./text-field-CEd8gOnG.js";import"./base-field-B1mAVOnC.js";import"./label-DX_PQUsn.js";import"./button-toggle-group-JMDAjILZ.js";import"./with-form-associated-BgRoomBE.js";import"./checkbox-BwLNDz7l.js";import"./switch-B2m0S8OE.js";import"./tooltip-CCMKllfO.js";function n(o){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
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
