import"./lit-element-JplMEnZc.js";import{x as s}from"./lit-html-paDGiEfB.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as d}from"./utils-cDewhVsU.js";import"./feature-detection-ONR9WHvu.js";import"./calendar-DWv5EfKC.js";import"./index-BmocOEUj.js";const a="forge-calendar",c=o("forge-calendar-date-select"),i=o("forge-calendar-focus-change"),y=o("forge-calendar-month-change"),u=o("forge-calendar-view-change"),m={title:"Components/Calendar",render:e=>s`<forge-calendar
      .month=${e.month}
      .year=${e.year}
      .mode=${e.mode}
      .readonly=${e.readonly}
      .allowSingleDateRange=${e.allowSingleDateRange}
      .showToday=${e.showToday}
      .showOtherMonths=${e.showOtherMonths}
      .fixedHeight=${e.fixedHeight}
      .view=${e.view}
      .showHeader=${e.showHeader}
      .selectionFollowsMonth=${e.selectionFollowsMonth}
      .yearRange=${e.yearRange}
      .listYears=${e.listYears}
      .menuAnimation=${e.menuAnimation}
      .clearButton=${e.clearButton}
      .todayButton=${e.todayButton}
      .min=${e.min}
      .max=${e.max}
      .disabledDates=${e.disabledDates}
      .disabledDaysOfWeek=${e.disabledDaysOfWeek}
      .constrainToEnabled=${e.constrainToEnabled}
      .events=${e.events}
      .locale=${e.locale}
      .firstDayOfWeek=${e.firstDayOfWeek}
      .weekendDays=${e.weekendDays}
      .preventFocus=${e.preventFocus}
      @forge-calendar-date-select=${c}
      @forge-calendar-focus-change=${i}
      @forge-calendar-month-change=${y}
      @forge-calendar-view-change=${u}></forge-calendar>`,component:a,argTypes:{...d({tagName:a,exclude:["clearCallback","dateBuilder","dateSelectCallback","dayBuilder","disabledDateBuilder","eventBuilder","todayCallback","tooltipBuilder","value"],controls:{activeDate:{control:{type:"date"}},disabledDates:{control:{type:"object"}},disabledDaysOfWeek:{control:{type:"multi-select",labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},options:[0,1,2,3,4,5,6]},events:{control:{type:"object"}},firstDayOfWeek:{control:{type:"select",labels:["Default","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},options:[0,1,2,3,4,5,6]},month:{control:{type:"select",labels:["January","February","March","April","May","June","July","August","September","October","November","December"]},options:[0,1,2,3,4,5,6,7,8,9,10,11]},weekendDays:{control:{type:"multi-select",labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},options:[0,1,2,3,4,5,6]},menuAnimation:{control:"select",options:["scale","fade","none"]},mode:{control:"select",options:["single","multiple","range"]},view:{control:"select",options:["date","month","year"]}}})},args:{month:new Date().getMonth(),year:new Date().getFullYear(),mode:"single",readonly:!1,allowSingleDateRange:!0,showToday:!1,showOtherMonths:!1,fixedHeight:!1,view:"month",showHeader:!0,selectionFollowsMonth:!1,yearRange:"-50:+50",listYears:!0,menuAnimation:"scale",clearButton:!1,todayButton:!1,disabledDates:[],disabledDaysOfWeek:[],constrainToEnabled:!0,events:[],locale:"en-US",preventFocus:!1}},t={};var n,l,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const h=["Demo"],v=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:h,default:m},Symbol.toStringTag,{value:"Module"}));export{v as C,t as D};
