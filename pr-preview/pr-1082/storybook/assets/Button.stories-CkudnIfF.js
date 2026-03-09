import{j as m}from"./iframe-DF-gckEl.js";import{B as l}from"./Button-xgruqnpI.js";import{X as p}from"./x-D5acHrs_.js";import{P as u}from"./plus-6-sHbwGv.js";import{T as g,a as y}from"./Tooltip-Dnyki1lH.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.module-7yYQGR8l.js";import"./Button-DfFeWMER.js";import"./utils-xE_2EOTS.js";import"./clsx-B-dksMZM.js";import"./Hidden-CnADKIpW.js";import"./useFocusRing-DVmaifLp.js";import"./index-BB1CKHGL.js";import"./index-B-8oVGre.js";import"./useLabels-DYYbGYck.js";import"./useButton-D5_aypw0.js";import"./clsx-Ciqy0D92.js";import"./useLocalizedStringFormatter-CPX24HR9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-DlP1PWjK.js";import"./VisuallyHidden-WVzpTwv1.js";import"./OverlayArrow-fvY2aP3t.js";import"./useResizeObserver-toiQEKaZ.js";import"./useControlledState-BozieDQw.js";import"./animation-r1pRCCBf.js";const q={component:l,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large",isPending:!1},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}}},r={args:{children:"Button",className:"test-class"}},a={args:{variant:"secondary"}},e={args:{children:"Lägg till",variant:"tertiary",icon:u}},t={args:{variant:"primary",isDisabled:!0,children:"Lägg till"}},s={args:{variant:"secondary",isDisabled:!0}},n={args:{children:"Button",fullwidth:!0}},o={args:{children:void 0,icon:p,variant:"icon","aria-label":"Stäng"}},i={args:{children:"Button",variant:"danger"}},c={parameters:{layout:"centered"},args:{children:"Lägg till",isInactive:!0},render:d=>m.jsxs(g,{children:[m.jsx(l,{...d}),m.jsx(y,{children:"Det saknas ett beslut"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isDisabled: true,
    children: 'Lägg till'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined,
    icon: X,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'danger'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Lägg till',
    isInactive: true
  },
  render: args => <TooltipTrigger>
      <Button {...args} />
      <Tooltip>Det saknas ett beslut</Tooltip>
    </TooltipTrigger>
}`,...c.parameters?.docs?.source}}};const A=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger","Inactive"];export{i as Danger,o as Icon,c as Inactive,r as Primary,t as PrimaryDisabled,n as PrimaryFullwidth,a as Secondary,s as SecondaryDisabled,e as TertiaryWithIcon,A as __namedExportsOrder,q as default};
