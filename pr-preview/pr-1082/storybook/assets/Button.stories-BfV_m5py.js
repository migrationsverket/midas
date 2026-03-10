import{j as l}from"./iframe-CsxWE5EL.js";import{B as m}from"./Button-yd2G3ZOl.js";import{X as p}from"./x-4V_XJgsU.js";import{P as u}from"./plus-rJ5ehQbD.js";import{T as g,a as h}from"./Tooltip-Ddrsa8dD.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.module-7yYQGR8l.js";import"./Button-CDY69ujX.js";import"./utils-P0665-nd.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqRB_zEB.js";import"./useFocusRing-Dx7Mqj5I.js";import"./index-BAsiWoUz.js";import"./index-DKO6MG4x.js";import"./useLabels-h1mkGsRa.js";import"./useButton-BpMa8VN4.js";import"./clsx-Ciqy0D92.js";import"./useLocalizedStringFormatter-P5TE6vXt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-CCm7dT8n.js";import"./VisuallyHidden-nLPm3Kol.js";import"./OverlayArrow-ChfjKiLu.js";import"./useResizeObserver-qJq3SY9_.js";import"./useControlledState-57nrhz75.js";import"./animation-tx7xcwso.js";const q={component:m,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large",isPending:!1},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}}},r={args:{children:"Button",className:"test-class"}},e={args:{variant:"secondary"}},a={args:{children:"Lägg till",variant:"tertiary",icon:u}},s={args:{variant:"primary",isDisabled:!0,children:"Lägg till"}},t={args:{variant:"secondary",isDisabled:!0}},n={args:{children:"Button",fullwidth:!0}},o={args:{children:void 0,icon:p,variant:"icon","aria-label":"Stäng"}},i={args:{children:"Button",variant:"danger"}},c={parameters:{layout:"centered"},args:{children:"Lägg till",isInactive:!0},render:d=>l.jsxs(g,{shouldCloseOnPress:!1,children:[l.jsx(m,{...d}),l.jsx(h,{children:"Det saknas ett beslut"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    className: 'test-class'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isDisabled: true,
    children: 'Lägg till'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  render: args => <TooltipTrigger shouldCloseOnPress={false}>
      <Button {...args} />
      <Tooltip>Det saknas ett beslut</Tooltip>
    </TooltipTrigger>
}`,...c.parameters?.docs?.source}}};const A=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger","Inactive"];export{i as Danger,o as Icon,c as Inactive,r as Primary,s as PrimaryDisabled,n as PrimaryFullwidth,e as Secondary,t as SecondaryDisabled,a as TertiaryWithIcon,A as __namedExportsOrder,q as default};
