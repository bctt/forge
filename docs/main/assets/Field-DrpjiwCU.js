import{ae as e,af as l,ag as a,ah as n}from"./index-CcRSx1P8.js";import{u as s}from"./index-BWtPYtfJ.js";import{C as r}from"./CustomArgTypes-DhuvrrGx.js";import{C as d}from"./CssOnlyInformation-DQxk2Mik.js";import{F as h,D as c,S as p,C as f}from"./Field.stories-To--75nm.js";import"./iframe-DtD9GyBY.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-BY68bB8K.js";import"./lit-element-CgJqSpuc.js";import"./lit-html-paDGiEfB.js";import"./style-map-C9nPWcxA.js";import"./directive-CF8sV3Lr.js";import"./class-map-D55lQyt8.js";import"./ref-DJjbfkOF.js";import"./directive-helpers-DcB0QpIl.js";import"./decorators-DJTA_amK.js";import"./constants-CFf81ck9.js";import"./base-field-CaM3oavO.js";import"./base-adapter-Dh44vCkH.js";import"./index-BmocOEUj.js";import"./focus-indicator-DesOnyyZ.js";import"./label-D4PQ7L2z.js";import"./button-CVZhEkBO.js";import"./icon-FszQmWVN.js";import"./state-layer-COSQHCpS.js";import"./base-button-adapter-BS886vuU.js";import"./index-ByifSpfC.js";import"./with-label-aware-CjYHyB6d.js";import"./with-default-aria-CAIVLMQ_.js";import"./button-toggle-group-C7b9_lqU.js";import"./with-form-associated-CVqCUEW0.js";import"./checkbox-BavEIv2Q.js";import"./icon-button-CSqhF-TJ.js";import"./switch-DTtl0JRG.js";function i(o){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:`The field component is a low-level building block component that provides a consistent way to render form fields. It handles the visual design of the field, but makes
no assumptions about the type of field being rendered. This allows the field component to be used for a wide variety of form fields that need to inherit from the same
base-level styles and functionality.`}),`
`,e.jsx(t.p,{children:`The field component does not require that there be a focusable element inside of it. This allows the field component to be used for fields that do not require user input,
or for fields that are part of a larger component that handles user input. This makes the field component a flexible building block that can be used in a wide variety of
situations.`}),`
`,e.jsxs(t.p,{children:["The following components use the ",e.jsx(t.code,{children:"<forge-field>"})," internally:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/components-text-field--docs",children:"Text Field"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/components-select--docs",children:"Select"})}),`
`]}),`
`,e.jsxs(t.p,{children:["These components expose similar APIs that are passed down to the ",e.jsx(t.code,{children:"<forge-field>"})," component."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"static",children:"Static"}),`
`,e.jsx(t.p,{children:`While fields are typically building blocks as part of larger components, the following example shows that fields do not require a focusable element to operate properly.
This example is just some static HTML that is not focusable, but still uses the field component to provide consistent styling.`}),`
`,e.jsx(n,{of:p}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["When not using an ",e.jsx(t.code,{children:"<input>"})," or ",e.jsx(t.code,{children:"<textarea>"})," element, you will need to provide an ",e.jsx(t.code,{children:"data-forge-field-input"}),' attribute on the element that is intended to be the "input" element.']}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:`The field does not provide any semantics for assistive technologies. If you are using the field component for a form field that requires user input, you should ensure
that the field has the appropriate ARIA attributes to provide context to screen readers and other assistive technologies.`}),`
`,e.jsx(t.h2,{id:"css-only",children:"CSS-Only"}),`
`,e.jsx(t.p,{children:"The field component is also available as a CSS-only component without the need for JavaScript."}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(t.h3,{id:"inset-label",children:"Inset Label"}),`
`,e.jsxs(t.p,{children:[`If you're using the "inset" variant of the field (nesting a `,e.jsx(t.code,{children:"<label>"}),` within), you will need to use JavaScript to control when the label floats and if you want it to animate,
there are a few classes that you can toggle to achieve this effect properly.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const field = document.querySelector('.forge-field');

// Respond to user input to control the floating label state
field.addEventListener('input', () => floatLabel());

// When the page first loads, float the label if the input has a value (without animation)
floatLabel({ animate: false });

function floatLabel({ animate = true } = {}) {
  const input = field.querySelector('input');
  const hasValue = !!input.value.length;

  field.classList.toggle('forge-field--float-label', hasValue);

  if (animate) {
    field.classList.toggle('forge-field--float-label-in', hasValue);
    field.classList.toggle('forge-field--float-label-out', !hasValue);
  }
}
`})}),`
`,e.jsx(d,{})]})}function Z(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{Z as default};
