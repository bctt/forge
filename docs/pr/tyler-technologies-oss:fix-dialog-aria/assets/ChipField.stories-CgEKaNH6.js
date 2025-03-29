import"./lit-element-B3QVTycr.js";import{E as x,x as A}from"./lit-html-CuBe1DX_.js";import{o as S}from"./style-map-CeP1Mntv.js";import{a as C}from"./index-B-lxVbXh.js";import{g as M,s as w,G as T,b as $}from"./utils-DwiQLFey.js";import{n as y,e as E}from"./ref-BHdy32Cl.js";import"./feature-detection-C61kIZu7.js";import"./autocomplete-CfRy7s5s.js";import"./label-W_tr_-w0.js";import"./index-CiLSBptl.js";import"./button-7EoU3XJS.js";import"./focus-indicator-DydcbRnf.js";import"./state-layer-Y8UVngaT.js";import"./button-toggle-group-BIaWvq7W.js";import"./checkbox-CZ4HhXrD.js";import"./icon-button-DJSm0po0.js";import"./icon-DNSPAaK0.js";import"./switch-CVhsVTET.js";import"./base-field-BDCxUf4S.js";import"./linear-progress-Brg7kVg_.js";import"./list-BEAQdsdb.js";import"./popover-DlgaZ2F2.js";import"./overlay-C2J-mFMD.js";import"./skeleton-Cfb12itF.js";import"./text-field-DxXALn2L.js";const c="forge-chip-field",I=[{label:"Alabama",value:"AL"},{label:"Alaska",value:"AK"},{label:"Arizona",value:"AZ"},{label:"Arkansas",value:"AR"},{label:"California",value:"CA"},{label:"Colorado",value:"CO"},{label:"Connecticut",value:"CT"},{label:"Delaware",value:"DE"},{label:"Florida",value:"FL"},{label:"Georgia",value:"GA"},{label:"Hawaii",value:"HI"},{label:"Idaho",value:"ID"},{label:"Illinois",value:"IL"},{label:"Indiana",value:"IN"},{label:"Iowa",value:"IA"},{label:"Kansas",value:"KS"},{label:"Kentucky",value:"KY"},{label:"Louisiana",value:"LA"},{label:"Maine",value:"ME"},{label:"Maryland",value:"MD"},{label:"Massachusetts",value:"MA"},{label:"Michigan",value:"MI"},{label:"Minnesota",value:"MN"},{label:"Mississippi",value:"MS"},{label:"Missouri",value:"MO"},{label:"Montana",value:"MT"},{label:"Nebraska",value:"NE"},{label:"Nevada",value:"NV"},{label:"New Hampshire",value:"H"},{label:"New Jersey",value:"J"},{label:"New Mexico",value:"NM"},{label:"New York",value:"NY"},{label:"North Carolina",value:"NC"},{label:"North Dakota",value:"ND"},{label:"Ohio",value:"OH"},{label:"Oklahoma",value:"OK"},{label:"Oregon",value:"OR"},{label:"Pennsylvania",value:"PA"},{label:"Rhode Island",value:"RI"},{label:"South Carolina",value:"C"},{label:"South Dakota",value:"SD"},{label:"Tennessee",value:"TN"},{label:"Texas",value:"TX"},{label:"Utah",value:"UT"},{label:"Vermont",value:"VT"},{label:"Virginia",value:"VA"},{label:"Washington",value:"WA"},{label:"West Virginia",value:"WV"},{label:"Wisconsin",value:"WI"},{label:"Wyoming",value:"WY"}],N=C("forge-chip-field-member-added"),O=C("forge-chip-field-member-removed"),L={title:"Components/Chip Field",render:l=>{const o=$(l),s=o?S(o):x,d=e=>{if(e.target){const a=e.target,u=e.detail,i=document.createElement("forge-chip");i.setAttribute("slot","member"),i.setAttribute("type","field"),i.setAttribute("dense",""),i.addEventListener("forge-chip-delete",t),i.value=u,i.textContent=u,a.appendChild(i)}N(e)},p=e=>{e.detail.remove(),O(e)},t=e=>{e.target&&e.target.remove()};return A`
      <forge-chip-field
        .addOnBlur=${l.addOnBlur}
        .floatLabel=${l.floatLabel}
        .labelPosition=${l.labelPosition}
        .labelAlignment=${l.labelAlignment}
        .invalid=${l.invalid}
        .required=${l.required}
        .optional=${l.optional}
        .disabled=${l.disabled}
        .dense=${l.dense}
        .popoverIcon=${l.popoverIcon}
        .popoverExpanded=${l.popoverExpanded}
        .variant=${l.variant}
        .theme=${l.theme}
        .shape=${l.shape}
        .density=${l.density}
        @forge-chip-field-member-added=${d}
        @forge-chip-field-member-removed=${p}
        style=${s}>
        <label slot="label" for="tag-input">Tags</label>
        <input type="text" id="tag-input" />
        <div slot="support-text">Press enter to create a tag</div>
      </forge-chip-field>
    `},component:c,subcomponents:{Chip:"forge-chip"},argTypes:{...M({tagName:c,exclude:["value","popoverTargetElement","supportTextInset"],controls:{labelPosition:{control:"select",options:["inline-start","inline-end","block-start","inset","none"]},labelAlignment:{control:"select",options:["default","center","baseline","start","end"]},variant:{control:"select",options:["plain","outlined","tonal","filled","raised"]},shape:{control:"select",options:["default","rounded","square"]},density:{control:"select",options:["default","extra-small","small","medium","large","extra-large"]},theme:{control:"select",options:["default",...T]}}})},args:{addOnBlur:!1,floatLabel:!1,labelPosition:"inset",labelAlignment:"default",invalid:!1,required:!1,optional:!1,disabled:!1,density:"default",dense:!1,popoverIcon:!1,popoverExpanded:!1}},n={},r={...w,render:()=>{const l=E(),o=[],s=t=>I.filter(({value:a})=>!o.includes(a)).filter(({label:a})=>a.toLowerCase().includes(t.toLowerCase())),d=t=>{o.includes(t.detail.value)||(p(t.detail.value),o.push(t.detail.value))};function p(t){var a;const e=document.createElement("forge-chip");e.setAttribute("slot","member"),e.type="field",e.dense=!0,e.value=t,e.textContent=t,e.addEventListener("forge-chip-delete",()=>{e.remove(),o.splice(o.indexOf(t),1)}),(a=l.value)==null||a.appendChild(e)}return A`
      <forge-autocomplete .filter=${s} mode="stateless" @forge-autocomplete-select=${d}>
        <forge-chip-field ${y(l)} popover-icon show-clear>
          <label slot="label" for="tag-input">Tags</label>
          <input type="text" id="tag-input" />
        </forge-chip-field>
      </forge-autocomplete>
    `}};var m,b,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,h,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    const chipFieldRef = createRef<IChipFieldComponent>();
    const selectedAutocompleteValues: string[] = [];
    const filter = (filterText: string) => {
      const remainingStates = US_STATES.filter(({
        value
      }) => !selectedAutocompleteValues.includes(value));
      return remainingStates.filter(({
        label
      }) => label.toLowerCase().includes(filterText.toLowerCase()));
    };
    const onSelect = (evt: CustomEvent<IAutocompleteSelectEventData>) => {
      const exists = selectedAutocompleteValues.includes(evt.detail.value);
      if (!exists) {
        addMember(evt.detail.value);
        selectedAutocompleteValues.push(evt.detail.value);
      }
    };
    function addMember(value: string): void {
      const newChip = document.createElement('forge-chip');
      newChip.setAttribute('slot', 'member');
      newChip.type = 'field';
      newChip.dense = true;
      newChip.value = value;
      newChip.textContent = value;
      newChip.addEventListener('forge-chip-delete', () => {
        newChip.remove();
        selectedAutocompleteValues.splice(selectedAutocompleteValues.indexOf(value), 1);
      });
      chipFieldRef.value?.appendChild(newChip);
    }
    return html\`
      <forge-autocomplete .filter=\${filter} mode="stateless" @forge-autocomplete-select=\${onSelect}>
        <forge-chip-field \${ref(chipFieldRef)} popover-icon show-clear>
          <label slot="label" for="tag-input">Tags</label>
          <input type="text" id="tag-input" />
        </forge-chip-field>
      </forge-autocomplete>
    \`;
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const V=["Demo","WithAutocomplete"],ie=Object.freeze(Object.defineProperty({__proto__:null,Demo:n,WithAutocomplete:r,__namedExportsOrder:V,default:L},Symbol.toStringTag,{value:"Module"}));export{ie as C,n as D,r as W};
