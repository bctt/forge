import{a as p}from"./index-Cf3axooF.js";import"./lit-element-JplMEnZc.js";import{x as g}from"./lit-html-paDGiEfB.js";import{g as d}from"./utils-DWPQW4DQ.js";import"./feature-detection-DRCh51Sa.js";import"./app-bar-profile-button-Cn0B8BnT.js";import"./state-layer-CeKzZv66.js";import"./focus-indicator-CcRMHyPf.js";import"./index-CiLSBptl.js";import"./badge-Dp1fyGkw.js";import"./icon-CND1_bFA.js";import"./menu-Cfnc10JC.js";import"./linear-progress-CqfIuBkR.js";import"./list-DCk7XhUc.js";import"./popover-DKMemx82.js";import"./overlay-C0hWcV7g.js";import"./skeleton-D2S3-1Sc.js";import"./avatar-D_XGi29H.js";import"./icon-button-BBeQfCZG.js";const t="forge-app-bar-profile-button",b=p("forge-profile-card-profile"),$=p("forge-profile-card-sign-out"),x={title:"Components/App Bar/Profile",render:({profileButton:i,profileButtonText:l,signOutButton:n,signOutButtonText:m,open:s,fullName:f,email:u,avatarLetterCount:c=2})=>g`
      <forge-app-bar title-text="Profile">
        <forge-app-bar-profile-button
          slot="end"
          @forge-profile-card-profile=${b}
          @forge-profile-card-sign-out=${$}
          .avatarLetterCount=${c}
          .profileButton=${i}
          .profileButtonText=${l}
          .signOutButton=${n}
          .signOutButtonText=${m}
          .fullName=${f}
          .email=${u}
          .open=${s}>
        </forge-app-bar-profile-button>
      </forge-app-bar>
    `,component:t,argTypes:{...d({tagName:t,exclude:["avatarIcon","avatarImageUrl","avatarText","popupElement","profileCardBuilder"]})},args:{email:"first.last@tylertech.com",fullName:"First Last",open:!1,profileButton:!1,signOutButton:!0}},r={};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const B=["Demo"],M=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{r as D,M as P};
