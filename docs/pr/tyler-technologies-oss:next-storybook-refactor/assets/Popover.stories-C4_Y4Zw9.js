import{x as $,T as x}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as R}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as C,g as D,s as P,O as d}from"./constants-Ds_Uvk97.js";import{o as w}from"./style-map-CkvVWuL1.js";import{n as s,e as p}from"./ref-BHUNCdUQ.js";import{T as u}from"./toast-C6I-cpJw.js";import"./overlay-g_05lOO3.js";import"./button-DW0aIXKQ.js";import"./focus-indicator-f9GJik4v.js";import"./index-Dh0vMUMR.js";import"./state-layer-CvtwhWgg.js";import"./popover-DwRi4sRl.js";import"./scaffold-BJNJ51_H.js";import"./toolbar-CIHufYA6.js";import"./text-field-ChmOhgPO.js";import"./base-field-B2EYpsqa.js";import"./label-CyT64Z98.js";import"./checkbox-D__IHhAJ.js";import"./icon-button-DFQDfzrF.js";import"./icon-DvTdPf-7.js";import"./switch-K7T10jln.js";const g="forge-popover",E=R("forge-popover-toggle"),A=R("forge-popover-beforetoggle"),B={title:"Components/Popover",render:e=>{const o=C(e),n=o?w(o):x,r=p();function i(){r.value&&(r.value.open=!1)}return $`
      <forge-button id="popover-trigger" variant="raised">Show Popover</forge-button>
      <forge-popover
        ${s(r)}
        anchor="popover-trigger"
        .open=${e.open}
        .animationType=${e.animationType}
        .triggerType=${e.triggerType}
        .arrow=${e.arrow}
        .longpressDelay=${e.longpressDelay}
        .persistentHover=${e.persistentHover}
        .hoverDelay=${e.hoverDelay}
        .hoverDismissDelay=${e.hoverDismissDelay}
        .preset=${e.preset}
        .inline=${e.inline}
        .placement=${e.placement}
        .positionStrategy=${e.positionStrategy}
        .offset=${e.offset}
        .shift=${e.shift}
        .hide=${e.hide}
        .persistent=${e.persistent}
        .flip=${e.flip}
        style=${n}
        @forge-popover-toggle=${E}
        @forge-popover-beforetoggle=${A}>
        <forge-scaffold>
          <forge-toolbar no-border slot="header">
            <h2 class="forge-typography--heading4" slot="start">Popover Title</h2>
          </forge-toolbar>
          <div slot="body" style="width: 300px; padding: var(--forge-spacing-medium);">Popover content</div>
          <forge-toolbar no-border slot="footer">
            <forge-button slot="end" variant="filled" @click=${i}>Close</forge-button>
          </forge-toolbar>
        </forge-scaffold>
      </forge-popover>
    `},component:g,parameters:{layout:"centered"},argTypes:{...D({tagName:g,exclude:["overlay","anchorElement","anchor","noAnchor","boundary","boundaryElement"],controls:{animationType:{control:"select",options:["none","zoom","fade","slide"]},triggerType:{control:"multi-select",options:["click","hover","focus","longpress","doubleclick","contextmenu","manual"]},preset:{control:"select",options:["popover","dropdown","list"]},positionStrategy:{control:"select",options:["absolute","fixed"]},placement:{control:"select",options:d},offset:{control:"object"},hide:{control:"select",options:["anchor-hidden","never"]},flip:{control:"select",options:["auto","main","cross","never"]},fallbackPlacements:{control:"multi-select",options:d}}})},args:{open:!1,animationType:"zoom",triggerType:["click"],arrow:!1,longpressDelay:500,persistentHover:!1,hoverDelay:0,hoverDismissDelay:500,preset:"popover",inline:!1,placement:"bottom",positionStrategy:"fixed",offset:{mainAxis:0,crossAxis:0,alignmentAxis:0},shift:!1,hide:"anchor-hidden",persistent:!1,flip:"auto"}},a={},l={...P,render:()=>{const e=p(),o=p(),n=p();function r(){var t;n.value&&(n.value.disabled=!((t=o.value)!=null&&t.value))}function i(){o.value&&(o.value.value=""),n.value&&(n.value.disabled=!0),e.value&&(e.value.open=!1)}function T(){var t;(t=o.value)!=null&&t.value&&u.present({message:`Hello, ${o.value.value}!`}),i()}function S(t){var f;t.detail.newState==="closed"&&(f=o.value)!=null&&f.value&&(t.preventDefault(),u.present({message:"You have unsaved changes. "}))}return $`
      <forge-button id="popover-trigger-nonmodal" variant="raised">Show Non-modal Popover</forge-button>
      <forge-popover
        ${s(e)}
        anchor="popover-trigger-nonmodal"
        placement="bottom-start"
        arrow
        role="dialog"
        aria-modal="false"
        aria-labelledby="nonmodal-title"
        @forge-popover-beforetoggle=${S}>
        <forge-scaffold>
          <forge-toolbar no-border slot="header">
            <h2 class="forge-typography--heading4" slot="start" id="nonmodal-title">Enter Your Name</h2>
          </forge-toolbar>
          <div slot="body" id="nonmodal-description" style="width: 300px; padding: var(--forge-spacing-medium);">
            <form autocomplete="off">
              <forge-text-field>
                <input ${s(o)} autofocus @input=${r} type="text" name="your-name" value="" required aria-label="Enter your name">
              </forge-text-field>
            </form>
          </div>
          <forge-toolbar no-border slot="footer">
            <forge-button slot="end" @click=${i} style="margin-right: var(--forge-spacing-medium);">Cancel</forge-button>
            <forge-button ${s(n)} slot="end" variant="filled" disabled @click=${T}>Save</forge-button>
          </forge-toolbar>
        </forge-scaffold>
      </forge-popover>
    `}};var c,m,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,h,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    const popoverRef = createRef<IPopoverComponent>();
    const inputRef = createRef<HTMLInputElement>();
    const saveButtonRef = createRef<IButtonComponent>();
    function handleInput() {
      if (saveButtonRef.value) {
        saveButtonRef.value.disabled = !inputRef.value?.value;
      }
    }
    function handleClose() {
      if (inputRef.value) {
        inputRef.value.value = '';
      }
      if (saveButtonRef.value) {
        saveButtonRef.value.disabled = true;
      }
      if (popoverRef.value) {
        popoverRef.value.open = false;
      }
    }
    function handleSave() {
      if (inputRef.value?.value) {
        ToastComponent.present({
          message: \`Hello, \${inputRef.value.value}!\`
        });
      }
      handleClose();
    }
    function handleBeforeToggle(evt: CustomEvent<IPopoverToggleEventData>) {
      if (evt.detail.newState === 'closed') {
        if (inputRef.value?.value) {
          evt.preventDefault();
          ToastComponent.present({
            message: 'You have unsaved changes. '
          });
        }
      }
    }
    return html\`
      <forge-button id="popover-trigger-nonmodal" variant="raised">Show Non-modal Popover</forge-button>
      <forge-popover
        \${ref(popoverRef)}
        anchor="popover-trigger-nonmodal"
        placement="bottom-start"
        arrow
        role="dialog"
        aria-modal="false"
        aria-labelledby="nonmodal-title"
        @forge-popover-beforetoggle=\${handleBeforeToggle}>
        <forge-scaffold>
          <forge-toolbar no-border slot="header">
            <h2 class="forge-typography--heading4" slot="start" id="nonmodal-title">Enter Your Name</h2>
          </forge-toolbar>
          <div slot="body" id="nonmodal-description" style="width: 300px; padding: var(--forge-spacing-medium);">
            <form autocomplete="off">
              <forge-text-field>
                <input \${ref(inputRef)} autofocus @input=\${handleInput} type="text" name="your-name" value="" required aria-label="Enter your name">
              </forge-text-field>
            </form>
          </div>
          <forge-toolbar no-border slot="footer">
            <forge-button slot="end" @click=\${handleClose} style="margin-right: var(--forge-spacing-medium);">Cancel</forge-button>
            <forge-button \${ref(saveButtonRef)} slot="end" variant="filled" disabled @click=\${handleSave}>Save</forge-button>
          </forge-toolbar>
        </forge-scaffold>
      </forge-popover>
    \`;
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const N=["Demo","NonModal"],oe=Object.freeze(Object.defineProperty({__proto__:null,Demo:a,NonModal:l,__namedExportsOrder:N,default:B},Symbol.toStringTag,{value:"Module"}));export{a as D,l as N,oe as P};
