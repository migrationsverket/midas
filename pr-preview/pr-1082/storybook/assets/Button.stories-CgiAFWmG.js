import{j as l}from"./iframe-DZnWAGNq.js";import{B as m}from"./Button-DcP_UxfK.js";import{X as p}from"./x-B3FTSjlW.js";import{P as u}from"./plus-C7gmTFj_.js";import{T as g,a as h}from"./Tooltip-YuecJYos.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BTPuoZ6n.js";import"./utils-Btsh_mej.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dc0Ha1vW.js";import"./useFocusRing-BZzOLfX3.js";import"./index--cp8vNXJ.js";import"./index-DH1eMf2P.js";import"./useLabel-iphFOCA9.js";import"./useLabels-bUzroRw2.js";import"./useButton-DqeMFL8_.js";import"./clsx-Ciqy0D92.js";import"./Button.module-BFenTVPP.js";import"./useLocalizedStringFormatter-GZqDfzDD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-DnUFLHhp.js";import"./VisuallyHidden-BIds43GM.js";import"./OverlayArrow-BVJeE4kz.js";import"./useResizeObserver-BkJg5wU7.js";import"./useControlledState-6kQgBtxG.js";import"./animation-CcV7oYXW.js";const A={component:m,title:"Components/Button",tags:["autodocs"],args:{variant:"primary",children:"Button",size:"large",isPending:!1},argTypes:{children:{type:"string"},isDisabled:{options:[!0,!1],control:{type:"radio"}}}},r={args:{children:"Button",className:"test-class"}},e={args:{variant:"secondary"}},a={args:{children:"Lägg till",variant:"tertiary",icon:u}},s={args:{variant:"primary",isDisabled:!0,children:"Lägg till"}},t={args:{variant:"secondary",isDisabled:!0}},o={args:{children:"Button",fullwidth:!0}},n={args:{children:void 0,icon:p,variant:"icon","aria-label":"Stäng"}},i={args:{children:"Button",variant:"danger"}},c={parameters:{layout:"centered"},args:{children:"Lägg till",isInactive:!0},render:d=>l.jsxs(g,{shouldCloseOnPress:!1,children:[l.jsx(m,{...d}),l.jsx(h,{children:"Det saknas ett beslut"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    fullwidth: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined,
    icon: X,
    variant: 'icon',
    'aria-label': 'Stäng'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const G=["Primary","Secondary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","PrimaryFullwidth","Icon","Danger","Inactive"];export{i as Danger,n as Icon,c as Inactive,r as Primary,s as PrimaryDisabled,o as PrimaryFullwidth,e as Secondary,t as SecondaryDisabled,a as TertiaryWithIcon,G as __namedExportsOrder,A as default};
