import{a as d}from"./index-B-lxVbXh.js";import{I as z}from"./icon-DNSPAaK0.js";import{f as T,g as V,h as L,i as E}from"./index-RsKXMDm2.js";import"./lit-element-B3QVTycr.js";import{E as o,x as t}from"./lit-html-CuBe1DX_.js";import{o as C}from"./style-map-CeP1Mntv.js";import{e as c}from"./class-map-CuXcqkpw.js";import{g,G as P,b as M}from"./utils-BeTmMhVX.js";import"./feature-detection-C61kIZu7.js";import"./avatar-CawfXDqL.js";import"./chip-set-BBO0Yo0Z.js";import"./focus-indicator-B_9E-jM6.js";import"./index-CiLSBptl.js";import"./state-layer-DA2sYK0k.js";z.define([T,V,L,E]);const f="forge-chip-set",m="forge-chip",N=d("forge-chip-select"),x=d("forge-chip-delete"),D=d("forge-chip-navigate"),H={title:"Components/Chips",render:e=>{const a=M(e),r=a?C(a):o;return t`
      <forge-chip-set
        .vertical=${e.vertical}
        .type=${e.type}
        .dense=${e.dense}
        .disabled=${e.disabled}
        .invalid=${e.invalid}
        .theme=${e.theme}
        style=${r}
        @forge-chip-select=${N}
        @forge-chip-delete=${x}>
        <forge-chip value="payments"> Payments ${e.withIcon?t`<forge-icon name="payment" slot=${e.iconSlot}></forge-icon>`:o} </forge-chip>
        <forge-chip value="bills"> Bills ${e.withIcon?t`<forge-icon name="payments" slot=${e.iconSlot}></forge-icon>`:o} </forge-chip>
        <forge-chip value="adjustments">
          Adjustments ${e.withIcon?t`<forge-icon name="adjust" slot=${e.iconSlot}></forge-icon>`:o}
        </forge-chip>
      </forge-chip-set>
    `},component:f,subcomponents:{Chip:m},argTypes:{...g({tagName:f,controls:{theme:{control:"select",options:P},type:{control:"select",options:["choice","filter","action","input","field"]}}}),...g({tagName:m,include:/^--forge-chip/}),withIcon:{control:"boolean"},iconSlot:{control:"select",options:["start","end"],if:{arg:"icon",eq:!0}}},args:{withIcon:!1,iconSlot:"end",vertical:!1,type:"action",dense:!1,disabled:!1,invalid:!1,theme:"primary"}},n={},s={parameters:{controls:{disable:!0}},render:()=>t`
    <forge-chip-set>
      <forge-chip value="payments" href="javascript: void(0);" @forge-chip-navigate=${D}>
        Anchor
        <forge-icon name="open_in_new" slot="end"></forge-icon>
      </forge-chip>
    </forge-chip-set>
  `},i={argTypes:{avatarSlot:{control:"select",options:["start","end"]},withIcon:{table:{disable:!0}}},args:{avatarSlot:"start"},render:e=>{const a=M(e),r=a?C(a):o;return t`
      <forge-chip-set
        .vertical=${e.vertical}
        .type=${e.type}
        .dense=${e.dense}
        .disabled=${e.disabled}
        .invalid=${e.invalid}
        .theme=${e.theme}
        style=${r}>
        <forge-chip value="ruby">
          <forge-avatar slot=${e.avatarSlot} size="small" image-url="./ruby-side.jpg"></forge-avatar>
          Ruby
        </forge-chip>
        <forge-chip value="leo">
          <forge-avatar slot=${e.avatarSlot} size="small" image-url="./leo.png"></forge-avatar>
          Leo
        </forge-chip>
        <forge-chip value="harley">
          <forge-avatar slot=${e.avatarSlot} size="small" image-url="./harley.jpg"></forge-avatar>
          Harley
        </forge-chip>
      </forge-chip-set>
    `}},l={parameters:{controls:{include:/^--|dense|disabled|invalid|vertical/}},args:{disabled:!1,invalid:!1,dense:!1,vertical:!1},render:({disabled:e,invalid:a,dense:r,vertical:O})=>{const p={"forge-chip":!0,"forge-chip--invalid":a,"forge-chip--dense":r};return t`
      <div
        class=${c({"forge-chip-set":!0,"forge-chip-set--vertical":O})}>
        <button class=${c(p)} .disabled=${e}>Small</button>
        <button class=${c({...p,"forge-chip--selected":!0})} .disabled=${e}>Medium</button>
        <button class=${c(p)} .disabled=${e}>Large</button>
      </div>
    `}};var h,u,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,$,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <forge-chip-set>
      <forge-chip value="payments" href="javascript: void(0);" @forge-chip-navigate=\${navigateAction}>
        Anchor
        <forge-icon name="open_in_new" slot="end"></forge-icon>
      </forge-chip>
    </forge-chip-set>
  \`
}`,...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var S,A,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    avatarSlot: {
      control: 'select',
      options: ['start', 'end']
    },
    withIcon: {
      table: {
        disable: true
      }
    }
  },
  args: {
    avatarSlot: 'start'
  },
  render: args => {
    const cssVarArgs = getCssVariableArgs(args);
    const style = cssVarArgs ? styleMap(cssVarArgs) : nothing;
    return html\`
      <forge-chip-set
        .vertical=\${args.vertical}
        .type=\${args.type}
        .dense=\${args.dense}
        .disabled=\${args.disabled}
        .invalid=\${args.invalid}
        .theme=\${args.theme}
        style=\${style}>
        <forge-chip value="ruby">
          <forge-avatar slot=\${args.avatarSlot} size="small" image-url="./ruby-side.jpg"></forge-avatar>
          Ruby
        </forge-chip>
        <forge-chip value="leo">
          <forge-avatar slot=\${args.avatarSlot} size="small" image-url="./leo.png"></forge-avatar>
          Leo
        </forge-chip>
        <forge-chip value="harley">
          <forge-avatar slot=\${args.avatarSlot} size="small" image-url="./harley.jpg"></forge-avatar>
          Harley
        </forge-chip>
      </forge-chip-set>
    \`;
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var j,_,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: /^--|dense|disabled|invalid|vertical/
    }
  },
  args: {
    disabled: false,
    invalid: false,
    dense: false,
    vertical: false
  },
  render: ({
    disabled,
    invalid,
    dense,
    vertical
  }) => {
    const classes = {
      'forge-chip': true,
      'forge-chip--invalid': invalid,
      'forge-chip--dense': dense
    };
    return html\`
      <div
        class=\${classMap({
      'forge-chip-set': true,
      'forge-chip-set--vertical': vertical
    })}>
        <button class=\${classMap(classes)} .disabled=\${disabled}>Small</button>
        <button class=\${classMap({
      ...classes,
      'forge-chip--selected': true
    })} .disabled=\${disabled}>Medium</button>
        <button class=\${classMap(classes)} .disabled=\${disabled}>Large</button>
      </div>
    \`;
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const R=["Demo","Anchor","Avatar","CSSOnly"],ae=Object.freeze(Object.defineProperty({__proto__:null,Anchor:s,Avatar:i,CSSOnly:l,Demo:n,__namedExportsOrder:R,default:H},Symbol.toStringTag,{value:"Module"}));export{s as A,ae as C,n as D,i as a,l as b};
