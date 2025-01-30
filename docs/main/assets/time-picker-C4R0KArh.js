import{C as x,h as U,j as W,B as R,k as $}from"./constants-BjnHqKgS.js";import{B as z,c as p}from"./base-adapter-CQdYccXX.js";import{H as B,u as K,t as X,o as G,P as q,l as Y,z as j,c as d,b as J}from"./feature-detection-ONR9WHvu.js";import{t as Q}from"./index-nygIasyA.js";import{x as Z}from"./index-ByifSpfC.js";import{b as tt,s as C}from"./focus-indicator-R2otSvsR.js";import{I as et,c as st,a as O}from"./index-BmocOEUj.js";import{T as A}from"./text-field-DHXYud3A.js";import"./base-field-BSRSGQL0.js";import"./label-BOjkkgiS.js";import"./button-vPgaRyW5.js";import"./state-layer-B7GOb8iB.js";import"./button-toggle-group-Cft-ohT1.js";import"./checkbox-e65WGDEs.js";import{a as v,I as it}from"./icon-button-DfODsaKD.js";import{b as nt,I as rt,a as D}from"./icon-B5S0VGIT.js";import"./switch-BRBW-vzp.js";import{a as ot,c as at}from"./list-dropdown-DebMMgrE.js";import"./linear-progress-DPUjJFYN.js";import{L as lt,a as ut}from"./list-CfkU0djA.js";import{P as ht}from"./popover-Dq2OmXS_.js";import"./overlay-DAcircNE.js";import"./skeleton-Dfdgg-pt.js";import{a as pt}from"./dialog-B9LsXUuI.js";import"./backdrop-BIqxiwQa.js";const I=/^(0?[0-9]|1\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/,b=/^(0?[1-9]|1[0-2]):([0-5]\d)(:([0-5]\d))?\s*([AaPp][Mm])?$/,_t=/^(\d?\d?):?(\d?\d?)(:?(\d?\d?))?\s*([AaPp][Mm]?)?$/,L=/[AaPp][Mm]?/;function mt(n){const t=n.match(I)||[null,0,0,null,0],e=t[1],s=t[2],i=t[4];return{hours:e,minutes:s,seconds:i}}function dt(n){const t=n.match(b)||[null,0,0,null,0,"AM"],e=t[1],s=t[2],i=t[4],r=t[5];return{hours:e,minutes:s,seconds:i,meridiem:r}}function ct(n){return I.test(n)||b.test(n)}function ft(n,t,e){if(n=n&&typeof n=="string"?n.replace(/_|\s/g,""):"",/^\s*$/.test(n)||/^:+$/.test(n))return"";const s=n.match(_t);if(!s)return"";let i=s[1],r=s[2],a=s[4],l=s[5];const _=n.match(L);_&&(l=_[0],n=n.replace(l,""),l.length===1&&(l+="m")),n.length===3&&!n.includes(":")&&(i=n[0],r=n.substring(1)),t?l="":L.test(l)?l=l.toUpperCase():/^[AaPp]/.test(l)?l.toLowerCase().startsWith("a")?l="AM":l.toLowerCase().startsWith("p")&&(l="PM"):l="";const c=+i||0,f=+r||0,S=!l||t?23:12;if(c>=S?i=String(S):c<0&&(i="00"),i=i.padStart(2,"0"),r!==void 0&&(f>59?r="59":f<0?r="00":r=r.padStart(2,"0")),a!==void 0){const y=+a||0;y>59?a="59":y<0?a="00":a=a.padStart(2,"0")}let E=i;return r!==void 0&&(E+=`:${r}`,a===void 0&&e&&(a="00")),a!==void 0&&(E+=`:${a}`),l&&(E+=` ${l}`),E}const g={hours:0,minutes:1,seconds:2,meridiem:3};class gt{constructor(t){this._segments=this._parseSegments(t)}get hours(){return this._segments[g.hours]}get minutes(){return this._segments[g.minutes]}get seconds(){return this._segments[g.seconds]}get meridiem(){return this._segments[g.meridiem]}applyValue(t){this._segments=this._parseSegments(t)}patchSegmentValue(t,e){const s=g[t];return this._segments[s]=e.padStart(2,"0"),this._segments[s]}toString(){const[t,e,s,i]=this._segments;return`${[t,e,s].filter(a=>!!a.length).join(":")}${i}`}_parseSegments(t){const[e,s=""]=t.trim().replace(/\s+|_/g,"").split(/([AaPp][Mm]?)/),[i="",r="",a=""]=e.split(":");return[i,r,a,s]}}const wt={"hours-start":0,"hours-end":2,"minutes-start":3,"minutes-end":5,"seconds-start":6,"seconds-end":8,"meridiem-start":9,"meridiem-end":11};class St{constructor(t,e){this._char=t,this._mask=e,this._segmentParser=new gt(this._mask.value)}get value(){return this.isAllSelected?"":this._normalizeTimeString(this._mask.value)}get numChar(){return Number(this._char)}get asPaddedChar(){return String(this.numChar).padStart(2,"0")}_normalizeTimeString(t){let e=t.replace(/\s+|_/g,"");return/^:+$/.test(e)&&(e=""),e}get isAllSelected(){const{start:t,end:e}=this._mask._selection;return t===0&&e>0&&e===this._mask.value.length}get isFirstHoursChar(){return this._mask.cursorPos===1&&this.numChar>0}get isFirstMinutesChar(){return[3,4].includes(this._mask.cursorPos)&&this._segmentParser.minutes.length!==2}get isFirstSecondsChar(){return[6,7].includes(this._mask.cursorPos)&&this._segmentParser.seconds.length!==2}get isFinalHoursChar(){return this._mask.cursorPos===3&&this._segmentParser.hours.length===2}get isFinalMinutesChar(){return this._mask.cursorPos===6&&this._segmentParser.minutes.length===2}get isFinalSecondsChar(){return this._mask.cursorPos===9&&this._segmentParser.seconds.length===2}get isInitialHoursEntry(){return this._segmentParser.hours.length===0}get hasOnlyHoursSegment(){return!!this._segmentParser.hours&&!this._segmentParser.minutes&&!this._segmentParser.seconds}get hoursSegmentNum(){return Number(this._segmentParser.hours)}get minutesSegmentNum(){return Number(this._segmentParser.minutes)}get secondsSegmentNum(){return Number(this._segmentParser.seconds)}get canOverwriteHoursChar(){return this._mask.cursorPos===3&&!!this._segmentParser.hours.length&&this.hoursSegmentNum<3}get canOverwriteMinutesChar(){return[5,6].includes(this._mask.cursorPos)&&!!this._segmentParser.minutes.length&&this.minutesSegmentNum<60}get canOverwriteSecondsChar(){return[8,9].includes(this._mask.cursorPos)&&!!this._segmentParser.seconds.length&&this.secondsSegmentNum<60}reset(){this._segmentParser.applyValue("")}patchSegmentValue(t,e,{overwrite:s=!1}={}){return s&&this.reset(),this._segmentParser.patchSegmentValue(t,e),this._segmentParser.toString()}applyValue(t,e){this._mask.unmaskedValue=t,e!==void 0&&window.requestAnimationFrame(()=>this._mask.updateCursor(wt[e]))}}const Et="0`0{:}`0`0 `AM",It="0`0{:}`0`0{:}`0`0 `AM",Tt="0`0{:}`0`0",bt="0`0{:}`0`0{:}`0`0";class Mt{constructor(t,e={}){this._element=t,this._options=e,this._maskOptions=this._createOptions(),this._mask=new et(this._element,this._maskOptions),this._options.onChange&&(this._acceptListener=()=>this._onAccept(),this._mask.on("accept",this._acceptListener))}destroy(){this._acceptListener&&this._mask.off("accept",this._acceptListener),this._mask.destroy()}resolve(t){return st(this._maskOptions).resolve(t)}update(){this._mask.updateValue()}_onAccept(){typeof this._options.onChange=="function"&&this._options.onChange(this._mask.value)}_createOptions(){return{mask:this._getMaskFormat(),overwrite:!0,lazy:!this._options.showMaskFormat,prepare:(t,e,s)=>this._prepare(t,e,s,this._mask),blocks:{A:{mask:O,enum:["a","A","p","P"]},M:{mask:O,enum:["m","M"]}}}}_prepare(t,e,s,i){var r;return typeof this._options.prepareCallback=="function"?this._options.prepareCallback.call(null,t,e,s,this._mask):!s.input||!t.length||!i?t.toUpperCase():((r=i._inputEvent)==null?void 0:r.inputType)!=="insertText"?t:this._prepareDefault(t,i).toUpperCase()}_prepareDefault(t,e){const s=new St(t,e);if(!B(t)){if(t===":"){if(s.isFinalHoursChar){const i=s.patchSegmentValue("hours",s.value);return s.applyValue(i,"minutes-start"),t}if(s.isFinalMinutesChar){const i=s.patchSegmentValue("minutes",String(s.minutesSegmentNum));return s.applyValue(i,this._options.showSeconds?"seconds-start":"minutes-end"),t}if(this._options.showSeconds&&s.isFinalSecondsChar){const i=s.patchSegmentValue("seconds",String(s.secondsSegmentNum));return s.applyValue(i,"meridiem-start"),t}}return t}if(s.isAllSelected&&s.reset(),s.isInitialHoursEntry&&s.isFirstHoursChar){const i=s.patchSegmentValue("hours",s.asPaddedChar);return s.applyValue(i,"hours-end"),":"}if(s.hasOnlyHoursSegment&&s.canOverwriteHoursChar){const i=+`${s.hoursSegmentNum}${s.numChar}`;if(i<=12||this._options.use24HourTime&&i<=23){const r=s.patchSegmentValue("hours",String(i));return s.applyValue(r,"minutes-start"),":"}}if(s.value.length+1===2)return`${t}:`;if(s.isFirstMinutesChar){const i=s.patchSegmentValue("minutes",s.asPaddedChar);return s.applyValue(i,"minutes-end"),":"}if(s.canOverwriteMinutesChar){const i=+`${s.minutesSegmentNum}${s.numChar}`;if(i<60){const r=s.patchSegmentValue("minutes",String(i));return s.applyValue(r,"minutes-end"),":"}}if(this._options.showSeconds){if(s.isFirstSecondsChar){const i=s.patchSegmentValue("seconds",s.asPaddedChar);return s.applyValue(i,"seconds-end"),":"}if(s.canOverwriteSecondsChar){const i=+`${s.secondsSegmentNum}${s.numChar}`;if(i<60){const r=s.patchSegmentValue("seconds",String(i));return s.applyValue(r,"seconds-end"),":"}}}return t}_getMaskFormat(){return this._options.use24HourTime?this._options.showSeconds?bt:Tt:this._options.showSeconds?It:Et}get maskedValue(){return this._mask.value}set maskedValue(t){this._mask.value=t}get unmaskedValue(){return this._mask.unmaskedValue}set unmaskedValue(t){this._mask.unmaskedValue=t}}const w=`${x}time-picker`,V={TOGGLE:"forge-time-picker-toggle",VALUE:"value",OPEN:"open",ALLOW_SECONDS:"allow-seconds",MASKED:"masked",SHOW_MASK_FORMAT:"show-mask-format",USE_24_HOUR_TIME:"use-24-hour-time",ALLOW_INVALID_TIME:"allow-invalid-time",MIN:"min",MAX:"max",START_TIME:"start-time",STEP:"step",ALLOW_INPUT:"allow-input",SHOW_NOW:"show-now",SHOW_HOUR_OPTIONS:"show-hour-options",DISABLED:"disabled",POPUP_CLASSES:"popup-classes",ALLOW_DROPDOWN:"allow-dropdown"},kt={INPUT:"input, input[forge-time-picker-input]",TOGGLE:`[${V.TOGGLE}]`},yt={OPEN:`${w}-open`,CLOSE:`${w}-close`,INPUT:`${w}-input`,CHANGE:`${w}-change`},Ct={DEFAULT_MINUTE_STEP:60,MAX_DAY_MILLIS:864e5,MAX_DAY_MINUTES:1440},o={elementName:w,attributes:V,selectors:kt,events:yt,numbers:Ct};class Ot extends z{constructor(t){super(t)}get inputElement(){return this._inputElement}initialize(){this._inputElement=this._component.querySelector(o.selectors.INPUT)}initializeMask(t){this.destroyMask(),this._inputElement&&(this._inputMask=new Mt(this._inputElement,t))}destroy(){this._targetElement=void 0,this._toggleElement=void 0,this._inputElement=void 0}destroyMask(){var t;(t=this._inputMask)==null||t.destroy(),this._inputMask=void 0}initializeAccessibility(t){var e,s,i,r,a,l,_,c,f;(e=this._inputElement)==null||e.setAttribute("autocomplete","off"),(s=this._inputElement)==null||s.setAttribute("autocorrect","off"),(i=this._inputElement)==null||i.setAttribute("autocapitalize","off"),(r=this._inputElement)==null||r.setAttribute("spellcheck","false"),(a=this._inputElement)==null||a.setAttribute("role","combobox"),(l=this._inputElement)==null||l.setAttribute("aria-live","assertive"),(_=this._inputElement)==null||_.setAttribute("aria-atomic","true"),(c=this._inputElement)==null||c.setAttribute("aria-haspopup","true"),(f=this._inputElement)==null||f.setAttribute("aria-expanded","false"),tt(),this._inputElement&&C(this._inputElement)}addInputListener(t,e,s){var i;(i=this._inputElement)==null||i.addEventListener(t,e,{capture:s})}removeInputListener(t,e,s){var i;(i=this._inputElement)==null||i.removeEventListener(t,e,{capture:s})}addToggleListener(t,e){this._toggleElement&&this._toggleElement.addEventListener(t,e)}removeToggleListener(t,e){this._toggleElement&&this._toggleElement.removeEventListener(t,e)}hasInputElement(){return!!this._inputElement}tryCreateToggle(){const t=this._component.querySelector(A.elementName),e=this._component.querySelector(o.selectors.TOGGLE);if(t){const s=t.querySelector(`${v.elementName}[slot=trailing]`);if(s||e){this._toggleElement=s||e;return}const i=document.createElement(v.elementName);i.slot="trailing",i.density="medium",i.type="button",i.tabIndex=-1,i.style.marginRight="4px",i.setAttribute("aria-label","Toggle time dropdown");const r=document.createElement(nt.elementName);r.name="clock_outline",i.appendChild(r),t.appendChild(i),this._toggleElement=i}else e&&(this._toggleElement=e)}tryFocusInput(){var t;(t=this._inputElement)==null||t.select()}tryBlurInput(){var t;(t=this._inputElement)==null||t.blur()}selectInputText(){var t;(t=this._inputElement)==null||t.select()}isInputDisabled(){var t;return((t=this._inputElement)==null?void 0:t.disabled)??!1}isInputFocused(){return K(this._component.ownerDocument)===this._inputElement}setInputValue(t,e){var s;((s=this._inputElement)==null?void 0:s.value)!==t&&(this._inputElement&&(this._inputElement.value=t),this._inputMask&&this._inputMask.update(),e&&(this._emitInputEvent("change"),this._emitInputEvent("input")))}getInputValue(){var t;return this._inputMask?this._inputMask.maskedValue:((t=this._inputElement)==null?void 0:t.value)??""}setDisabled(t){this._inputElement&&(this._inputElement.disabled=t,this._inputElement.setAttribute("aria-disabled",t.toString())),this.setToggleDisabled(t)}attachDropdown(t){var e;this._targetElement||(this._targetElement=this._getTargetElement(this._component.popupTarget)),this._listDropdown=new ot(this._targetElement,t),this._listDropdown.open(),(e=this._inputElement)==null||e.setAttribute("aria-controls",`list-dropdown-popup-${t.id}`)}async detachDropdown({destroy:t=!1}={}){this._listDropdown&&(t?this._listDropdown.destroy():await this._listDropdown.close(),this._listDropdown=void 0),this._inputElement&&C(this._inputElement)}propagateKey(t){var e;(e=this._listDropdown)==null||e.handleKey(t)}setActiveDescendant(t){this._inputElement&&X(this._inputElement,!!t,"aria-activedescendant",t)}getTargetElementWidth(t){return this._getTargetElement(t).getBoundingClientRect().width}_emitInputEvent(t){var e;(e=this._inputElement)==null||e.dispatchEvent(new Event(t))}emitInputEvent(t,e){this._inputElement&&U(this._inputElement,t,e)}setInputReadonly(t){this._inputElement&&(this._inputElement.readOnly=t)}setToggleDisabled(t){if(this._toggleElement)if(this._toggleElement.setAttribute("aria-disabled",t.toString()),"disabled"in this._toggleElement)this._toggleElement.disabled=t;else{const e=this._toggleElement.querySelector("button");e&&(e.disabled=t)}}hasActiveOption(){var t;return(((t=this._listDropdown)==null?void 0:t.getActiveOptionIndex())??-1)>=0}activateOptionByIndex(t){var e;(e=this._listDropdown)==null||e.activateOption(t)}activateFirstOption(){var t;(t=this._listDropdown)==null||t.activateFirstOption()}getActiveOption(){var t;return(t=this._listDropdown)==null?void 0:t.getActiveOption()}_getTargetElement(t){return this._targetElement?this._targetElement:(this._targetElement=t?this._component.querySelector(t)||this._getDefaultTargetElement():this._getDefaultTargetElement(),this._targetElement)}_getDefaultTargetElement(){const t=this._component.querySelector(A.elementName);return(t==null?void 0:t.popoverTargetElement)??this._component}}function N(n,t,e){if(!n||/^\s*$/.test(n))return null;let s=0,i=0,r=0;if(I.test(n)){const a=mt(n);s=+a.hours||0,i=+a.minutes||0,r=+a.seconds||0}else if(b.test(n)){const a=dt(n);s=+a.hours||0,i=+a.minutes||0,r=+a.seconds||0,s===12&&a.meridiem==="AM"&&(s=0),s<12&&a.meridiem==="PM"&&(s+=12)}else return null;return F(s)+M(i)+(e?k(r):0)}function m(n,t,e){if(typeof n!="number"||n<0)return null;let s=Math.min(At(n),23);const i=Math.min(vt(n),59),a=n/(1e3*60)<720?"AM":"PM";t||(s=s<=12?s:s-12,s===0&&(s=12));let l=`${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`;if(e){const _=Math.min(H(n),59);l+=`:${String(_).padStart(2,"0")}`}return t||(l+=` ${a}`),l}function At(n){return Math.abs(Math.floor(n/(1e3*60*60)))}function vt(n){return Math.abs(Math.floor(T(n)%60))}function T(n){return n/(1e3*60)}function H(n){return Math.abs(Math.floor(Dt(n)%60))}function Dt(n){return n/1e3}function F(n){return n*60*60*1e3}function M(n){return n*60*1e3}function k(n){return n*1e3}function Lt(n){return n-k(H(n))}function P(n){const t=new Date,e=t.getHours(),s=t.getMinutes();return F(e)+M(s)+(n?k(t.getSeconds()):0)}class Nt{constructor(t){this._adapter=t,this._value=null,this._masked=!0,this._use24HourTime=!1,this._showMaskFormat=!1,this._min=null,this._max=null,this._restrictedTimes=[],this._startTime=null,this._step=o.numbers.DEFAULT_MINUTE_STEP,this._allowInput=!0,this._open=!1,this._allowSeconds=!1,this._allowInvalidTime=!1,this._showNow=!1,this._showHourOptions=!0,this._customOptions=[],this._disabled=!1,this._popupClasses=[],this._allowDropdown=!0,this._isInitialized=!1,this._identifier=G(),this._inputListener=e=>this._onInput(e),this._inputKeydownListener=e=>this._onInputKeydown(e),this._toggleMousedownListener=e=>this._onToggleMousedown(e),this._inputFocusListener=e=>this._onInputFocus(e),this._inputBlurListener=e=>this._onInputBlur(e),this._inputMousedownListener=e=>this._onInputMousedown(e)}initialize(){if(this._adapter.initialize(),!this._adapter.hasInputElement())throw new Error("Unable to locate <input> element to attach to.");if(this._adapter.initializeAccessibility(this._identifier),!this._value){const t=this._adapter.getInputValue();this._setValue(this._convertTimeStringToMillis(t,this._use24HourTime,this._allowSeconds))}this._adapter.addInputListener("focus",this._inputFocusListener),this._adapter.addInputListener("blur",this._inputBlurListener),this._adapter.addInputListener("keydown",this._inputKeydownListener,!0),this._formatInputValue(!1),typeof this._value=="number"&&this._applyValue(this._value,!1),this._applyAllowInput(),this._applyAllowDropdown(),this._applyDisabled(),this._applyMask(),this._isInitialized=!0}destroy(){this._isInitialized=!1,this._adapter.removeInputListener("input",this._inputListener),this._adapter.removeInputListener("focus",this._inputFocusListener),this._adapter.removeInputListener("blur",this._inputBlurListener),this._adapter.removeToggleListener("mousedown",this._toggleMousedownListener),this._adapter.removeInputListener("keydown",this._inputKeydownListener,!0),this._masked&&this._adapter.destroyMask(),this._closeDropdown({destroy:!0}),this._adapter.destroy()}_onInput(t){this._handleInput(this._adapter.getInputValue())}_onInputKeydown(t){var e,s;if(t.shiftKey)switch(t.code){case"Backspace":case"Delete":t.preventDefault(),this._trySetValue(null)&&this._formatInputValue();return}switch(t.code){case"Tab":this._open&&this._selectActiveOption();break;case"Esc":case"Escape":this._open&&(t.preventDefault(),t.stopPropagation(),this._closeDropdown({emitCloseEvent:!0}));break;case"Down":case"ArrowDown":this._allowDropdown&&(t.preventDefault(),this._open?this._adapter.hasActiveOption()?this._adapter.propagateKey(t.code):this._trySetActiveOption():(this._openDropdown(),typeof((e=this._dropdownConfig)==null?void 0:e.visibleStartIndex)=="number"&&this._dropdownConfig.visibleStartIndex>=0?this._adapter.activateOptionByIndex((s=this._dropdownConfig)==null?void 0:s.visibleStartIndex):this._adapter.activateFirstOption()));break;case"ArrowUp":this._allowDropdown&&(t.preventDefault(),this._open&&(this._adapter.hasActiveOption()?this._adapter.propagateKey(t.code):this._trySetActiveOption()));break;case"Enter":case"NumpadEnter":case"Home":case"End":this._open&&((t.code==="Enter"||t.code==="NumpadEnter")&&t.stopPropagation(),t.preventDefault(),this._adapter.propagateKey(t.code));break;case"KeyN":t.preventDefault();const i=P(this._allowSeconds);if(this._value!==i){const r=m(i,!0,this._allowSeconds);this._emitChangeEvent(r)&&(this._applyValue(i),this._selectInputText())}break}}_trySetActiveOption(){var t,e;!this._adapter.hasActiveOption()&&typeof((t=this._dropdownConfig)==null?void 0:t.visibleStartIndex)=="number"&&this._dropdownConfig.visibleStartIndex>=0&&this._adapter.activateOptionByIndex((e=this._dropdownConfig)==null?void 0:e.visibleStartIndex)}_selectActiveOption(){const t=this._adapter.getActiveOption();t&&this._onSelect(t.value)}_onToggleMousedown(t){this._disabled||!this.allowDropdown||(t.stopPropagation(),!this._adapter.isInputDisabled()&&(t.preventDefault(),this._open?this._closeDropdown({emitCloseEvent:!0}):(q.isMobile?this._adapter.tryBlurInput():this._adapter.tryFocusInput(),this._openDropdown())))}_onInputFocus(t){this.masked&&this._showMaskFormat&&this._applyMask(),this._allowInput&&this._adapter.selectInputText()}_onInputBlur(t){this.masked&&this._showMaskFormat&&this._applyMask(),this._formatInputValue(),this._open&&!this._adapter.isInputFocused()&&this._closeDropdown({emitCloseEvent:!0})}_onInputMousedown(t){!this._allowInput&&!this._open&&(this._openDropdown(),this._adapter.tryFocusInput(),window.requestAnimationFrame(()=>this._adapter.selectInputText()))}_applyDisabled(){this._adapter.setDisabled(this._disabled)}_applyMask(){if(this._masked&&this._allowInput){this._adapter.destroyMask();const t={showMaskFormat:this._showMaskFormat&&this._adapter.isInputFocused(),use24HourTime:this._use24HourTime,showSeconds:this._allowSeconds,prepareCallback:this._prepareMaskCallback,onChange:Y(e=>this._handleInput(e),0,!0)};this._adapter.initializeMask(t)}else this._adapter.destroyMask(),this._formatInputValue()}_applyAllowInput(){this._adapter.setInputReadonly(!this._allowInput),this._allowInput?(this._adapter.removeInputListener("mousedown",this._inputMousedownListener),this._masked||this._adapter.addInputListener("input",this._inputListener)):(this._adapter.addInputListener("mousedown",this._inputMousedownListener),this._adapter.removeInputListener("input",this._inputListener))}_applyAllowDropdown(){this._adapter.setToggleDisabled(!this._allowDropdown),this._allowDropdown?(this._adapter.removeToggleListener("mousedown",this._toggleMousedownListener),this._adapter.tryCreateToggle(),this._adapter.addToggleListener("mousedown",this._toggleMousedownListener)):this._open&&this._closeDropdown({emitCloseEvent:!0})}_applyAllowSeconds(){const t=this._value;if(this._allowSeconds){if(this._isInitialized&&t!==this._value){const e=m(this._value,!0,!0);this._emitChangeEvent(e)}}else{if(typeof this._value!="number")return;if(this._setValue(Lt(this._value)),this._isInitialized&&t!==this._value){const e=m(this._value,!0,!1);this._emitChangeEvent(e)}}}_handleInput(t){const e=t;if(!this._allowInput)return;this._open&&this._closeDropdown({emitCloseEvent:!0}),t=ft(t,this._use24HourTime,this._allowSeconds),typeof this._coercionCallback=="function"&&(t=this._coercionCallback.call(null,e,t,this._allowSeconds)),this._isValidTimeFormat(t)||(t="");let s;!this._masked&&typeof this._parseCallback=="function"?s=this._parseCallback.call(null,t):s=this._convertTimeStringToMillis(t,this._use24HourTime,this._allowSeconds),s=this._validateMillis(s),this._trySetValue(s)}_emitChangeEvent(t,e=!1){return this._adapter.emitHostEvent(o.events.CHANGE,t,!0,!e)}_trySetValue(t){if(t===this._value)return!1;const e=m(t,!0,this._allowSeconds);return this._adapter.emitInputEvent(o.events.INPUT,e),this._value!==t&&this._emitChangeEvent(e)?(this._setValue(t),!0):!1}_setValue(t){this._value=this._normalizeTimeValue(t)}_validateMillis(t){if(typeof t=="number"){const e=typeof this._min=="number"&&t<this._min,s=typeof this._max=="number"&&t>this._max;(e||s)&&(t=null)}return typeof t=="number"&&this._restrictedTimes.length&&this._restrictedTimes.includes(t)&&(t=null),t}_isValidTimeFormat(t){return!this._masked&&typeof this._validationCallback=="function"?this._validationCallback.call(this,t):ct(t)}_isValidInputValue(t){return I.test(t)}_onSelect(t){if(this._closeDropdown({emitCloseEvent:!0}),!t.isCustom&&t.metadata==="now"&&(t.time=P(this._allowSeconds)),t.isCustom)if(typeof t.customCallback=="function"){const i=t.customCallback.call(null,t.metadata);if(typeof i!="number")throw new Error("Custom options must provide a time of day value in milliseconds.");t.time=i}else throw new Error("You must implement a `toMilliseconds` callback that returns the time value to use for this custom option.");if(this._value===t.time)return;const e=m(t.time,!0,this._allowSeconds);this._emitChangeEvent(e)&&(this._applyValue(t.time),this._selectInputText())}_selectInputText(){window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{this._adapter.isInputFocused()&&this._adapter.selectInputText()})})}_applyValue(t,e=!0){this._setValue(t);const s=this._formatValue(this._value);this._adapter.getInputValue()!==s&&this._adapter.setInputValue(s,e)}_normalizeTimeValue(t){return t==null?null:t<0?0:t>o.numbers.MAX_DAY_MILLIS?o.numbers.MAX_DAY_MILLIS:t}_openDropdown(){const t=this._generateTimeOptions();if(!this.allowDropdown||!t.length||!this._adapter.inputElement)return;this._formatInputValue(),this._open=!0,this._adapter.setHostAttribute(o.attributes.OPEN);const e=t.filter(r=>!r.divider&&!r.disabled);let s=[],i=0;if(t.length)if(this._value!=null){const r=this._findClosestOptionIndex(this._value,e);r>=0&&(e[r].value.time===this._value?s=[e[r].value]:i=r)}else if(typeof this._startTime=="number"){const r=this._findClosestOptionIndex(this._startTime,e);r>=0&&r<e.length&&(i=r)}else this._startTime==null&&(i=this._getOptionIndexClosestCurrent(e));this._dropdownConfig={id:`forge-time-picker-${this._identifier}`,referenceElement:this._adapter.inputElement,selectedValues:s,syncWidth:!0,visibleStartIndex:i,popupClasses:this._popupClasses,popupStatic:!0,type:at.Standard,options:t,selectCallback:r=>this._onSelect(r),closeCallback:()=>this._closeDropdown({emitCloseEvent:!0}),activeChangeCallback:r=>this._adapter.setActiveDescendant(r),targetWidthCallback:()=>this._adapter.getTargetElementWidth(this._popupTarget)},this._adapter.attachDropdown(this._dropdownConfig),this._adapter.emitHostEvent(o.events.OPEN,void 0,!1)}_closeDropdown({destroy:t=!1,emitCloseEvent:e=!1}={}){this._open=!1,this._dropdownConfig=void 0,this._adapter.removeHostAttribute(o.attributes.OPEN),this._adapter.detachDropdown({destroy:t}),e&&this._adapter.emitHostEvent(o.events.CLOSE,!0,!1)}_getOptionIndexClosestCurrent(t){const e=new Date,s=`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`,i=N(s,!0,!1);return this._findClosestOptionIndex(i,t)}_findClosestOptionIndex(t,e){const s=e.reduce((i,r)=>Math.abs((r.value.time||0)-t)<Math.abs((i.value.time||0)-t)?r:i);return e.indexOf(s)}_formatInputValue(t=!0){const e=this._adapter.getInputValue();if(this._allowInvalidTime&&!this._masked&&e&&!this._value)return;const s=this._formatValue(this._value);e!==s&&(this._adapter.setInputValue(s,t),this._adapter.emitInputEvent(o.events.INPUT,s))}_generateTimeOptions(){const t=this._min!=null?Math.max(T(this._min),0):0,e=this._max!=null?Math.min(T(this._max),o.numbers.MAX_DAY_MINUTES):o.numbers.MAX_DAY_MINUTES,s=this._step,i=[];let r=[];if(this._showHourOptions){for(let l=t;l<=e&&l!==o.numbers.MAX_DAY_MINUTES;l+=s){const _=M(l),c=this._restrictedTimes.includes(_),f=m(_,this._use24HourTime,!1)||"",S={time:_};i.push({label:f,value:S,disabled:c})}const a=i.findIndex(l=>l.value.time/1e3/60>=720);a>=0&&a<i.length-1&&i.splice(a,0,{label:"",value:null,divider:!0})}if(this._showNow){const a={time:null,metadata:"now"};r.push({label:"Now",value:a})}if(Array.isArray(this._customOptions)&&this._customOptions.length){const a=this._customOptions.map(l=>{const _={time:null,metadata:l.value,isCustom:!0,customCallback:l.toMilliseconds};return{label:l.label,value:_}});r=[...r,...a]}return r.length&&(i.length&&i.splice(0,0,{label:"",value:null,divider:!0}),r.forEach((a,l)=>i.splice(l,0,a))),i}_convertTimeStringToMillis(t,e,s){return(!t||!this._isValidTimeFormat(t))&&(t=""),N(t,e,s)}_formatValue(t){return!this._masked&&typeof this._formatCallback=="function"?this._formatCallback.call(null,t,this._use24HourTime,this._allowSeconds):m(this._value,this._use24HourTime,this._allowSeconds)||""}_warnInvalidFormat(t){console.warn(`The specified value "${t}" does not conform to the required format. The format is "HH:mm", "HH:mm:ss" where HH is 00-23, mm is 00-59, and ss is 00-59.`)}get open(){return this._open}set open(t){this._open!==t&&this._isInitialized&&(this._open=t,this._open?this._openDropdown():this._closeDropdown())}get masked(){return this._masked}set masked(t){this._masked!==t&&(this._masked=t,this._isInitialized&&(this._masked?(this._adapter.removeInputListener("input",this._inputListener),this._applyMask()):(this._adapter.destroyMask(),this._formatInputValue(),this._adapter.addInputListener("input",this._inputListener))))}get showMaskFormat(){return this._showMaskFormat}set showMaskFormat(t){this._showMaskFormat!==t&&(this._showMaskFormat=t)}get allowSeconds(){return this._allowSeconds}set allowSeconds(t){this._allowSeconds!==t&&(this._allowSeconds=!!t,this._applyAllowSeconds(),this._isInitialized&&(this._applyMask(),this._formatInputValue()),this._adapter.setHostAttribute(o.attributes.ALLOW_SECONDS,`${!!t}`))}get use24HourTime(){return this._use24HourTime}set use24HourTime(t){this._use24HourTime!==t&&(this._use24HourTime=!!t,this._isInitialized&&(this._applyMask(),this._formatInputValue()),this._adapter.setHostAttribute(o.attributes.USE_24_HOUR_TIME,`${!!t}`))}get allowInvalidTime(){return this._allowInvalidTime}set allowInvalidTime(t){this._allowInvalidTime!==t&&(this._allowInvalidTime=!!t,this._adapter.setHostAttribute(o.attributes.ALLOW_INVALID_TIME,`${!!t}`))}get value(){return m(this._value,!0,this._allowSeconds)}set value(t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}const e=this._validateMillis(this._convertTimeStringToMillis(t,!0,!0));this._setValue(e),this._isInitialized&&this._applyValue(this._value)}get min(){return m(this._min,!0,this._allowSeconds)}set min(t){if(this._min!==t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}this._min=this._convertTimeStringToMillis(t,!0,this._allowSeconds);const e=this._validateMillis(this._value);this._setValue(e),this._isInitialized&&this._applyValue(e)}}get max(){return m(this._max,!0,this._allowSeconds)}set max(t){if(this._max!==t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}this._max=this._convertTimeStringToMillis(t,!0,this._allowSeconds);const e=this._validateMillis(this._value);this._setValue(e),this._isInitialized&&this._applyValue(e)}}get restrictedTimes(){return this._restrictedTimes.map(t=>m(t,!0,this._allowSeconds)).filter(t=>typeof t=="string")}set restrictedTimes(t){Array.isArray(t)||(t=[]),this._restrictedTimes=t.filter(e=>typeof e=="string").map(e=>this._convertTimeStringToMillis(e,!0,!0)).filter(e=>typeof e=="number")}get startTime(){return m(this._startTime,!0,this._allowSeconds)}set startTime(t){if(this._startTime!==t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}this._startTime=this._convertTimeStringToMillis(t,!0,this._allowSeconds)}}get step(){return this._step}set step(t){this._step=t}get allowInput(){return this._allowInput}set allowInput(t){this._allowInput!==t&&(this._allowInput=t,this._isInitialized&&(this._applyAllowInput(),this._applyMask()))}get popupTarget(){return this._popupTarget}set popupTarget(t){this._popupTarget!==t&&(this._popupTarget=t)}get showNow(){return this._showNow}set showNow(t){this._showNow!==t&&(this._showNow=t)}get showHourOptions(){return this._showHourOptions}set showHourOptions(t){this._showHourOptions!==t&&(this._showHourOptions=t)}get customOptions(){return this._customOptions}set customOptions(t){this._customOptions=Array.isArray(t)?t:[]}set validationCallback(t){this._validationCallback=t,this._isInitialized&&this._applyMask()}set parseCallback(t){this._parseCallback=t}set formatCallback(t){this._formatCallback=t}set coercionCallback(t){this._coercionCallback=t}set prepareMaskCallback(t){this._prepareMaskCallback=t,this._isInitialized&&this._applyMask()}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=!!t,this._isInitialized&&this._applyDisabled(),this._adapter.toggleHostAttribute(o.attributes.DISABLED,this._disabled))}get popupClasses(){return Array.isArray(this._popupClasses)?[...this._popupClasses]:this._popupClasses}set popupClasses(t){Array.isArray(t)?this._popupClasses=[...t]:this._popupClasses=[t]}get allowDropdown(){return this._allowDropdown}set allowDropdown(t){this._allowDropdown!==t&&(this._allowDropdown=t,this._isInitialized&&this._applyAllowDropdown())}}const Pt=`<template>
  <slot></slot>
</template>
`,Vt=":host{display:block}:host([hidden]){display:none}";var Ht=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,h=(n,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,r=n.length-1,a;r>=0;r--)(a=n[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&Ht(t,e,i),i};let u=class extends R{static get observedAttributes(){return[o.attributes.VALUE,o.attributes.OPEN,o.attributes.ALLOW_SECONDS,o.attributes.MASKED,o.attributes.SHOW_MASK_FORMAT,o.attributes.USE_24_HOUR_TIME,o.attributes.ALLOW_INVALID_TIME,o.attributes.MIN,o.attributes.MAX,o.attributes.START_TIME,o.attributes.STEP,o.attributes.ALLOW_INPUT,o.attributes.SHOW_NOW,o.attributes.SHOW_HOUR_OPTIONS,o.attributes.DISABLED,o.attributes.POPUP_CLASSES,o.attributes.ALLOW_DROPDOWN]}constructor(){super(),rt.define([Q,Z]),$(this,Pt,Vt),this._core=new Nt(new Ot(this))}connectedCallback(){this.querySelector(o.selectors.INPUT)?this._core.initialize():j(this,o.selectors.INPUT).then(()=>this._core.initialize())}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(n,t,e){switch(n){case o.attributes.VALUE:this.value=e;break;case o.attributes.OPEN:this.open=d(e);break;case o.attributes.ALLOW_SECONDS:this.allowSeconds=d(e);break;case o.attributes.MASKED:this.masked=d(e);break;case o.attributes.SHOW_MASK_FORMAT:this.showMaskFormat=d(e);break;case o.attributes.USE_24_HOUR_TIME:this.use24HourTime=d(e);break;case o.attributes.ALLOW_INVALID_TIME:this.allowInvalidTime=d(e);break;case o.attributes.SHOW_NOW:this.showNow=d(e);break;case o.attributes.SHOW_HOUR_OPTIONS:this.showHourOptions=d(e);break;case o.attributes.MIN:this.min=e;break;case o.attributes.MAX:this.max=e;break;case o.attributes.START_TIME:this.startTime=e;break;case o.attributes.STEP:this.step=J(e);break;case o.attributes.ALLOW_INPUT:this.allowInput=d(e);break;case o.attributes.DISABLED:this.disabled=d(e);break;case o.attributes.POPUP_CLASSES:this.popupClasses=e;break;case o.attributes.ALLOW_DROPDOWN:this.allowDropdown=d(e);break}}};h([p()],u.prototype,"value",2);h([p()],u.prototype,"open",2);h([p()],u.prototype,"allowSeconds",2);h([p()],u.prototype,"masked",2);h([p()],u.prototype,"showMaskFormat",2);h([p()],u.prototype,"use24HourTime",2);h([p()],u.prototype,"allowInvalidTime",2);h([p()],u.prototype,"min",2);h([p()],u.prototype,"max",2);h([p()],u.prototype,"restrictedTimes",2);h([p()],u.prototype,"startTime",2);h([p()],u.prototype,"step",2);h([p()],u.prototype,"allowInput",2);h([p()],u.prototype,"showNow",2);h([p()],u.prototype,"showHourOptions",2);h([p()],u.prototype,"customOptions",2);h([p()],u.prototype,"validationCallback",2);h([p()],u.prototype,"parseCallback",2);h([p()],u.prototype,"formatCallback",2);h([p()],u.prototype,"coercionCallback",2);h([p()],u.prototype,"prepareMaskCallback",2);h([p()],u.prototype,"disabled",2);h([p()],u.prototype,"popupClasses",2);h([p()],u.prototype,"allowDropdown",2);h([p()],u.prototype,"popupTarget",2);u=h([W({name:o.elementName,dependencies:[lt,ut,it,D,ht,D,pt]})],u);
