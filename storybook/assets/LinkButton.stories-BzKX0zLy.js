import{L as i}from"./LinkButton-Ci9nkqE3.js";import"./iframe-BpYPS4gm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B9QF3Ssc.js";import"./utils-BkzBTegZ.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-Pq1S8Nkx.js";import"./index-C8EDYR9x.js";import"./index-CpQ1o8lj.js";import"./clsx-Ciqy0D92.js";import"./square-arrow-out-up-right-CbgpopC2.js";import"./createLucideIcon-Crq6vW28.js";import"./arrow-right-Cf3efpsH.js";const k={component:i,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}},args:{size:"large"}},r={args:{children:"Till E-tjänst",href:"#","data-testid":"link-button",className:"test-class"}},a={args:{...r.args,variant:"secondary"}},e={args:{...r.args,variant:"tertiary"}},t={args:{...r.args,children:"Föregående",iconPlacement:"left"}},s={args:{...r.args,isDisabled:!0}},n={args:{children:"Till E-tjänst","data-testid":"link-button",onPress:()=>alert("navigation fn")}},o={args:{"data-testid":"link-button",children:"Radera",variant:"danger"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#',
    'data-testid': 'link-button',
    className: 'test-class'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn')
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    'data-testid': 'link-button',
    children: 'Radera',
    variant: 'danger'
  }
}`,...o.parameters?.docs?.source}}};const S=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink","Danger"];export{n as AppLink,o as Danger,s as Disabled,t as Previous,r as Primary,a as Secondary,e as Tertiary,S as __namedExportsOrder,k as default};
